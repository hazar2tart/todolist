import 'package:bubel_tea/models/drink.dart';
import 'package:flutter/material.dart';

class Bubble extends ChangeNotifier {
  //list drinks
  final List<Drink> _shop = [
    Drink(
      imagePath: 'assets/images/tea1.jpg',
      name: 'preal tea',
      price: '4.00',
    ),
  ];
  //list of drinkd cart
  final List<Drink> _usercart = [];
  // Get user cart
  List<Drink> get cart => _usercart;

  //get usr cart
  List<Drink> get shop => _shop;
  //add drin to cart
  void addToCart(Drink drink) {
    _usercart.add(drink);
    notifyListeners();
  }

  //remove from cart
  void removefromcart(Drink drink) {
    _usercart.remove(drink);
    notifyListeners();
  }
}
