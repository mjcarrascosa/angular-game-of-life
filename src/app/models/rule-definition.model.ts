export class RuleDefinition {
  definition: string;
  values: number[];

  constructor(definition : string) {
    this.definition = definition;
    this.values = definition.replace(/[^1-8]/g, '').split('').map(item => parseInt(item));
  }

  getValues() : number[] {
    return this.values;
  }

  getDefinition() : string {
    return this.definition;
  }
}
