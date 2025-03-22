import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import quizData from '../../../assets/data/explore_quiz.json'


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
    if(quizData) {
      this.finished = false
      this.title = quizData[0]?.title

      this.questions = quizData[0]?.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

      this.image = quizData[0]?.image
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
    this.answerSelected = (quizData[0]?.results as Record<string, string | undefined>)[finalResult] ?? ""
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
