export function createWorld(){
const world=document.getElementById("world");
const objects=[
["tree",8,18],["tree",88,12],["tree",14,78],["tree",82,82],["tree",6,48],["tree",94,52],["tree",20,12],["tree",76,8],["tree",4,70],["tree",92,72],["tree",12,32],["tree",86,35],["tree",28,8],["tree",68,10],["tree",8,88],["tree",92,88],["tree",25,92],["tree",74,92],["tree",97,28],["tree",3,25],
["rock",24,14],["rock",72,18],["rock",18,62],["rock",78,68],
["water",68,45],["water",30,88]
];
objects.forEach(([type,x,y])=>{
const el=document.createElement("div");
el.className=`worldObject ${type}`;
el.style.left=x+"%";
el.style.top=y+"%";
const img=document.createElement("img");
img.src=`game/objects/${type}.svg`;
el.appendChild(img);
world.appendChild(el);
});
}