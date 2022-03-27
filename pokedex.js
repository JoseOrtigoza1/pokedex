const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("img/not.jpg");
            titulo("Sorry Not Fund");
            tipo("");
            abilidad(["",""]);
            estadistica(["","","","","",""]);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.other.home.front_default;      
            pokeImage(pokeImg);
            let pokename = data.forms[0].name;
            let pokeid = data.id;
            titulo('# ' + pokeid + ' ' + pokename);
            let poketipo = data.types[0].type.name;
            tipo(poketipo);
            let pokeabilidades = data.abilities;
            let abilidades = [];
            for(let init = 0; init < pokeabilidades.length; init++){
                abilidades.push(pokeabilidades[init].ability.name);
            }
            abilidad(abilidades);
            let pokestats = data.stats;
            let status = [];
            for(let init = 0; init < pokestats.length;init ++){
                status.push(pokestats[init].base_stat);
            }
            estadistica(status);
        }
    });
}


const titulo = (innerHTML) => {
    const nombre = document.getElementById("Nombre");
    nombre.innerHTML = innerHTML;
}

const tipo = (innerHTML) => {
    const elemento = document.getElementById("tipo");
    elemento.innerHTML = innerHTML;
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const abilidad = (innerHTML) => {
    const pokeabilidad = document.getElementById("abilidades");
    pokeabilidad.innerHTML=[];
    for(let init = 0; init <= abilidad.length; init++){
        pokeabilidad.innerHTML += innerHTML[init] + '<br>';
    }
}

const estadistica = (innerHTML) => {
    const pokestat = document.getElementById("estadistica");
    pokestat.innerHTML =[];
    pokestat.innerHTML += 'hp: ' + innerHTML[0] + '<br>atk: ' + innerHTML[1]
    + '<br>def: ' + innerHTML[2] + '<br>sp-atk: ' + innerHTML[3] +
    '<br>sp-def: ' + innerHTML[4] + '<br>speed: ' + innerHTML[5];
}




