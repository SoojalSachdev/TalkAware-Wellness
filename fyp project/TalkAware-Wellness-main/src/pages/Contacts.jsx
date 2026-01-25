import { useEffect, useState } from "react";
import { fetchContacts } from "../api/api";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadContacts();
  }, []);

  async function loadContacts() {
    try {
      const data = await fetchContacts();
      setContacts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {contacts.map((c) => (
        <div key={c.id}>
          <strong>{c.contact_name}</strong>
          <div>{c.phone}</div>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
