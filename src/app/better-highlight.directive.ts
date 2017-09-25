import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor( private elref: ElementRef, private renderer: Renderer2) {
   }

   @HostListener('mouseenter') mouseOver() {
     this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'grey');
   }

   @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'yellow');
  }

  ngOnInit() {
    this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'yellow');
  }
}
