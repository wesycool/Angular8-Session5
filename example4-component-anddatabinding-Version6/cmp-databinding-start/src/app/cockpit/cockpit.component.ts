import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

    /* Begin cockpit */
    newServerName = '';
    newServerContent = '';
  
    onAddServer() {
      this.serverCreated.emit({serverName: this.newServerName,
      serverContent: this.newServerContent });
    }

    onAddBlueprint() {
      this.blueprintCreated.emit({serverName: this.newServerName,
      serverContent: this.newServerContent });
    }
  
     /* End cockpit */
}
