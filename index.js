var recipes = {prop: 1};

function updateObjectWithKeyAndValue(recipes, prop){
  return Object.assign({}, recipes, {prop2: 2})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop){
  recipes.prop2 = 2;
  return recipes
}

function deleteFromObjectByKey(recipes){
  var newRecipes = recipes
  delete newRecipes.prop;
  return newRecipes
}

function 