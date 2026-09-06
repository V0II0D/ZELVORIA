export function createWorld(){
const world=document.getElementById("world");
const objects=[
["tree","🌲",8,18],["tree","🌲",88,12],["tree","🌲",14,78],["tree","🌲",82,82],["tree","🌲",6,48],["tree","🌲",94,52],
["rock","🪨",24,14],["rock","🪨",72,18],["rock","🪨",18,62],["rock","🪨",78,68],
["water","💧",68,45],["water","💧",30,88]
];
objects.forEach(([type,icon,x,y])=>{const el=document.createElement("div");el.className=`worldObject ${type}`;el.textContent=icon;el.style.left=x+"%";el.style.top=y+"%";world.appendChild(el);});
}