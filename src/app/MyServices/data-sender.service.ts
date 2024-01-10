import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataSenderService {
  //private myData = new BehaviorSubject("");
  myData: Subject<string> = new Subject();

  public myObserver$ = this.myData.asObservable();
  constructor() { }
  sendData(data: any) {
    console.log(data, "----> received to DataSenderService");
    this.myData.next(data)
  }

}
