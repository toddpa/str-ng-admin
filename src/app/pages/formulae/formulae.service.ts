import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Formula, Percentage, FormulaArgument } from './formulae.model';
import { SupervisoryFormula } from './supervisory.formula';
import { CapitalRequementsSMEBAselFormula } from './capreq.sme.formula';

@Injectable()
export class FormulaService {
  formulae: Formula[] = new Array<Formula>();
  formula: Formula;

  /**
   *
   * @param http ExpressionChangedAfterItHasBeenCheckedError:
   * Expression has changed after it was checked. Previous value: '[object Map Iterator]'.
   * Current value: '[object Map Iterator]'.
   */
  constructor(private http: Http) {
  }

  init() {
    this.formulae.push(SupervisoryFormula.create());
    this.formulae.push(CapitalRequementsSMEBAselFormula.create());
  }

  setFormula(formula: Formula) {
    this.formula = formula;
  }

  getFormula() {
    return this.formula;
  }

  execute(formula: string, parameters: Object) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`http://localhost:3000/execute/${formula}`,
      parameters,
      { headers })
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: Response) => {
        return Observable.throw('Something went wrong');
      });
  }
}
