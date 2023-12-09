import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {PaginatorComponent} from "./components/paginator/paginator.component";
import {FormsModule} from "@angular/forms";
import {RegisterFromComponent} from "./components/register-from/register-from.component";
import {SidenavDrawerComponent} from "./components/sidenav-drawer/sidenav-drawer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToolbarComponent,
    PaginatorComponent,
    RegisterFromComponent,
    FormsModule,
    SidenavDrawerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rentcar-ng';
}
