const fetch = require('node-fetch');
const queryString = require('query-string');

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions,
) => {
  const { createNode } = actions;
  delete configOptions.plugins;

  const processRecipe = (title, minutes, images) => {
    const node = {
      title,
      minutes,
      images
    }
    const nodeId = createNodeId(`recipe-${title}`)
    const nodeContent = JSON.stringify(node)
    const nodeData = Object.assign({}, node, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `recipes`,
        content: nodeContent,
        contentDigest: createContentDigest(node),
      },
    })
    return nodeData
  }

  const apiOptions = queryString.stringify(configOptions);
  const apiUrl = `https://api.spoonacular.com/recipes/search?${apiOptions}`;

  const response = await fetch(apiUrl)
  const data = await response.json();

  data.results.forEach(result => {
    const title = result.title;
    const minutes = result.readyInMinutes;
    const images = result.imageUrls;

    createNode(processRecipe(title, minutes, images));
  });
};
