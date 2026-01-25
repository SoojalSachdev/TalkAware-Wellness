from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector

app = FastAPI()
@app.get("/")
def root():
    return {"message": "API Running"}


# =============================
# CORS
# =============================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =============================
# Database Connection
# =============================
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="cs221013",
        database="talkaware"
    )

# =============================
# Request Models
# =============================
class SignupRequest(BaseModel):
    full_name: str
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str

class Contact(BaseModel):
    name: str
    phone: str
# =============================
# Root
# =============================
@app.get("/")
def root():
    return {"message": "FastAPI running"}

# =============================
# Signup
# =============================
@app.post("/signup")
def signup(user: SignupRequest):
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)

    cursor.execute("SELECT id FROM users WHERE email=%s", (user.email,))
    if cursor.fetchone():
        raise HTTPException(status_code=400, detail="Email already exists")

    cursor.execute(
        "INSERT INTO users (full_name, email, password) VALUES (%s, %s, %s)",
        (user.full_name, user.email, user.password)
    )

    db.commit()
    cursor.close()
    db.close()

    return {"message": "User created successfully"}

# =============================
# Login
# =============================
@app.post("/login")
def login(user: LoginRequest):
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)

    cursor.execute(
        "SELECT * FROM users WHERE email=%s AND password=%s",
        (user.email, user.password)
    )
    db_user = cursor.fetchone()

    cursor.close()
    db.close()

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return {
        "message": "Login successful",
        "user": {

            "id": db_user["id"],
            "full_name": db_user["full_name"],
            "email": db_user["email"]
        }
    }
@app.post("/add-contact")
def add_contact(contact: Contact):
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)

    cursor.execute(
            "Select id FROM contacts where phone=%s", (contact.phone,))
    if cursor.fetchone():
        raise HTTPException(status_code=400, detail="Contact already exists")
    cursor.execute(
        "INSERT INTO contacts (contact_name, phone) VALUES (%s, %s)",
        (contact.name, contact.phone))
    
    db.commit()
    cursor.close()
    db.close()
    
    return {"message": "Contact saved successfully"}


@app.get("/contacts")
def get_contacts():
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM contacts ORDER BY contact_name ASC")
    return cursor.fetchall()