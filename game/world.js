export function createWorld(){
const world=document.getElementById("world");
const objects=[
["tree",6,12],["tree",94,10],["tree",5,88],["tree",95,90],["tree",12,22],["tree",88,20],["tree",8,38],["tree",92,40],["tree",5,62],["tree",95,64],["tree",18,8],["tree",82,7],["tree",18,94],["tree",82,94],["tree",28,6],["tree",72,6],["tree",28,96],["tree",72,96],["tree",2,30],["tree",98,30],["tree",2,75],["tree",98,78]
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