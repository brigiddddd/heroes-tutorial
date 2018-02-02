import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  providers: [QuestionService]
})
export class DynamicComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    console.log(`dynamic questions ${this.questions}`);
  }
}
