import { Injectable } from '@angular/core';

@Injectable()
export class MyDataProviderService {

  constructor(

  ) { }

  logger(message: string) {
    console.log("Message Consoled in Service:", message);
  }
}
