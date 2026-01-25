import 'package:flutter/material.dart';

class ChatScreen extends StatelessWidget {
  final String contactName;

  const ChatScreen({super.key, required this.contactName});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF7F9FC),

      appBar: AppBar(
        elevation: 1,
        backgroundColor: Colors.white,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () => Navigator.pop(context),
        ),
        title: Row(
          children: [
            CircleAvatar(
              backgroundColor: Colors.blueAccent.shade100,
              child: Text(
                contactName[0],
                style: const TextStyle(color: Colors.white),
              ),
            ),
            const SizedBox(width: 10),
            Text(
              contactName,
              style: const TextStyle(
                color: Color(0xFF2E3A59),
                fontWeight: FontWeight.w600,
              ),
            ),
          ],
        ),
      ),

      body: Column(
        children: [
          Expanded(
            child: Center(
              child: Text(
                "Conversation with $contactName",
                style: const TextStyle(color: Colors.black54),
              ),
            ),
          ),

          _messageInput(),
        ],
      ),
    );
  }

  Widget _messageInput() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      color: Colors.white,
      child: Row(
        children: [
          Expanded(
            child: TextField(
              decoration: InputDecoration(
                hintText: "Type a message...",
                filled: true,
                fillColor: const Color(0xFFF1F3F6),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(24),
                  borderSide: BorderSide.none,
                ),
                contentPadding:
                    const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
              ),
            ),
          ),
          const SizedBox(width: 10),
          CircleAvatar(
            backgroundColor: const Color(0xFF5B9DFF),
            child: const Icon(Icons.send, color: Colors.white),
          )
        ],
      ),
    );
  }
}
