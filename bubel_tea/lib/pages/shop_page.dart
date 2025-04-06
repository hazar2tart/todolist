import 'package:bubel_tea/components/drink_tile.dart';
import 'package:bubel_tea/models/drink.dart';
import 'package:bubel_tea/models/shop.dart';
import 'package:bubel_tea/pages/order_page.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class ShopPage extends StatefulWidget {
  const ShopPage({super.key});

  @override
  State<ShopPage> createState() => _ShopPageState();
}

class _ShopPageState extends State<ShopPage> {
  void gotorderpage(Drink drink) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => OrderPage(drink: drink)),
    );
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
                  Text('bubel Tea', style: TextStyle(fontSize: 20)),
                  //list of drinks
                  Expanded(
                    child: ListView.builder(
                      itemCount: value.shop.length,
                      itemBuilder: (context, index) {
                        // ListTile(title: Text(value.shop[index].name)
                        Drink individualDrink = value.shop[index];
                        return DrinkTile(
                          drink: individualDrink,
                          onTap: () => gotorderpage(individualDrink),
                          trailing: Icon(Icons.arrow_forward),
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),
          ),
    );
  }
}
