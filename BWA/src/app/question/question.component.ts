import { Component, OnInit, Input } from '@angular/core';
import {Question} from '../question';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

 question: Question;
  @Input() myAnswer: Question;
  constructor(private questionService: QuestionService) { }
  giveUp:number;
  ngOnInit() {

    this.question = new Question();
    this.giveUp = 0;  
    
  }
  getTheThing():void{
    this.questionService.getQuestion().subscribe((q) => {
      this.question = q[0];
      console.log(q[0])
      this.giveUp = 0;
    });
  }
  givingUp():void{
    this.giveUp = 1;
  }
}
