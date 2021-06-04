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

console.log(tree2);

