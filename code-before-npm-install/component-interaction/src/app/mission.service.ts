import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class MissionService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Service message commands
  //Subject.next() method is used to send messages to an observable which are then
  //sent to all angular components that are subscribers (a.k.a observers) of that
  //observable.
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  //Subject.next() method is used to send messages to an observable which are then
  //sent to all angular components that are subscribers (a.k.a observers) of that
  //observable.
  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
}
