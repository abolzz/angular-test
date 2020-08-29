import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  output = '';
  isNumber = true;

  onKey(event: any) {
  	var input = event.target.value;
  	if(Number(event.target.value)) {
  		if(input % 3 === 0 && input % 15 !== 0) {
  			this.output = 'Foo';
  		} else if(input % 5 === 0 && input % 15 !== 0) {
  			this.output = 'Bar';
  		} else if(input % 15 === 0) {
  			this.output = 'Foobar';
  		} else {
  			this.output = '';
  		}
  		this.isNumber = true;
  	} else {
  		this.isNumber = false;
  		this.output = '';
  	}
  }
}
