# data-to-data
> data-to-data is a javascript data conversion tool.

When we work, it is inevitable that the data structure returned by the backend is inconsistent with what we need. Using it can be used to facilitate conversion.

## Installation

With NPM:
```sh
npm install data-to-data
```

With Yarn:
```sh
yarn add data-to-data
```

With PNPM:
```sh
pnpm install data-to-data
```

## Usage example

Basic usage example
``` js
const data = {
  a: {
    b: {
      c: 'c'
    }
  }
}

const mapping = {
  data: 'a.b.c'
}

dataToData(data, mapping) // { data: 'c' }
```

Array operation
``` js
const data = {
  a: {
    id: [1,2,3]
  }
}

const mapping = {
  data: ['a.id', id => `ID-${id}`]
}

dataToData(data, mapping) // { data: [ 'ID-1', 'ID-2', 'ID-3' ] }
```