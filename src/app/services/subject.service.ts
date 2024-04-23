import {Injectable} from '@angular/core';

import {catchError, map, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject, SubjectList} from "../models/subject";
import {AuthService} from "./auth.service";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class SubjectService {

  private subjectUrl = 'http://localhost:5000/subject';  // URL to API
  private accessToken = this.authService.getAccessTokenCookie();
  private headers:HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);

  constructor(
    private http: HttpClient, private authService: AuthService
  ) {

  }

  getSubject(id: number): Observable<Subject> {
    return this.http.get<Subject>(this.subjectUrl + '/' + id, { headers: this.headers, withCredentials: true }).pipe(
      map(subject => subject),
      catchError(this.handleError<Subject>(`getSubject ${id}`))
    )
  }
  getUserSubjects(): Observable<SubjectList> {
    return this.http.get<SubjectList>(this.subjectUrl + '/user-subjects',  { headers: this.headers, withCredentials: true }).pipe(
      map(subjectList => subjectList),
      catchError(this.handleError<SubjectList>(`getSubjectList`))
    )
  }

  addSubject(subject: Subject): Observable<Subject>{
    return this.http.post<Subject>(this.subjectUrl, subject, {headers: this.headers, withCredentials: true}).pipe(
      map(Subject => subject),
      catchError(this.handleError<Subject>(`addSubject`))
    )
  }




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to snackbar
      console.error(error); // log to console instead

      return of(result as T);
    };
  }

}
