import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Contact, Message } from "@/types/chat";
import ContactsList from "@/components/chat/ContactsList";
import AddContactDialog from "@/components/chat/AddContactDialog";
import ChatInterface from "@/components/chat/ChatInterface";
import { Button } from "@/components/ui/button";
import { LogOut, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const API_BASE_URL = "http://localhost:8000";

const Chat = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});

  // 🔐 Auth check
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/auth");
      return;
    }
    fetchContacts();
  }, [navigate]);

  const fetchContacts = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/contacts`);
      const data = await res.json();

      const mapped: Contact[] = data.map((c: any) => ({
        id: String(c.id),
        name: c.contact_name,
        phone: c.phone,
        createdAt: new Date(),
      }));

      setContacts(mapped);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleAddContact = async (
    contactData: Omit<Contact, "id" | "createdAt">
  ) => {
    await fetch(`${API_BASE_URL}/add-contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });

    setContacts((prev) => [
      ...prev,
      { ...contactData, id: crypto.randomUUID(), createdAt: new Date() },
    ]);
  };

  const handleSendMessage = (content: string) => {
    if (!selectedContact) return;

    const msg: Message = {
      id: crypto.randomUUID(),
      contactId: selectedContact.id,
      content,
      senderId: "me",
      timestamp: new Date(),
    };

    setMessages((prev) => ({
      ...prev,
      [selectedContact.id]: [...(prev[selectedContact.id] || []), msg],
    }));
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-b-2 border-primary rounded-full" />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="h-screen flex flex-col">
        {!selectedContact ? (
          <>
            <div className="flex justify-between p-4 border-b">
              <h1 className="text-xl font-semibold">Chats</h1>
              <Button size="icon" variant="ghost" onClick={handleSignOut}>
                <LogOut />
              </Button>
            </div>
            <AddContactDialog onAddContact={handleAddContact} />
            <ContactsList
              contacts={contacts}
              selectedContactId={null}
              onSelectContact={setSelectedContact}
            />
          </>
        ) : (
          <ChatInterface
            contact={selectedContact}
            messages={messages[selectedContact.id] || []}
            onSendMessage={handleSendMessage}
            onBack={() => setSelectedContact(null)}
            isMobile
          />
        )}
      </div>
    );
  }

  return (
    <div className="h-screen flex">
      <div className="w-80 border-r">
        <div className="flex justify-between p-4 border-b">
          <h1 className="text-xl font-semibold">Chats</h1>
          <Button size="icon" variant="ghost" onClick={handleSignOut}>
            <LogOut />
          </Button>
        </div>
        <AddContactDialog onAddContact={handleAddContact} />
        <ContactsList
          contacts={contacts}
          selectedContactId={selectedContact?.id || null}
          onSelectContact={setSelectedContact}
        />
      </div>

      <div className="flex-1">
        {selectedContact ? (
          <ChatInterface
            contact={selectedContact}
            messages={messages[selectedContact.id] || []}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
            <MessageSquare className="w-16 h-16 mb-4 opacity-30" />
            Select a contact to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
