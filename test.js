const pathsToTree = require('./index');

const paths = [
  'src/lib/git.js',
  'src/lib/server.js',
  'externs/jquery.js',
  'index.js'
];

const options = { format: 'json' };
const tree1 = pathsToTree(paths, options);
const tree2 = pathsToTree(paths);

console.log(tree1);
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

console.log(tree2);
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
