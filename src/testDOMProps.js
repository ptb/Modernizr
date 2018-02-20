import a from"./is.js";import b from"./fnBind.js";export default((c,d,e)=>{let f;for(const g in c)if(c[g]in d)return!1===e?c[g]:(f=d[c[g]],a(f,"function")?b(f,e||d):f);return!1})
