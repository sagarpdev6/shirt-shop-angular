import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../services/common.service";
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  finalCart: any;
  address: any;
  user: any;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.finalCart = this.commonService.getFinalOrderItems();
    this.address = this.commonService.getAddress();
    this.user = this.commonService.getUser();
  }
}
