import { Component } from '@angular/core';
import { Tweet } from '../interfaces/tweet';

@Component({
  selector: 'app-tweets',
  standalone: true,
  imports: [],
  templateUrl: './tweets.component.html',
  styleUrl: './tweets.component.scss'
})
export class TweetsComponent {

  tweets:Tweet[] = [
    {
      tweetID: 1,
      tweet: "Fake tweet test",
      username: "Matt",
      comments: "this post sucks",
      pfp: "https://files.catbox.moe/ifbbpq.jpg"
    },
    {
      tweetID: 2,
      tweet: "Another test tweet",
      username: "Mimi",
      pfp: "https://files.catbox.moe/4mx8ex.gif"
    },
    {
      tweetID: 3,
      tweet: "The last test tweet",
      username: "Joe",
      pfp: "https://files.catbox.moe/sg3wlb.png"
    },
    {
      tweetID: 4,
      tweet: "Just kidding new test tweet",
      username: "Ken",
      pfp: "https://files.catbox.moe/sdep93.png"
    }
  ];

  addNewTweet(){
    alert('New Tweet Added');
  };

  double(){
    alert('Double Clicked');
  };

  buttonColour(){
    //
  }
}
