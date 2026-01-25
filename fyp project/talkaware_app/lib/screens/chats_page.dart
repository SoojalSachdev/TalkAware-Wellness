import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'chat_screen.dart';

class ChatDashboard extends StatefulWidget {
  const ChatDashboard({super.key});

  @override
  State<ChatDashboard> createState() => _ChatDashboardState();
}

class _ChatDashboardState extends State<ChatDashboard> {
  List<Map<String, dynamic>> contacts = [];
  bool isLoading = true;

  // ✅ Flutter Web + FastAPI
  final String apiUrl = 'http://localhost:8000/contacts';

  @override
  void initState() {
    super.initState();
    fetchContacts();
  }

  // ---------------- FETCH CONTACTS ----------------
  Future<void> fetchContacts() async {
    try {
      setState(() => isLoading = true);

      final response = await http.get(Uri.parse(apiUrl));

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        // ✅ Handles BOTH:
        // 1) [ { ... } ]
        // 2) { "contacts": [ { ... } ] }
        final List data =
            decoded is List ? decoded : decoded['contacts'] ?? [];

        setState(() {
          contacts = List<Map<String, dynamic>>.from(data);
        });
      } else {
        _showError("Failed to load contacts");
      }
    } catch (e) {
      _showError("Error: $e");
    } finally {
      setState(() => isLoading = false);
    }
  }

  void _showError(String message) {
    ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text(message)));
  }

  // ---------------- UI ----------------
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF7F9FC),

      appBar: AppBar(
        elevation: 0,
        backgroundColor: Colors.white,
        title: const Text(
          "TalkAware",
          style: TextStyle(
            color: Color(0xFF2E3A59),
            fontWeight: FontWeight.bold,
          ),
        ),
      ),

      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _greetingSection(),
          Expanded(child: _chatList()),
        ],
      ),

      floatingActionButton: FloatingActionButton(
        backgroundColor: const Color(0xFF5B9DFF),
        onPressed: () => _openContacts(context),
        child: const Icon(Icons.chat_bubble_outline),
      ),
    );
  }

  // ---------------- GREETING ----------------
  Widget _greetingSection() {
    return const Padding(
      padding: EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Hello 👋",
            style: TextStyle(
              fontSize: 26,
              fontWeight: FontWeight.bold,
              color: Color(0xFF2E3A59),
            ),
          ),
          SizedBox(height: 6),
          Text(
            "How are you feeling today?",
            style: TextStyle(color: Colors.black54),
          ),
        ],
      ),
    );
  }

  // ---------------- CHAT LIST ----------------
  Widget _chatList() {
    if (isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    if (contacts.isEmpty) {
      return const Center(child: Text("No contacts found"));
    }

    return ListView.builder(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      itemCount: contacts.length,
      itemBuilder: (context, index) {
        final contact = contacts[index];
        final name = contact['name']?.toString() ?? 'Unknown';

        return Card(
          margin: const EdgeInsets.only(bottom: 12),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
          ),
          child: ListTile(
            leading: CircleAvatar(
              backgroundColor: Colors.blueAccent.shade100,
              child: Text(
                name[0],
                style: const TextStyle(color: Colors.white),
              ),
            ),
            title: Text(name),
            trailing: const Icon(Icons.chevron_right),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (_) => ChatScreen(contactName: name),
                ),
              );
            },
          ),
        );
      },
    );
  }

  // ---------------- BOTTOM SHEET ----------------
  void _openContacts(BuildContext context) {
    showModalBottomSheet(
      context: context,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (context) {
        return Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text(
                "Start a new chat",
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 20),

              ...contacts.map<Widget>((contact) {
                final name = contact['name']?.toString() ?? 'Unknown';
                return ListTile(
                  title: Text(name),
                  onTap: () {
                    Navigator.pop(context);
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => ChatScreen(contactName: name),
                      ),
                    );
                  },
                );
              }).toList(),

              const Divider(),

              TextButton.icon(
                onPressed: () async {
                  Navigator.pop(context);
                  final added =
                      await Navigator.pushNamed(context, '/add-contact');
                  if (added == true) {
                    fetchContacts(); // 🔥 refresh from API
                  }
                },
                icon: const Icon(Icons.person_add_alt),
                label: const Text("Add New Contact"),
              ),
            ],
          ),
        );
      },
    );
  }
}
