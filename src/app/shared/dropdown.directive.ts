import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') open = false;

  constructor(private eleRef: ElementRef) { }

   // @HostListener('document.click', ['$event']) toggleOpen(event){
   // this.open = this.eleRef.nativeElement.contains(event.target);
   // }
   @HostListener('document:click', ['$event']) toggleOpen(event) {
     this.open = this.eleRef.nativeElement.contains(event.target);
   }

  // @HostListener('click') toggleOpen1() {
  //    this.open = !this.open;
  //  }
}
