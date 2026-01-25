import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static const String baseUrl = 'http://192.168.8.101:8000'; // Replace with your IP

  static Future<Map<String, dynamic>> signup(String fullName, String email, String password) async {
    final url = Uri.parse('$baseUrl/signup');
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        "full_name": fullName,
        "email": email,
        "password": password,
      }),
    );

    if (response.body.isNotEmpty) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Empty response from server');
    }
  }

  static Future<Map<String, dynamic>> login(String email, String password) async {
    final url = Uri.parse('$baseUrl/login');
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        "email": email,
        "password": password,
      }),
    );

    if (response.body.isNotEmpty) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Empty response from server');
    }
  }
}
