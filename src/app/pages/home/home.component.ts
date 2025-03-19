import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { QuizzComponent } from "../../components/quizz/quizz.component";

@Component({
  selector: 'app-home',
  imports: [MenuComponent, QuizzComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
