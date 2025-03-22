import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import quizData from '../assets/data/explore_quiz.json';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'quizzes',
        redirectTo: ''
    },

    {
        path: 'quizzes/:id',
        component: QuizzesComponent,
        data: { prerender: true },
        resolve: { prerenderParams: getPrerenderParams }
    }

];

export function getPrerenderParams() {
    return quizData.map(quiz => ({ id: quiz.id.toString() }));
  }

@NgModule({
    imports: [RouterModule.forRoot(routes), AppComponent],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
