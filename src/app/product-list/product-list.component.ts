import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      name: "igname",
      price: 148.0
    },
    {
      name: "cody",
      price: 429.0
    },
    {
      name: "pomme",
      price: 50.0
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
