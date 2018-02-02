import { QuestionBase } from './../question-base';
import { Component, OnInit, Input } from '@angular/core';
import { QuestionControlService } from '../question-control.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payload = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    console.log(this.questions);
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(this.form);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.value);
  }
}
