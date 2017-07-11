import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormulaService {
  constructor(private http: Http) { }

  execute(formula: string, parameters: Object) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`http://localhost:3000/execute/${formula}`,
      parameters,
      { headers })
      .map( (response: Response) => {
        const data = response.json();
        return data;
      })
      .catch( (error: Response) => {
          return Observable.throw('Something went wrong');
        });
  }
}
