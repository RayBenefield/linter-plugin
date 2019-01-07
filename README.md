Linter
====
#### Rete.js plugin

```js
import LinterPlugin from 'rete-linter-plugin';

editor.use(LinterPlugin, { analyzeOnChange: true, delay: 500 });
```

```js
editor.on('analyzed', warnings => {}); 

editor.trigger('analyze');
```