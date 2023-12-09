import { Component } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {CarCardComponent} from "../car-card/car-card.component";

@Component({
  selector: 'app-sidenav-drawer',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, CarCardComponent],
  templateUrl: './sidenav-drawer.component.html',
  styleUrl: './sidenav-drawer.component.css'
})
export class SidenavDrawerComponent {
  showFiller = false;
}
