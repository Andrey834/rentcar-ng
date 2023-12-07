import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {PaginatorComponent} from "./components/paginator/paginator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent, PaginatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rentcar-ng';
}
