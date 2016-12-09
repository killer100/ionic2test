import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[defaultImage]' })

export class DefaultImageDirective {

    constructor(el: ElementRef) {
    //console.log("111"+el.nativeElement.src)
       
       el.nativeElement.onload = function(){
           console.log("cargoo")
       };
    }
}