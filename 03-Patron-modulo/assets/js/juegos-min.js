const moduloZ=(()=>{let e=document.querySelector("#btnPedir"),t=document.querySelector("#btnPause"),a=document.querySelector("#btnNew");var l=document.querySelectorAll("small"),r=document.querySelectorAll(".divCartas");let s=[],o=["C","D","H","S"],n=["A","J","Q","K"],d=[],i=(a=2)=>{s=c(),t.disabled=!1,e.disabled=!1,d=[];for(let o=0;o<a;o++)d.push(0);l.forEach(e=>{e.innerHTML=""}),r.forEach(e=>{e.innerHTML=""})},c=()=>{for(let e=2;e<=10;e++)for(let t of o)s.push(e+t);for(let a of o)for(let l of n)s.push(l+a);return _.shuffle(s)},u=()=>{if(0===s.length)throw"No hay cartas en la baraja de cartas";return s.pop()},$=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},h=(e,t)=>(d[t]=d[t]+$(e),l[t].innerText=d[t],d[t]),p=(e,t)=>{r=document.querySelectorAll(".divCartas");let a=document.createElement("img");a.src=`assets/cartas/${e}.png`,a.classList.add("carta"),a.alt="carta",r[t].append(a),console.log(t)},b=()=>{let[e,t]=d;setTimeout(()=>{t===e?alert("Empate perras"):e>21?alert("Computadora Gano!!!"):t>21?alert("Ganastes Campeon"):alert("Computadora Gana")},100)},f=e=>{let t=0;do{let a=u();t=h(a,d.length-1),p(a,d.length-1)}while(t<e&&e<=21);b()};return a.addEventListener("click",()=>{console.clear(),i()}),e.addEventListener("click",()=>{let a=u(),l=h(a,0);p(a,0),l>21?(console.log("Lo siento mucho, perdistes mi loca"),e.disabled=!0,t.disabled=!0,f(l)):21===l&&(console.log("Ganastes mi loca"),e.disabled=!0,t.disabled=!0,f(l))}),t.addEventListener("click",()=>{e.disabled=!0,t.disabled=!0,f(d[0])}),{nuevoJuego:i}})();