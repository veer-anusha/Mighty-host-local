import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {DetailPage} from '../detail/detail';
import {LoginPage} from '../login/login';
import {SignupPage} from '../signup/signup';
import {ListPage} from '../list/list';
import {RentPage} from '../rent/rent';

 





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

items:any[];

  constructor(public navCtrl: NavController) {
  
  this.items=[];
  for(let i=0;i<10;i++){
  
  this.items.push({
  
  text:'Item'+i,
  id:i
  })
  }

  }



itemSelected(item){

this.navCtrl.push(DetailPage,{item:item})
}
openPage(item)
{
this.navCtrl.push(LoginPage);

}
openPage1(item)
{
this.navCtrl.push(SignupPage);

}
openPage3(item)
{
this.navCtrl.push(ListPage);

}
openPage2(item)
{
this.navCtrl.push(RentPage);

}


}
