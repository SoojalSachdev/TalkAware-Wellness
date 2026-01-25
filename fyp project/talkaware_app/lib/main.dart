import 'package:flutter/material.dart';
import 'theme/app_theme.dart';

// Auth
import 'auth/login_page.dart';

// Screens
import 'screens/chats_page.dart';
import 'screens/add_contact_page.dart';

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

      // Login uses dark theme
      theme: AppTheme.darkTheme,

      initialRoute: '/login',

      routes: {
        '/login': (context) => const LoginPage(),

        // Chat dashboard (light theme)
        '/contacts': (context) => Theme(
              data: AppTheme.lightTheme,
              child: ChatDashboard(),
            ),

        // Add contact page (light theme)
        '/add-contact': (context) => Theme(
              data: AppTheme.lightTheme,
              child: AddContactPage(),
            ),
      },
    );
  }
}
