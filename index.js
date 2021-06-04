const tree1 = (paths) => {
  const tree = {};
  if (paths instanceof Array === false) {
    throw new Error('Expected an Array of file paths, but saw ' + paths);
  }
  const mergePathsIntoFileTree = (prevDir, currDir, i, filePath) => {
    if (i === filePath.length - 1) {
      prevDir[currDir] = 'file';
    }
    if (!prevDir.hasOwnProperty(currDir)) {
      prevDir[currDir] = {};
    }
    return prevDir[currDir];
  }
  const parseFilePath = (filePath) => {
    var fileLocation = filePath.split(/[\\]|[\/]/);
    // If file is in root directory, eg 'index.js'
    if (fileLocation.length === 1) {
      return (tree[fileLocation[0]] = 'file');
    }
    fileLocation.reduce(mergePathsIntoFileTree, tree);
  }
  paths.forEach(parseFilePath);
  return tree;
};

const tree2 = (paths) => {
  const tree = [];
  const level = {tree};
  paths.forEach(path => {
    path.split(/[\\]|[\/]/).filter(i => i).reduce((r, name, i, filePath) => {
      if (!r[name]) {
        let item = { name }; r[name] = {tree: []};
        item.type = i === filePath.length - 1 ? 'file' : 'folder';
        if (item.type === 'folder') item.children = r[name].tree;
        r.tree.push(item);
      }
      return r[name];
    }, level);
  });
  return tree;
};

const pathsToTree = (paths, options = {}) => {
  const i = (options.format === 'json');
  return i ? tree1(paths) : tree2(paths);
};

module.exports = pathsToTree;