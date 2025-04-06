import 'package:bubel_tea/models/drink.dart';
import 'package:bubel_tea/models/shop.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class OrderPage extends StatefulWidget {
  final Drink drink;
  const OrderPage({super.key, required this.drink});

  @override
  State<OrderPage> createState() => _OrderPageState();
}

class _OrderPageState extends State<OrderPage> {
  //custo,mizse
  double sweetValue = 0.5;
  void customiseSweet(double newvalue) {
    setState(() {
      sweetValue = newvalue;
    });
  }

  void addToCart() {
    Provider.of<Bubble>(context, listen: false).addToCart(widget.drink);
    Navigator.pop(context);
    showDialog(
      context: context,
      builder: (context) => AlertDialog(title: Text('Succes aded')),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.drink.name)),
      backgroundColor: Colors.brown[200],
      body: Column(
        children: [
          Image.asset(widget.drink.imagePath),
          Padding(
            padding: const EdgeInsets.all(25.0),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text('Sweet'),
                    Slider(
                      value: sweetValue,
                      onChanged: (value) => customiseSweet(value),
                    ),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text('Sweet'),
                    Slider(
                      value: sweetValue,
                      onChanged: (value) => customiseSweet(value),
                    ),
                  ],
                ),

                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Container(width: 100, child: Text('Sweet')),
                    Expanded(
                      child: Slider(
                        value: sweetValue,
                        onChanged: (value) => customiseSweet(value),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),

          MaterialButton(
            child: Text('Add To Cart', style: TextStyle(color: Colors.white)),
            color: Colors.brown,
            onPressed: addToCart,
          ),
        ],
      ),
    );
  }
}
