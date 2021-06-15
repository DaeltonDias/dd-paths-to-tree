# dd-paths-to-tree
Convert a list of path strings to tree

### Installation
```shell
$ npm install dd-paths-to-tree
```

### Use
```javascript
// CommonJS
const pathsToTree = require('dd-paths-to-tree');

// ES6
import pathsToTree from 'dd-paths-to-tree';
```

```javascript
const paths = [
  'src/lib/git.js',
  'src/lib/server.js',
  'externs/jquery.js',
  'index.js'
];

const tree_1 = pathsToTree(paths, { format: 'json' });
const tree_2 = pathsToTree(paths);

console.log(tree_1);
// {
//   'index.js': 'file',
//   'src': {
//     'lib': {
//       'git.js': 'file',
//       'server.js': 'file'
//     },
//   },
//   'externs': {
//     'jquery.js': 'file'
//   }
// }

console.log(tree_2);
// [
//   {
//     name: 'src',
//     type: 'folder',
//     children: [
//       {
//         name: 'lib',
//         type: 'folder',
//         children: [
//           {
//             name: 'git.js',
//             type: 'file'
//           },
//           {
//             name: 'server.js',
//             type: 'file'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     name: 'externs',
//     type: 'folder',
//     children: [
//       {
//         name: 'jquery.js',
//         type: 'file'
//       }
//     ]
//   },
//   {
//     name: 'index.js',
//     type: 'file'
//   }
// ]
```