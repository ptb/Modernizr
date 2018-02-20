export default((a)=>{if("undefined"==typeof XMLHttpRequest)return!1;const b=new XMLHttpRequest;b.open("get","/",!0);try{b.responseType=a}catch(a){return!1}return"response"in b&&b.responseType==a})
