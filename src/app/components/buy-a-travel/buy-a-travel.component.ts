import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-a-travel',
  templateUrl: './buy-a-travel.component.html',
  styleUrls: ['./buy-a-travel.component.css']
})
export class BuyATravelComponent implements OnInit {
  @Input() destinationName;
  constructor() { }

  ngOnInit() {
  }

}
