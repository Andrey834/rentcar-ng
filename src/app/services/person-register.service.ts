import {Injectable} from '@angular/core';
import {Person} from "../interface/person";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonRegisterService {


  constructor(private client: HttpClient) {
  }

  registerPerson(person: Person): Observable<Person> {
    return this.client.post<Person>("http://192.168.0.15:9090/users/register", person)
  }
}
