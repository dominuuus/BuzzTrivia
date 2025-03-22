import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'quizzes',
        redirectTo: ''
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes), AppComponent],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
