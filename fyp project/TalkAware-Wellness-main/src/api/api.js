const BASE_URL = "http://localhost:8000";

// GET CONTACTS
export async function fetchContacts() {
  const response = await fetch(`${BASE_URL}/contacts`);
  if (!response.ok) {
    throw new Error("Failed to fetch contacts");
  }
  return await response.json();
}
//signupuser
export async function signupUser(user) {
  const res = await fetch("http://localhost:8000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail);
  }

  return data;
}

// ADD CONTACT
export async function addContact(contact) {
  const response = await fetch(`${BASE_URL}/add-contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Failed to add contact");
  }

  return data;
}
