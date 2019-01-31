import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
passedID:any;
  ngOnInit() {
    this.passedID=this.activatedRoute.snapshot.paramMap.get('myid');
    
  }

}
