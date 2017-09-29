import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOpenDropDown]'
})
export class OpenDropDownDirective {
  constructor() { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleMenu () {
    this.isOpen = !this.isOpen;
  }

}
