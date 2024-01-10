import { Component } from '@angular/core';
import { DataSenderService } from '../MyServices/data-sender.service';
import { MyDataProviderService } from '../my-data-provider.service';

@Component({
  selector: 'app-person-b',
  templateUrl: './person-b.component.html',
  styleUrls: ['./person-b.component.scss'],
  providers: [MyDataProviderService]
})
export class PersonBComponent {

  constructor(
    private _myDataService: DataSenderService
  ) { }
  public hasReceivedData: boolean = false;
  public dataFromPersonA: string = '';

  onDataReceived() {
    this._myDataService.myObserver$
      .subscribe(data => {
        console.log("Data From A:", data);
        this.hasReceivedData = true;
        if (data) {
          this.dataFromPersonA = data;
        }
      })
  }
}
