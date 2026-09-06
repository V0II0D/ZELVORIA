import {createVillage} from “./village.js”;
import {createWorld} from “./world.js”;
let silver=0;
let gold=0;
let wave=1;
let villageLevel=1;
const silverEl=document.getElementById(“silver”);
const goldEl=document.getElementById(“gold”);
const waveEl=document.getElementById(“wave”);
const villageLevelEl=document.getElementById(“villageLevel”);
createWorld();
createVillage();
document.getElementById(“gameShop”).onclick=()=>alert(“Игровой магазин”);
document.getElementById(“customShop”).onclick=()=>alert(“Магазин кастомизации”);
document.getElementById(“pause”).onclick=()=>alert(“Пауза”);
function updateUI(){
silverEl.textContent=silver;
goldEl.textContent=gold;
waveEl.textContent=wave;
villageLevelEl.textContent=villageLevel;
}
updateUI();