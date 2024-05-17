import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'firstng';
    username = 'Mary';
    firstname = 'Mary';
    lastname = 'Joe';
    aboutTXT = 'Hello There!';
    pfp = 'https://pbs.twimg.com/profile_images/1509653371367485448/LVA75u3y_x96.png';
    status = 'online';

    setAlert(){

    }
}
