import Warning from './warning';

export default class Linter {
    constructor() {
        this.rules = [];
    }

    add(rule) {
        this.rules.push(rule);
    }

    analyze(...args) {
        return this.rules.map(rule => {
            return rule.analyze(...args).map(warningData => new Warning(rule.id, warningData));
        }).flat();
    }
}