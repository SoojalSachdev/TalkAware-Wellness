import 'package:flutter/material.dart';
import 'login_page.dart';

void main() {
  runApp(const TalkAwareApp());
}

class TalkAwareApp extends StatelessWidget {
  const TalkAwareApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'TalkAware',
      theme: ThemeData(
        primarySwatch: Colors.teal,
      ),
      home: const LoginPage(),
    );
  }
}
