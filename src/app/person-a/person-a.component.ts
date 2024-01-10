import { Component, OnInit, Self } from '@angular/core';
import { DataSenderService } from '../MyServices/data-sender.service';
import { MyDataProviderService } from '../my-data-provider.service';

@Component({
  selector: 'app-person-a',
  templateUrl: './person-a.component.html',
  styleUrls: ['./person-a.component.scss'],
})
export class PersonAComponent implements OnInit{

  constructor(
    @Self() private _myDataService: MyDataProviderService,

  ) {

  }
  ngOnInit(): void {
   this._myDataService.logger("User have Reached personA Onint")
  }

  public displayMessage: string = '';
  public defaultInput!: string;
  public isSend: boolean = false;
  onSendButtonClicked() {
    this._myDataService.logger("Hello")
    // this.isSend = true;
    // this.displayMessage = this.defaultInput;
    // this._myDataSender.sendData(this.displayMessage);
  }


}
