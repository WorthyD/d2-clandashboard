import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'lib-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberSearchComponent implements OnInit {
  @ViewChild('search') searchTextBox: ElementRef;

  selectFormControl = new FormControl();
  searchTextBoxControl = new FormControl();
  selectedValues = [];

  filteredOptions: Observable<any[]>;

  @Input()
  data: string[];

  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.searchTextBoxControl.valueChanges.pipe(
      startWith<string>(''),
      map((name) => this._filter(name))
    );
  }

  private _filter(name: string): String[] {
    console.log(this.data);
    const filterValue = name.toLowerCase();
    // Set selected values to retain the selected checkbox state
    this.setSelectedValues();
    this.selectFormControl.patchValue(this.selectedValues);
    const filteredList = this.data.filter((option) => option.toLowerCase().indexOf(filterValue) === 0);
    return filteredList;
  }

  selectionChange(event) {
    if (event.isUserInput && event.source.selected === false) {
      const index = this.selectedValues.indexOf(event.source.value);
      this.selectedValues.splice(index, 1);
    }
  }

  openedChange(e) {
    // Set search textbox value as empty while opening selectbox
    this.searchTextBoxControl.patchValue('');
    // Focus to search textbox while clicking on selectbox
    if (e === true) {
      this.searchTextBox.nativeElement.focus();
    }
  }

  /**
   * Clearing search textbox value
   */
  clearSearch(event) {
    event.stopPropagation();
    this.searchTextBoxControl.patchValue('');
  }

  /**
   * Set selected values to retain the state
   */
  setSelectedValues() {
    if (this.selectFormControl.value && this.selectFormControl.value.length > 0) {
      this.selectFormControl.value.forEach((e) => {
        if (this.selectedValues.indexOf(e) === -1) {
          this.selectedValues.push(e);
        }
      });
    }
  }
}
