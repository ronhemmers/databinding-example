import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck,
         AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, 
                                               AfterContentInit, AfterContentChecked,
                                               AfterViewInit, AfterViewChecked,
                                               OnDestroy {
  // @Input('srvElement') element: {type: string, name: string, content: string};  // javascript object type.. notice the use of an alias
  @Input() name: string;  // bound from outside

  constructor() {
    console.log('[server-element] constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("[server-element] ngOnChanges() called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('[server-element] ngOnInit() called');
  }

  ngDoCheck(): void {
    console.log('[server-element] ngDoCheck() called');
  }

  ngAfterContentInit(): void {
    console.log('[server-element] ngAfterContentInit() called');
  }

  ngAfterContentChecked(): void {
    console.log('[server-element] ngAfterContentChecked() called');
  }

  ngAfterViewInit(): void {
    console.log('[server-element] ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('[server-element] ngAfterViewChecked() called');
  }

  ngOnDestroy(): void {
    console.log('[server-element] ngOnDestroy() called');
  }
}
