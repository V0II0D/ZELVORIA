export function createVillage(){
const village=document.getElementById("village");
village.innerHTML="";
village.style.transform="translate(-50%,-50%) scale(1.05)";
createPath(village,"pathV");
createPath(village,"pathH");
createMainBuilding(village);
createMine(village,20,25);
createForge(village,80,25);
createHouse(village,25,68);
createHouse(village,75,68);
createWell(village,50,78);
createFence(village)
}
function createMainBuilding(p){
const e=document.createElement("img");
e.src="game/objects/main-building.svg";
e.className="mainBuilding";
e.style.left="50%";
e.style.top="42%";
p.appendChild(e)
}
function createMine(p,x,y){
const e=document.createElement("img");
e.src="game/objects/mine.svg";
e.className="mineBuilding";
e.style.left=x+"%";
e.style.top=y+"%";
p.appendChild(e)
}
function createForge(p,x,y){
const e=document.createElement("img");
e.src="game/objects/forge.svg";
e.className="forgeBuilding";
e.style.left=x+"%";
e.style.top=y+"%";
p.appendChild(e)
}
function createHouse(p,x,y){
const e=document.createElement("img");
e.src="game/objects/house.svg";
e.className="houseBuilding";
e.style.left=x+"%";
e.style.top=y+"%";
p.appendChild(e)
}
function createWell(p,x,y){
const e=document.createElement("img");
e.src="game/objects/well.svg";
e.className="wellBuilding";
e.style.left=x+"%";
e.style.top=y+"%";
p.appendChild(e)
}
function createPath(p,c){
const e=document.createElement("div");
e.className=c;
p.appendChild(e)
}
function createFence(p){
const f=document.createElement("div");
f.id="fence";
for(let x=5;x<=95;x+=10){
piece(f,x,6,"horizontal");
piece(f,x,90,"horizontal")
}
for(let y=16;y<=80;y+=10){
piece(f,5,y,"vertical");
piece(f,95,y,"vertical")
}
p.appendChild(f)
}
function piece(p,x,y,type){
const e=document.createElement("img");
e.src="game/objects/fence.svg";
e.className="fencePiece "+type;
e.style.left=x+"%";
e.style.top=y+"%";
p.appendChild(e)
}