import a from"./createElement.js";import b from"./isSVG.js";export default(()=>{let c=document.body;return c||(c=a(b?"svg":"body"),c.fake=!0),c})
