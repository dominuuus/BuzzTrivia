import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { QuizzComponent } from "../../components/quizz/quizz.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-quizzes',
  imports: [MenuComponent, QuizzComponent, FooterComponent],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent {

}
