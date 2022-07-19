import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) 
            ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}

    // @HostListener('click') toggleOpen(eventData: Event){
    //     // this.renderer.addClass(this.elRef, "open")
    //     this.isOpen = !this.isOpen;
    // }
}