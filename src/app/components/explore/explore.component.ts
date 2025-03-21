import { Component, OnInit } from '@angular/core';
import explore_quiz from "../../../assets/data/explore_quiz.json"
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-explore',
  imports: [CommonModule, RouterModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent implements OnInit{

  quizList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.quizList = explore_quiz;
  }
}
