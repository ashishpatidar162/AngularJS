import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Attribute-Directives';

  content:string ='The lazy fox jump over the wall';

  condition=false;
  otherCondition=true;
  
  // color=null;
  // size=null;
  setUserColor(state) {
    switch (state) {
      case 'Chicago':
        return 'blue';
      case 'New Jersey':
        return 'red';
      case 'California':
        return 'green';
    }
  }
 
  data: any[] = [
    {
      "name": "Henry",
      "state": 'LA'
    },
    {
      "name": "Shane",
      "state": 'Chicago'
    },
    {
      "name": "AJ",
      "state": 'St Louis'
    },
    {
      "name": "Parker",
      "state": 'New Jersey'
    },
    {
      "name": "Mett",
      "state": 'California'
    }
  ];
}
