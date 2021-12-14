import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Destinations } from 'src/app/model/destinations';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  destinations$:Observable<any>;
  id:Number;
  destinations: Destinations[];
  constructor(private activatedRoute: ActivatedRoute, private mainService:MainService) {}

  // ngOnInit() {
  //   console.log(this.destinations)
  //   this.destinations$ = this.activatedRoute.paramMap.pipe(switchMap(params =>{
  //     this.id = Number(params.get('id'));
  //     return this.destinations;
  //   }))
  //   console.log(this.destinations$, this.id)
  // }
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
  getDestinationsById() {
    this.mainService.getDestinationsById(this.id).subscribe(
      (data) => {

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
