import { Formula, Percentage, FormulaArgument } from './formulae.model';
import { NgForm } from '@angular/forms';
import { Supervisory, SupervisoryArgs } from '@toddpa/shared-module';

export class SupervisoryFormula {
  static create(): Formula {
    const formula = new Formula();
    formula.name = 'supervisory';
    formula.description = 'supervisory regulatory formula';
    formula.arguments.push({
      name: 'K',
      description: 'K',
      value: 1
    });
    formula.arguments.push({
      name: 'L',
      description: 'L',
      value: 12
    });
    formula.arguments.push({
      name: 'detach',
      description: 'detachment point',
      value: 70
    });
    formula.arguments.push({
      name: 'N',
      description: 'N',
      value: 150
    });
    formula.arguments.push({
      name: 'lgd',
      description: 'loss given default',
      value: 45
    });
    formula.binding = function (form: NgForm): SupervisoryArgs {
      // TODO: Need to implement validation on the formula fields
      const supervisory = new Supervisory()
      const K: number = form.value.sf_K / 100;
      const L: number = form.value.sf_L / 100;
      const detach: number = form.value.sf_detach / 100;
      const N: number = form.value.sf_N;
      const lgd: number = form.value.sf_lgd / 100;
      const tau: number = 1000; // form.value.sf_tau;
      const omega: number = 20; // form.value.sf_omega;

      const args: SupervisoryArgs = {
        formula: 'supervisory',
        'K': K,
        'L': L,
        'detach': detach,
        'N': N,
        'LGD': lgd
      };
      return args
    }
    return formula;
  }
}
