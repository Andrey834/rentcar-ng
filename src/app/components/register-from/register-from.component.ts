import {Component, inject, Input} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {PersonRegisterService} from "../../services/person-register.service";
import {Person} from "../../interface/person";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatDatepickerModule} from "@angular/material/datepicker";

@Component({
  selector: 'app-register-from',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatDialogClose,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './register-from.component.html',
  styleUrl: './register-from.component.css'
})

export class RegisterFromComponent {
  @Input() username: string = 'andrey834'
  @Input() password: string = 'Andrey321'
  @Input() firstName: string = 'andrey'
  @Input() lastName: string = 'moyashov'
  @Input() email: string = 'andrey834@ya.ru'
  @Input() birthday: string = '2000-01-01'


  constructor(private service: PersonRegisterService) {
  }

  register(): any {
    const person: Person = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthday: this.birthday
    }

    this.service.registerPerson(person).subscribe(answer => console.log(answer))
  }
}
