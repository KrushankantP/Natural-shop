import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent {

  constructor(_route: Router
  ){
    setTimeout(() => {
      _route.navigate(['/'])
    }, 5000 )
  }

}
