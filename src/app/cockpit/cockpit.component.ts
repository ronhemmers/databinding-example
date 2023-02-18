import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreatedAlias') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() cellLocationCreated = new EventEmitter<{serverName: string, serverContent: string, cellLocation: string}>();

  @ViewChild('serverContentInput', {static: true})
  serverContentInput: ElementRef

  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddCellLocation(locationNameInput: HTMLInputElement) {
    console.log(locationNameInput);
    console.log(locationNameInput.value);

    this.cellLocationCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
      cellLocation: locationNameInput.value
    });
  }

}
