import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    MatCardModule,
    NgOptimizedImage
  ],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent {

}
