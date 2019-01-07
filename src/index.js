import Linter from './linter';
import NodeOrderRule from './rules/node-order';
import { debounce } from 'lodash';

function install(editor, { analyzeOnChange = true, delay = 500 }) {
    editor.bind('analyze');
    editor.bind('analyzed');

    const linter = new Linter();
    
    linter.add(new NodeOrderRule())

    editor.on('analyze', () => editor.trigger('analyzed', linter.analyze(editor)))

    if (!analyzeOnChange) return;

    const lintDebounce = debounce(() => editor.trigger('analyze'), delay);

    editor.on('nodetranslated', lintDebounce);
}

export default {
    name: 'linter',
    install
}