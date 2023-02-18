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

  // Variables/data
  // 1. 2-way binding
  // 2. Local reference
  // 3. @ViewChild with local reference

  // 2-way binding
  newServerName = '';

  // ViewChild with reference in html
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    console.log(this.serverContentInput);
    console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddCellLocation(locationNameInput: HTMLInputElement) {
    console.log(locationNameInput);
    console.log(locationNameInput.value);
    this.cellLocationCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContentInput.nativeElement.value,
      cellLocation: locationNameInput.value
    });
  }

}
