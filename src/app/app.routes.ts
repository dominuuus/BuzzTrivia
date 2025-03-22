import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { NgModule } from '@angular/core';

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
        data: { renderMode: 'no-prerender' }
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
