import { Directive, OnInit, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'yellow';
  constructor( private elref: ElementRef, private renderer: Renderer2) {
   }

   @HostListener('mouseenter') mouseOver() {
     this.renderer.setStyle(this.elref.nativeElement, 'background-color', this.highlightColor);
   }

   @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elref.nativeElement, 'background-color', this.defaultColor);
  }

  ngOnInit() {
    this.renderer.setStyle(this.elref.nativeElement, 'background-color', this.defaultColor);
  }
}
