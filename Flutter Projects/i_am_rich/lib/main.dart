import 'package:flutter/material.dart';

//main fxn starting point of the app
void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
       body: Center(
         child: Image(
           image: AssetImage('images/diamond(1).png'),
         ),
       ),
         backgroundColor:Colors.blueGrey,         
        appBar: AppBar(
          title: Text('I Am Rich'),
          backgroundColor: Colors.blueGrey[900],
        ),
      //  body: 
      ),
    ),
  );
}
