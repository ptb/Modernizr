export default((a)=>a.replace(/([a-z])-([a-z])/g,function(a,b,c){return b+c.toUpperCase()}).replace(/^-/,""))
