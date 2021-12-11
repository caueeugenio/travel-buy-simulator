import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  destinations: any[] = [
    {
      name: "São Paulo",
      url: "https://cognatis.com.br/wp-content/uploads/2021/01/Sao-Paulo-467-banner-1.jpg",
      id: 1,
      price: 500,
    },
    {
      name: "Rio de Janeiro",
      url: "https://wallpaperaccess.com/full/125819.jpg",
      id:2,
      price: 900,
    },
    {
      name: "Campos do Jordão",
      url:"https://pousadaaltodaboavista.com.br/wp-content/uploads/2019/07/natal-em-campos-do-jordao.png",
      id:3,
      price: 900,
    },
  ];
  constructor() {}

  ngOnInit() {
    console.log(this.destinations)
  }
}
