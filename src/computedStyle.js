export default((a,b,c)=>{let d;return"getComputedStyle"in window?(d=getComputedStyle.call(window,a,b),null!==d&&c&&(d=d.getPropertyValue(c))):d=!b&&a.currentStyle&&a.currentStyle[c],d})
