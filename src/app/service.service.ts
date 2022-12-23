 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from './address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})// is a service injectable into various components
export class ServiceService {
  private baseURL="http://localhost:8080/Address/all";

    constructor(private httpClient:HttpClient) { }

    getAddressList():Observable<Address[]>{

      return this.httpClient.get<Address[]>(`${this.baseURL}`);
    }
}
