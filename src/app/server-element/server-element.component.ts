import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck,
         AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
         ViewChild, ElementRef, ContentChild} from '@angular/core';

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
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef; // can't read this until we reach ngAfterContentInit()
  @Input() verbose: boolean;

  constructor() {
    if (this.verbose)
      console.log('[server-element] constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.verbose) {
      console.log("[server-element] ngOnChanges() called");
      console.log(changes);
    }
  }

  ngOnInit(): void {
    if (this.verbose) {
      console.log('[server-element] ngOnInit() called');
      // can we access the local reference 'header'?
      console.log('[server-element : ngOnInit()] Text Content --> ' + this.header.nativeElement.textContent);  // nothing!
      console.log('[server-element : ngOnInit()] Text Content of paragraph ===> ' + this.paragraph.nativeElement.textContent);  // nothing!
    }
  }

  ngDoCheck(): void {
    if (this.verbose)
      console.log('[server-element] ngDoCheck() called');
  }

  ngAfterContentInit(): void {
    if (this.verbose) {
      console.log('[server-element] ngAfterContentInit() called');
      console.log('[server-element : ngAfterContentInit()] Text Content of paragraph ===> ' + this.paragraph.nativeElement.textContent); // now we can see 'self.paragraph'
    }
  }

  ngAfterContentChecked(): void {
    if (this.verbose)
      console.log('[server-element] ngAfterContentChecked() called');
  }

  ngAfterViewInit(): void {
    if (this.verbose) {
      console.log('[server-element] ngAfterViewInit() called');
      console.log('[server-element | ngAfterViewInit()] Text Content [()] --> ' + this.header.nativeElement.textContent);  // now we can see 'self.header'
    }
  }

  ngAfterViewChecked(): void {
    if (this.verbose)
      console.log('[server-element] ngAfterViewChecked() called');
  }

  ngOnDestroy(): void {
    if (this.verbose)
      console.log('[server-element] ngOnDestroy() called');
  }
}
