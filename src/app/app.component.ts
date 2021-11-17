import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'crm';
  private obs = new Observable((listXsubscribe) => {
    listXsubscribe.next(Math.random());
  });
  private subj = new Subject();
  private behave = new BehaviorSubject(0);

  constructor() {
    // this.obs.subscribe((number) => console.log(number));
    // this.obs.subscribe((number) => console.log(number));
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('toto');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('toto2');
    // this.subj.next(Math.random());
    // this.subj.subscribe((data) => console.log(data));
    // this.behave.subscribe((data) => console.log(data));
    // this.behave.next(1);
    // this.behave.next(Math.random());
    // this.behave.subscribe((data) => console.log(data));
  }
}
