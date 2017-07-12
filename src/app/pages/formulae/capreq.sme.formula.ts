import { Formula, Percentage, FormulaArgument } from './formulae.model';

export class CapitalRequementsSMEBAselFormula {
  static create() {
    const formula = new Formula();
    formula.name = 'capreq-sme-basel';
    formula.description = 'capital requirements SME Basel regulatory formula';
    formula.arguments.push({
      name: 'pd',
      description: 'probability of default',
      value: 1
    });
    formula.arguments.push({
      name: 'lgd',
      description: 'loss given default',
      value: 45
    });
    formula.arguments.push({
      name: 'M',
      description: 'M',
      value: 12
    });
    formula.arguments.push({
      name: 'S',
      description: 'S',
      value: 70
    });
    return formula;
  }
}
