import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'TestServer01', content: 'Some content here'}
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onAddCellLocation(serverData: {serverName: string, serverContent: string, cellLocation: string}) {
    this.serverElements.push({
      type: 'cell',
      name: serverData.serverName + " - " + serverData.cellLocation,
      content: serverData.serverContent
    });
  }

  OnChangeFirst(): void {
    console.log("Length of array: " + this.serverElements.length);
    if (this.serverElements.length > 0) {
      this.serverElements[0].name = 'Changed!';
    }
  }

  /**
   * Remove the 1st element of the array
   */
  OnDestroyFirst(): void {
    console.log("[before] Length of array: " + this.serverElements.length);
    this.serverElements.splice(0, 1);
    console.log("[after] Length of array: " + this.serverElements.length);
  }
}
