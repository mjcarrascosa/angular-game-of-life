import { RuleDefinition } from './rule-definition.model'
export class Rule {
  survive: RuleDefinition;
  born: RuleDefinition;

  constructor(rule: string) {
    const rules = rule.trim().split("/");
    this.survive = new RuleDefinition(rules.filter(r => r.charAt(0)==="s" || r.charAt(0) == "S")[0]);
    this.born = new RuleDefinition(rules.filter(r => r.charAt(0)==="b" || r.charAt(0) == "B")[0]);
  }

  check(isAlive: boolean, neighbours: number): boolean {
    return isAlive ?
      this.survive.getValues().includes(neighbours) :
      this.born.getValues().includes(neighbours);
      //console.log(`isAlive=${isAlive}, neighbours=${neighbours}, nextState=${r}`);

    }

}
