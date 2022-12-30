import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addresses!:Address[];

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
     this.service.getAddressList().subscribe(data=>{
     this.addresses=data;

     console.log( "Testing " + this.addresses.length)

     })
     
  }
  

}
