import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { TweetsComponent } from './tweets/tweets.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [

    { path: "contact", component: ContactComponent },
    { path :"about", component: AboutComponent},
    { path: "home", component: HomeComponent},
    { path: "students", component: StudentsComponent},
    { path: "tweets", component: TweetsComponent},
    { path: "portfolio", component: PortfolioComponent}
];