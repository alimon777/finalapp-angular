import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  originalDate: Date = new Date();
  longText:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia fermentum risus, non pellentesque mi. Curabitur convallis ligula vel felis congue, eget consequat libero vestibulum. Morbi luctus, augue nec feugiat volutpat, arcu ipsum blandit odio, non bibendum orci ipsum nec lacus. Sed nec sollicitudin ipsum. Maecenas scelerisque bibendum metus, ut finibus est cursus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer in dolor sit amet elit vehicula varius. Fusce id purus eu ex rhoncus facilisis. Nullam dictum efficitur dui at condimentum. Integer vel libero a augue cursus interdum. Nulla facilisi. In in felis suscipit, vehicula justo et, varius nisi."
}
