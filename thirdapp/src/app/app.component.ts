
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdapp';

  parentfunction(data)
  {
    console.warn(data)
  }
  constructor() { }

  ngOnInit(): void {
  }

}


