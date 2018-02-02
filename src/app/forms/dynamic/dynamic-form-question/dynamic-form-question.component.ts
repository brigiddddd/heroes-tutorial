import { FormGroup } from '@angular/forms';
import { QuestionBase } from './../question-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styles: []
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  ngOnInit() {
    console.log(this.question);
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
