import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 

  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   //interpolation
  title = 'Data binding using String Interpolation'; 
  name:string="sunaina"; 
  va :string = ''; 


  //one way binding
  myFunction(): void { 
    alert('Show alert!'); 

    //Two way binding
    

  }
}
