import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { QuizzComponent } from "../../components/quizz/quizz.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ExploreComponent } from "../../components/explore/explore.component";

@Component({
  selector: 'app-home',
  imports: [MenuComponent, QuizzComponent, FooterComponent, ExploreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
