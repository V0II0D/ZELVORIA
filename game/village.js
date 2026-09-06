export function createVillage(){
const village=document.getElementById("village");
village.style.transform="translate(-50%,-50%) scale(1.05)";
const fence=document.createElement("div");
fence.id="fence";
for(let x=8;x<=92;x+=8)createFence(fence,x,0);
for(let x=8;x<=92;x+=8)createFence(fence,x,100);
for(let y=8;y<=92;y+=8){createFence(fence,0,y);createFence(fence,100,y)}
village.appendChild(fence);
}
function createFence(parent,x,y){
const img=document.createElement("img");
img.src="game/objects/fence.svg";
img.className="fencePiece";
img.style.left=x+"%";
img.style.top=y+"%";
parent.appendChild(img);
}