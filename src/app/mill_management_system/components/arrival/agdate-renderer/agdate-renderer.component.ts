import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'app-datepicker-editor',
  template: `
    <ng-template #datepickerEditorTemplate let-row="row" let-value="value" let-i="i" let-editing="editing">
      <p-calendar
        [(ngModel)]="date"
        [showIcon]="true"
        [dateFormat]="'yy-mm-dd'"
        (ngModelChange)="onDateChanged()"
      ></p-calendar>
    </ng-template>
  `,
  styles: [
    `
      :host ::ng-deep .p-calendar {
        width: 100%;
      }
    `,
  ],
})
export class AgdateRendererComponent implements ICellEditorAngularComp {
  private params: any;
  public date: Date | undefined;

  @ViewChild('datepickerEditorTemplate') datepickerEditorTemplate: TemplateRef<any> | undefined;
  @ViewChild(Calendar) calendar!: Calendar;

  agInit(params: any): void {
    this.params = params;
    const cellValue = params.value;

    if (cellValue) {
      this.date = new Date(cellValue);
    } else {
      this.date = undefined;
    }
  }

  getValue(): any {
    if (this.date) {
      return this.date.toISOString().split('T')[0];
    }
    return null;
  }

  isPopup(): boolean {
    return true;
  }

  focusIn(): void {
    setTimeout(() => this.calendar.inputfieldViewChild.nativeElement.focus(), 0);
  }

  onDateChanged(): void {
    this.params.api.stopEditing();
  }
}

