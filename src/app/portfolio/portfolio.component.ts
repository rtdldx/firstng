import { Component } from '@angular/core';
import { Projects } from '../interfaces/projects';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  project:Projects[] = [
    {
      projectID: 1,
      projectName: "Title",
      projectDesc: "Description",
      projectIMG: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      projectLink: "https://www.google.com/"
    },
    {
      projectID: 2,
      projectName: "Title",
      projectDesc: "Description",
      projectIMG: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      projectLink: "https://www.google.com/"
    },
    {
      projectID: 3,
      projectName: "Title",
      projectDesc: "Description",
      projectIMG: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      projectLink: "https://www.google.com/"
    },
    {
      projectID: 4,
      projectName: "Title",
      projectDesc: "Description",
      projectIMG: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      projectLink: "https://www.google.com/"
    }
  ]
}
