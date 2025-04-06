import 'package:bubel_tea/components/drink_tile.dart';
import 'package:bubel_tea/models/drink.dart';
import 'package:bubel_tea/models/shop.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class CartPage extends StatefulWidget {
  const CartPage({super.key});

  @override
  State<CartPage> createState() => _CartPageState();
}

class _CartPageState extends State<CartPage> {
  void removeFromCart(Drink drink) {
    Provider.of<Bubble>(context, listen: false).removefromcart(drink);
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<Bubble>(
      builder:
          (context, value, child) => SafeArea(
            child: Padding(
              padding: const EdgeInsets.all(28.0),
              child: Column(
                children: [
                  Text('Your Cart', style: TextStyle(fontSize: 20)),

                  //list of c
                  Expanded(
                    child: ListView.builder(
                      itemCount: value.cart.length,
                      itemBuilder: (context, index) {
                        Drink drink = value.cart[index];
                        return DrinkTile(
                          drink: drink,
                          //   onTap: () => removeFromCart(drink),
                          onTap: () {
                            Provider.of<Bubble>(
                              context,
                              listen: false,
                            ).removefromcart(drink);
                          },

                          trailing: Icon(Icons.delete),
                        );
                      },
                    ),
                  ),

                  //pay bu
                ],
              ),
            ),
          ),
    );
  }
}
