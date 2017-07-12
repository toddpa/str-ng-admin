import { Formula, Percentage, FormulaArgument } from './formulae.model';

export class SupervisoryFormula {
  static create() {
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
    return formula;
  }
}
