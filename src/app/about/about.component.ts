import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  title = 'firstng';
    username = 'Mary';
    firstname = 'Mary';
    lastname = 'Joe';
    aboutTXT = 'Hello There!';
}
