import { Component } from '@angular/core';
import { Car, TeranetUser } from '../Workspace/learningTypescript';
export class Lorry {
  name!: string;
}


@Component({
  selector: 'app-hello-teranet',
  template: './hello-teranet.component.html',
  styleUrls: ['./hello-teranet.component.scss']
})
export class HelloTeranetComponent {
  private apiKey: string = "12133423424fhkdfjdh";
  userName: string = "Kailas";

  private benz: Car = new Car(22, 22200, "Teranet");
  setId() {
    this.benz.id
  }

}
