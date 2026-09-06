import{createVillage}from'./village.js';
import{createWorld}from'./world.js';
let silver=0,gold=0,wave=1,villageLevel=1;
let silverEl=document.getElementById('silver');
let goldEl=document.getElementById('gold');
let waveEl=document.getElementById('wave');
let villageLevelEl=document.getElementById('villageLevel');
createWorld();
createVillage();
document.getElementById('gameShop').onclick=()=>alert('Игровой магазин');
document.getElementById('customShop').onclick=()=>alert('Магазин кастомизации');
document.getElementById('pause').onclick=()=>alert('Пауза');
function updateUI(){
silverEl.textContent=silver;
goldEl.textContent=gold;
waveEl.textContent=wave;
villageLevelEl.textContent=villageLevel;
}
updateUI();