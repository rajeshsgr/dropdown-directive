import { Directive, HostListener, HostBinding,ElementRef } from '@angular/core';

@Directive({
  selector: '[toggleDropDown]'
})
export class DropdownDirectiveDirective {

  @HostBinding('class.open') isOpen=false;

   constructor() { }

  @HostListener('click') toggleOpen(){

    this.isOpen=!this.isOpen;

  } 

}
