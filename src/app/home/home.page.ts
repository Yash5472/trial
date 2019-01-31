import { PopoverPage } from './../popover/popover.page';
import { ModelPage } from './../model/model.page';
import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
value:any=0;
constructor(private navController:NavController,private modalController:ModalController,private popoverController:PopoverController){

}
PushTo(){
this.navController.navigateForward(`/second/${this.value}`)
}
async OpenModal(){
const modal=await this.modalController.create({
component:ModelPage,
componentProps:{
  custom_id:this.value
}

});
modal.present();
}
async PopOver(ev:Event){
  const popOver=await this.popoverController.create({
    component:PopoverPage,
    componentProps:{
      custom_id:this.value
    }
    
    });
    popOver.present();
}
}
