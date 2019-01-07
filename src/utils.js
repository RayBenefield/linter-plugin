export function outputNodes(node) {
    const outputs = Array.from(node.outputs.values());

    return outputs.map(output => {
        return output.connections.map(c => {
            return c.input.node;
        });
    }).flat();
}