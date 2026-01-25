import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class ContactsPage extends StatefulWidget {
  const ContactsPage({super.key});

  @override
  State<ContactsPage> createState() => _ContactsPageState();
}

class _ContactsPageState extends State<ContactsPage> {
  List contacts = [];

  Future<void> fetchContacts() async {
    final response = await http.get(
      Uri.parse("http://192.168.1.7:8000/contacts"),
    );

    if (response.statusCode == 200) {
      setState(() {
        contacts = jsonDecode(response.body);
      });
    }
  }

  @override
  void initState() {
    super.initState();
    fetchContacts();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Contacts")),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          await Navigator.pushNamed(context, '/add');
          fetchContacts(); // refresh after add
        },
        child: const Icon(Icons.add),
      ),
      body: contacts.isEmpty
          ? const Center(child: Text("No contacts found"))
          : ListView.builder(
              itemCount: contacts.length,
              itemBuilder: (context, index) {
                return ListTile(
                  leading: const CircleAvatar(child: Icon(Icons.person)),
                  title: Text(contacts[index]['name']),
                  subtitle: Text(contacts[index]['phone']),
                );
              },
            ),
    );
  }
}
