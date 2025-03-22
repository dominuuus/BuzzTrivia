import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import quizData from '../../../assets/data/explore_quiz.json';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../../components/menu/menu.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ExploreComponent } from "../../components/explore/explore.component";

@Component({
  selector: 'app-quizzes',
  imports: [CommonModule, MenuComponent, FooterComponent, ExploreComponent],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent implements OnInit {
  quiz: any;
  title: string = "";

  questions: any;
  questionSelected: any;

  answers: string[] = [];
  answerSelected: string = "";
  answerResult: string = "";

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;
  image: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.loadQuiz(id);
    });
  }

  loadQuiz(id: number) {
    this.quiz = quizData.find(q => q.id === id);

    if (this.quiz) {
      this.finished = false;
      this.title = this.quiz.title || "";

      this.questions = this.quiz.questions || [];
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;

      this.answers = this.quiz.questions

      this.image = this.quiz.image || "";
    }
  }

  selectedOption(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  async nextStep() {
    this.questionIndex += 1;
    if (this.questionIndex < this.questionMaxIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      this.finished = true;
      const finalResult: string = await this.checkResult(this.answers);
      this.answerSelected = this.quiz.results[finalResult as keyof typeof this.quiz.results];
      this.answerResult = finalResult;
    }
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((previous, current, index, array) => {
      if (
        array.filter(item => item === previous).length >
        array.filter(item => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });
    return result;
  }
}