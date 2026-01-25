import { Contact } from "@/types/chat";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactsListProps {
  contacts: Contact[];
  selectedContactId: string | null;
  onSelectContact: (contact: Contact) => void;
}

const ContactsList = ({ contacts, selectedContactId, onSelectContact }: ContactsListProps) => {
  return (
    <div className="flex flex-col">
      {contacts.length === 0 ? (
        <div className="p-6 text-center text-muted-foreground">
          <User className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p className="text-sm">No contacts yet</p>
          <p className="text-xs mt-1">Add a contact to start chatting</p>
        </div>
      ) : (
        contacts.map((contact) => (
          <button
            key={contact.id}
            onClick={() => onSelectContact(contact)}
            className={cn(
              "flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors text-left border-b border-border",
              selectedContactId === contact.id && "bg-muted"
            )}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-semibold text-lg">
                {contact.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{contact.name}</p>
              <p className="text-sm text-muted-foreground truncate">{contact.phoneNumber}</p>
            </div>
          </button>
        ))
      )}
    </div>
  );
};

export default ContactsList;
