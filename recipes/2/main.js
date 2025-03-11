import recipes from "./recipes.mjs";

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function tagsTemplate(tags){
    let html = ''
    tags.forEach(tag => {
        html+= `<span class="label">${tag}</span>`
    });
    return html
}

function ratingTemplate(rating){
    let html = ''
    for (let i=0; i < 5; i++){
        if(i <= rating){
            html += '<span aria-hidden="true" class="icon-star">⭐</span>'
        }
        else{
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>'
        }
    }
    return html
}

function recipeTemplate(recipe){
    return `<section>
        <img src=${recipe.image} alt=${recipe.name}/>
        <div class="recipe-details">
            ${tagsTemplate(recipe.tags)}
            <h2>${recipe.name.toUpperCase()}</h2>
            <span
                class="rating"
                role="img"
                aria-label="Rating: ${recipe.rating} out of 5 stars"
            >
                ${ratingTemplate(recipe.rating)}
            </span>
            <p>
                ${recipe.description}
            </p>
        </div>
    </section>`
}

function renderRecipes(recipeList) {

    const main = document.querySelector('main');
    main.innerHTML=''

    const recipeHtml = recipeList.map((recipe) => recipeTemplate(recipe))

    recipeHtml.forEach((html) => {
        main.innerHTML += html
    })

}

function init() {
  const recipe = getRandomListEntry(recipes)
  renderRecipes([recipe]);
}

function searchHandler(){
    const searchInput = document.querySelector('input');
    const searchParameter = searchInput.value.toLowerCase();
    let filteredRecipes = recipes.filter((recipe) =>
    {
        return recipe.name.toLowerCase().includes(searchParameter)
            || recipe.description.toLowerCase().includes(searchParameter)
            || recipe.tags.find((item) => item.toLowerCase().includes(searchParameter))
            || recipe.recipeIngredient.find((item) => item.toLowerCase().includes(searchParameter));
    })
    filteredRecipes = filteredRecipes.sort((a, b) => {
        return a.name.localeCompare(b.name);
    })

    renderRecipes(filteredRecipes);
}

init();

const searchButton = document.getElementById('searchbar');
searchButton.addEventListener('click', searchHandler)