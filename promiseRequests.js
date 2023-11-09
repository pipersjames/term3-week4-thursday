//to be dryer use const
const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

function getRandomPokemon() {
    //let result = fetch ("https://pokeapi.co/api/v2/pokemon/25").then()
    //let result = fetch ("https://pokeapi.co/api/v2/pokemon/"+25).then()
    // let id = 25;
    // let result = fetch ("https://pokeapi.co/api/v2/pokemon/" + id).then()
    let id = 25;
    let result = fetch(API_BASE_URL + id)
                    .then(response => {
                        //console.log(response);
                        return response.json();
                    })
                    .then(data => {
                        //console.log(data.sprites.other["official-artwork"].front_default);
                        let pkmName = document.getElementById("pokemonName");
                        let pkmImage = document.getElementById("pokemonImage")
                        pkmName.innerText = data.name
                        pkmImage.src = data.sprites.other["official-artwork"].front_default; 
                        pkmImage.alt = "Image showing" + data.name;
                        return data;
                    })
                    .catch(error => {
                        console.log("Error" + error);
                    })
    console.log(result)

}