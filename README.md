
# create standalone modules

## Usage

```sh
yarn add standalone-module
```

```js
import { transform } from 'standalone-module';

(async ()=>{
  const code = await transform({modulePath: __dirname + '/path/to/your/module'});
})();

```
