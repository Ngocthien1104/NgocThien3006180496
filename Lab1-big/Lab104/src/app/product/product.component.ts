import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  listproduct = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "sl": 0,
        "starRating": "3.2",
        "imageUrl": "leafrake.jpg"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "sl": 0,
        "starRating": 4.2,
        "imageUrl": "gardencart.jpg"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "sl": 0,
        "starRating": 4.8,
        "imageUrl": "hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "sl": 0,
        "starRating": 3.7,
        "imageUrl": "saw.jpg"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "sl": 0,
        "starRating": 4.6,
        "imageUrl": "videogame.jpg"
    },
];
  constructor() { }
  Tong() {
    let s=0;
    //for (let i = 0; i < this.listproduct.length; i++) {
    //  s=s+this.listproduct[i].price;
    //}
    this.listproduct.forEach(function(item)
    {
      s=s+item.price*item.sl;
    })
    return s;
  }
  Tang(id)
  {
    for (let i = 0; i < this.listproduct.length; i++) {
      if (this.listproduct[i].productId===id)
        this.listproduct[i].sl++;
    }
  }
  Giam(id)
  {
    for (let i = 0; i < this.listproduct.length; i++) {
      if (this.listproduct[i].productId===id&&this.listproduct[i].sl>0)
        this.listproduct[i].sl--;
    }
  }
  ngOnInit() {
  }

}
