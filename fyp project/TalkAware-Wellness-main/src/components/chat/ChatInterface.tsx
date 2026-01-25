import { useState, useRef, useEffect } from "react";
import { Contact, Message } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInterfaceProps {
  contact: Contact;
  messages: Message[];
  onSendMessage: (content: string) => void;
  onBack?: () => void;
  isMobile?: boolean;
}

const ChatInterface = ({ contact, messages, onSendMessage, onBack, isMobile }: ChatInterfaceProps) => {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Chat Header */}
      <div className="flex items-center gap-3 p-4 border-b border-border bg-card">
        {isMobile && onBack && (
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-1">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        )}
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="text-primary font-semibold">
            {contact.name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <p className="font-medium text-foreground">{contact.name}</p>
          <p className="text-xs text-muted-foreground">{contact.phoneNumber}</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground text-sm">No messages yet. Say hello!</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.senderId === "me" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[70%] rounded-2xl px-4 py-2 shadow-sm",
                  message.senderId === "me"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-card text-card-foreground rounded-bl-md"
                )}
              >
                <p className="text-sm">{message.content}</p>
                <p
                  className={cn(
                    "text-[10px] mt-1",
                    message.senderId === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}
                >
                  {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-border bg-card">
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button onClick={handleSend} disabled={!inputValue.trim()} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
