import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.name = this.activatedRoute.snapshot.paramMap.get("cidade");
    this.filterImage();
  }

  filterImage() {
    this.mainService.getDestinations().subscribe(
      (data) => {
     this.destinations = data;
     filter( (url) =>P)
    },
    (error) =>{
      console
    }
    );
  }
}
