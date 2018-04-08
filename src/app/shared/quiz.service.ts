import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
//--------------properties----------------
  readonly rootUrl = 'http://localhost:51438/';
  qns : any[];
  seconds: number;
  timer;
  qnProgree: number;



//-----------helper methods---------------

  constructor(private http: HttpClient) { }
//---------http methods---------------
  insertParticipant(name : string, email: string){
    var body ={
    Name: name,
    Email: email
    }
    return this.http.post(this.rootUrl + '/api/InsertParticipant', body);
  }

  getQuestions(){
    return this.http.get(this.rootUrl + '/api/Questions');
  }
}
