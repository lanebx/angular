import {Directive, HostBinding, HostListener, Input} from "@angular/core";

@Directive({
  selector: '[appBacground]'
})
export class BacgroundDirectives {
  @Input() hoverColor!: string;
  @Input() defaultColor!: string;

  @HostBinding('style.background-color') background!: string;

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor
  }
}
