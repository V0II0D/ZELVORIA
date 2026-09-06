export function createVillage(){
const village=document.getElementById("village");
village.innerHTML="";
village.style.transform="translate(-50%,-50%) scale(1.05)";
createPath(village,"pathV");
createPath(village,"pathH");
createMainBuilding(village);
createMine(village,20,25);
createForge(village,80,25);
createHouse(village,25,72);
createHouse(village,75,72);
createWell(village,50,82);
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
for(let x=4;x<=96;x+=8){piece(f,x,0);piece(f,x,100)}
for(let y=8;y<=92;y+=8){piece(f,0,y);piece(f,100,y)}
piece(f,0,0);piece(f,100,0);piece(f,0,100);piece(f,100,100);
p.appendChild(f)
}
function piece(p,x,y){
const e=document.createElement("img");
e.src="game/objects/fence.svg";
e.className="fencePiece";
e.style.left=x+"%";
e.style.top=y+"%";
p.appendChild(e)
}