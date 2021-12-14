import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Destinations } from "src/app/model/destinations";
import { MainService } from "src/app/services/main.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  destinations$: Observable<Destinations>;
  destinations: Destinations[];
  id: Number;
  // destinations: Destinations[] = [
  //   {
  //     name: "São Paulo",
  //     url: "https://cognatis.com.br/wp-content/uploads/2021/01/Sao-Paulo-467-banner-1.jpg",
  //     id: 1,
  //     price: 500,
  //   },
  //   {
  //     name: "Rio de Janeiro",
  //     url: "https://wallpaperaccess.com/full/125819.jpg",
  //     id:2,
  //     price: 900,
  //   },
  //   {
  //     name: "Campos do Jordão",
  //     url:"https://pousadaaltodaboavista.com.br/wp-content/uploads/2019/07/natal-em-campos-do-jordao.png",
  //     id:3,
  //     price: 900,
  //   },
  // ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.getDestinations();

  }

  getDestinations() {
    this.mainService.getDestinations().subscribe(
      (data) => {
      this.destinations = data;
      console.log(data)
    }, (error) =>{
      console.log(error);
    }
    );
    // this.destinations$ = this.activatedRoute.paramMap.pipe(switchMap(params =>{
    //   this.id = Number(params.get('id'));
    // })).subscribe( () =>{
    //   return this.getDestinations();

    // })
    // console.log(this.destinations$, this.id)
  }
}
