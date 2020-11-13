/* tslint:disable:forin */
import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
    <h3>Version {{major}}.{{minor}}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
  `
})
export class VersionChildComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      const {currentValue,previousValue,isFirstChange} = changes[propName];
      const to = JSON.stringify(currentValue);
      const from = JSON.stringify(previousValue);
      log.push( isFirstChange? `Initial value of ${propName} set to ${to}` : `${propName} changed from ${from} to ${to}`);

    }
    this.changeLog.push(log.join(', '));
  }
}
