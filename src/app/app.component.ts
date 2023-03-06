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

  // pass this along to the server-element property for verbose/non-verbose conole log output
  verbose: boolean = true;

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

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
    if (this.verbose)
      console.log("Length of array: " + this.serverElements.length);

    if (this.serverElements.length > 0) {
      this.serverElements[0].name = 'Changed!';
    }
  }

  /**
   * Remove the 1st element of the array
   */
  OnDestroyFirst(): void {
    if (this.verbose)
      console.log("[before] Length of array: " + this.serverElements.length);

    this.serverElements.splice(0, 1);

    if (this.verbose)
      console.log("[after] Length of array: " + this.serverElements.length);
  }

  // ----------------------------------------------------------------------

  onIntervalFired(firedNumber: number): void {
    this.verbose = false;

    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
    
    console.log("[onIntervalFired()] firedNumber = " + firedNumber);
  }

  // ----------------------------------------------------------------------

  someEvenNumbers: number[] = [2, 4, 6, 8, 10];
  someOddNumbers: number[] = [1, 3, 5, 7, 9];
  onlyOdd = false;

  /**
   * What text to display on the button.
   */
  getToggleString(): string {
    return this.onlyOdd ? "Show only even numbers" : "Show only odd numbers";
  }
}
