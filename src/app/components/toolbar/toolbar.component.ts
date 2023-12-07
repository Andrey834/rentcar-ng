import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {RegisterFromComponent} from "../register-from/register-from.component";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(RegisterFromComponent);
  }
}
