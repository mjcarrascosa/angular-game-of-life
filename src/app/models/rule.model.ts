import { RuleDefinition } from './rule-definition.model'
export class Rule {
  alive: RuleDefinition;
  born: RuleDefinition;

  constructor(rule: string) {
    const rules = rule.trim().split("/");
    this.alive = new RuleDefinition(rules[0]);
    this.born = new RuleDefinition(rules[1]);
  }

  check(isAlive: boolean, neighbours: number): boolean {
    let r= isAlive ?
      this.alive.getValues().includes(neighbours) :
      this.born.getValues().includes(neighbours);
      //console.log(`isAlive=${isAlive}, neighbours=${neighbours}, nextState=${r}`);
      return r;
    }

}
