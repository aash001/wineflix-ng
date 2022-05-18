import { Component } from '@angular/core';
import { wines, Wine } from '../../data';

@Component({
  selector: 'app-drink-again',
  templateUrl: './drink-again.component.html',
  styleUrls: ['./drink-again.component.css']
})
export class DrinkAgainComponent {
  wines: Wine[] = wines;
}
