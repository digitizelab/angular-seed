import {Directive} from "angular2/src/core/metadata";
import {ElementRef} from "angular2/src/core/linker/element_ref";
import {Renderer} from "angular2/src/core/render/api";


@Directive({
    selector: '[autoGrow]',
    host:{
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective{

    constructor(private el: ElementRef, private renderer: Renderer){

    }

    onFocus(){

    }

    onBlur(){
        
    }
}