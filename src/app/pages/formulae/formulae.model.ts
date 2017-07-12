export interface Percentage {
  name: string;
  description: string;
  value: number | string;
}

export interface Amount {
  name: string;
  description: string;
  value: number | string;
}

export type FormulaArgument = Percentage | Amount;

export class Formula {
  name: string;
  description: string;
  arguments: FormulaArgument[] = new Array<FormulaArgument>();
}
