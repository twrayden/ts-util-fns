# ts-object-fns [![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)

Type safe object utility functions.

## Usage

These functions come bundled:

- [`visit`](#visit)
- [`trim`](#trim)
- [`omitKey`](#omitkey)
- [`isEmpty`](#isempty)
- [`hasKeys`](#haskeys)

#### visit

> Run a function for each key of target object.

```typescript
import { visit } from "ts-object-fns";

const myObj = {
  hello: "world",
  marco: "polo"
};

visit(myObj, {
  hello(value) {
    console.log(value); // "world"
  },
  marco(value) {
    console.log(value); // "polo"
  }
});
```

#### trim

> Remove empty keys from target object.

```typescript
import { trim } from "ts-object-fns";

const myObj = {
  hello: "world",
  marco: "polo",
  messy: undefined,
  data: null
};

trim(myObj); // { hello: "world", marco: "polo", data: null }
```

#### omitKey

> Remove property from target object.

```typescript
import { omitKey } from "ts-object-fns";

const myObj = {
  hello: "world",
  marco: "polo"
};

omitKey(myObj, "marco"); // { hello: "world" }
```

#### isEmpty

> Return true if the target object is empty.

```typescript
import { isEmpty } from "ts-object-fns";

const myObj = {
  hello: "world",
  marco: "polo"
};
const emptyObj = {};

isEmpty(myObj); // false
isEmpty(emptyObj); // true
```

#### hasKeys

> Return true is the target object contains at least one specified key.

```typescript
import { hasKeys } from "ts-object-fns";

const myObj = {
  hello: "world",
  marco: "polo"
};

hasKeys(myObj, ["hello"]); // true
hasKeys(myObj, ["hello", "unknown"]); // true
hasKeys(myObj, ["polo"]); // false
```

## Related

- [ts-array-fns](https://github.com/thomasraydeniscool/ts-array-fns) - Typesafe array utility functions
