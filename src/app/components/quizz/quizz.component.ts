import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizz',
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})

export class QuizzComponent implements OnInit {

  title:string = ""

  questions:any
  questionSelected:any

  answers:string[] = []
  answerSelected:string = ""
  answerResult:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false
  image:string = ""

  constructor() { }

  ngOnInit(): void { 
    if(quizz_questions) {
      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

      this.image = quizz_questions.image
      }
  }

  selectedOption(value:string) {
    this.answers.push(value)
    this.nextStep()
  }

  async nextStep() {
    this.questionIndex+=1
    if(this.questionIndex < this.questionMaxIndex) {
      this.questionSelected = this.questions[this.questionIndex]
  } else {
    this.finished = true
    const finalResult:string = await this.checkResult(this.answers)
    this.answerSelected = quizz_questions.results[finalResult as keyof typeof quizz_questions.results]
    this.answerResult = finalResult
  }
  }

  async checkResult(answers:string[]) {

    const result = answers.reduce((previous, current, index, array) => {
      if(
        array.filter(item => item === previous).length >
        array.filter(item => item === current).length
      ){
        return previous
      } else {
        return current
      }
    })
    return result
  }

}
