export default((a)=>a.replace(/([A-Z])/g,function(a,b){return`-${b.toLowerCase()}`}).replace(/^ms-/,"-ms-"))
