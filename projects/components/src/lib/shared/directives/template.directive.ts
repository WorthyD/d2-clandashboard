import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[dTemplate]',
})
export class TemplateDirective {
    @Input() type: string;

    @Input('dTemplate') name: string;

    constructor(public template: TemplateRef<any>) {
    }

    getType(): string {
        return this.name;
    }
}
