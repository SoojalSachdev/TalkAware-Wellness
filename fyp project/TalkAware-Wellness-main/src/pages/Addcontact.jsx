import { useState } from "react";
import { addContact } from "../api/api";

function AddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await addContact({ name, phone });
      setMessage("Contact saved successfully");
      setName("");
      setPhone("");
    } catch (err) {
      setMessage(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <button type="submit">Save</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default AddContact;
