import Rule from '../rule';
import { outputNodes } from '../utils';

export default class NodeOrderRule extends Rule {
    constructor() {
        super('node-order');
    }

    analyze(editor) {
        return editor.nodes.map(node => outputNodes(node)
            .filter(nextNode => node.position[0] >= nextNode.position[0])
            .map(nextNode => ({ node, nextNode }))
        ).flat();
    }
}