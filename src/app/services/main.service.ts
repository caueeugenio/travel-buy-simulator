import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Destinations } from "../model/destinations";
@Injectable({
  providedIn: "root",
})
export class MainService {
  apiUrl = environment.url;
  constructor(private httpClient: HttpClient) {}

  getDestinations() {
    return this.httpClient.get<Destinations[]>(`${this.apiUrl}`);
  }

  getDestinationsById(id:Number){
    return this.httpClient.get<Destinations>(`${this.apiUrl}/${id}`);
  }

}
