export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  contactId: string;
  content: string;
  senderId: string; // 'me' or contact id
  timestamp: Date;
}
