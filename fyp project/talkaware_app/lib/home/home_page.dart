import 'package:flutter/material.dart';
import 'bottom_nav.dart';
import '../theme/app_theme.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme, // switch to light theme
      home: const BottomNav(),
    );
  }
}
