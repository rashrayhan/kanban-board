import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit{


  constructor(private element: ElementRef, private renderer2: Renderer2) {   }

  ngOnInit(): void {
    this.renderer2.setStyle(this.element.nativeElement, 'font-size', '40px');
  }

}
