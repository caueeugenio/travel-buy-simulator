import { Component, Input, OnInit } from "@angular/core";
import { THROW_IF_NOT_FOUND } from "@angular/core/src/di/injector";
import { ActivatedRoute, Router } from "@angular/router";
import { pipe } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { Destinations } from "src/app/model/destinations";
import { MainService } from "src/app/services/main.service";

@Component({
  selector: "app-buy-a-travel",
  templateUrl: "./buy-a-travel.component.html",
  styleUrls: ["./buy-a-travel.component.css"],
})
export class BuyATravelComponent implements OnInit {
  destinations: Destinations[];
  id: any;
  name: any;
  imgUrl: any;
  price:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.name = this.activatedRoute.snapshot.paramMap.get("cidade");
    // this.filterImage();
    this.getDestinations();
  }

  getDestinations() {
    this.mainService.getDestinations().subscribe(
      (data) => {
        this.destinations = data;
        this.destinations.forEach((element) => {
          if (element.id === this.id) {
            this.imgUrl = element.url;
            this.price = element.price;
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
