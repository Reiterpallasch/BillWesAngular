import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from './question';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestion(): Observable<Question>{
    return this.http.get('https://jservice.io/api/random').pipe(
      map (resp => resp as Question )
  }
}
