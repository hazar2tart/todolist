import 'package:bubel_tea/components/bottom_navbar.dart';
import 'package:bubel_tea/pages/cart_page.dart';
import 'package:bubel_tea/pages/shop_page.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _selctedIndex = 0;
  void navigateBottomBar(int newindex) {
    setState(() {
      _selctedIndex = newindex;
    });
  }

  //pages , to display
  final List<Widget> _pages = [
    //shoppage
    ShopPage(),
    //cart
    CartPage(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.brown[100],
      bottomNavigationBar: BottomNavbar(
        onTabChange: (index) => navigateBottomBar(index),
      ),
      body: _pages[_selctedIndex],
    );
  }
}
