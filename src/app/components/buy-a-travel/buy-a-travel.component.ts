import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { THROW_IF_NOT_FOUND } from "@angular/core/src/di/injector";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
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
  city: any;
  imgUrl: any;
  price: any;
  travelForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService,
    private formBuilder: FormBuilder,
    private datePipe:DatePipe
  ) {}

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.city = this.activatedRoute.snapshot.paramMap.get("cidade");
    // this.filterImage();
    this.getDestinations();
    this.travelForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      days: [null, Validators.required],
      date: [null, Validators.required],
      obs: [null],
    });
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

  get name() {
    let aux = this.travelForm.get("name").value;
    return aux;
  }
  get date() {
    let aux = this.travelForm.get("date").value;
    aux = this.datePipe.transform(aux, 'dd/MM/yyyy');
    return aux;
  }

  get days(){
    let aux = Number(this.travelForm.get("days").value);
    return aux;
  }
  onSubmit() {
    console.log(this.name);
    alert(`Parabens ${this.name} voce comprou uma passagem para ${this.city} - Data de embarque: ${this.date} - Dias incluso: ${this.days} dias.`);
  }
}
