const namePokemon = document.getElementById("namePokemon");
const imgelement = document.getElementById("element");
const imgpokemon = document.getElementById("imgpokemon");
const No = document.getElementById("No");
const level = document.getElementById("level");
const type = document.getElementById("type");
const hability = document.getElementById("hability");
const height = document.getElementById("height");
const weight = document.getElementById("weight");

const pokemons = [
    {
        namePokemon: "SQUIRTE",
        No: "007",
        type: "WATER",
        height: "0,5 M",
        level: "35",
        hability: "BUBBLES",
        weight: "9 kg",
        imgpokemon: "./img/Squirtle2.webp",
        imgelement: "./img/agua.png",
        sound: "./sound/squirtle.mp3"
    },{
        namePokemon: "MEWTWO",
        No: "150",
        type: "PSYCHIC",
        height: "2 M",
        level: "75",
        hability: "MENTAL",
        weight: "122 kg",
        imgpokemon: "./img/newtwo.webp",
        imgelement: "./img/psitico.png",
        sound: "./sound/Mewtwo.ogg"
    },{
        namePokemon: "SOLGALEO",
        No: "391",
        type: "PSYCHIC",
        height: "3,4 M",
        level: "200",
        hability: "CLAW",
        weight: "230 kg",
        imgpokemon: "./img/Solgaleo.webp",
        imgelement: "./img/psitico.png",
        sound: "./sound/solgaleo.mp3"
    },{
        namePokemon: "SNORLAX",
        No: "143",
        type: "NORMAL",
        height: "2,1 M",
        level: "20",
        hability: "SLEEP",
        weight: "460 kg",
        imgpokemon: "./img/snorlax.webp",
        imgelement: "./img/normal.png",
        sound: "./sound/snorlax.mp3"
    }
];

const viewPokemon = (position) => {
    let sound = new Audio(pokemons[position].sound);
    namePokemon.value = pokemons[position].namePokemon;
    No.value = pokemons[position].No;
    type.value = pokemons[position].type;
    height.value = pokemons[position].height;
    level.value = pokemons[position].level;
    hability.value = pokemons[position].hability;
    weight.value = pokemons[position].weight;
    imgpokemon.src = pokemons[position].imgpokemon;
    imgpokemon.title = pokemons[position].namePokemon;
    imgelement.src = pokemons[position].imgelement;
    movePokemon();
    sound.play();
}
const movePokemon = () =>{
    if (imgpokemon.classList == "movePokemon") {
        imgpokemon.classList.remove("movePokemon");
    }else{
        imgpokemon.classList.add("movePokemon");
    }
}
