
export interface SimpleArgument {
  name: string;
  description: string;
}

export interface Percentage extends SimpleArgument {
  value: number | string;
}

export interface Amount extends SimpleArgument {
  value: number | string;
}

export type FormulaArgument = Percentage | Amount;

export class Formula {
  name: string;
  description: string;
  arguments: FormulaArgument[] = new Array<FormulaArgument>();
  binding: Function;
}
