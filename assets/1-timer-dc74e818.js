import{f as C,i as b}from"./vendor-9808d4ac.js";const e=document.querySelector("button[data-start]"),r=document.querySelector("#datetime-picker"),d=document.querySelector("[data-days]"),c=document.querySelector("[data-hours]"),u=document.querySelector("[data-minutes]"),i=document.querySelector("[data-seconds]");e.disabled=!0;let l;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=m.defaultDate?(b.show({title:"",message:"Please choose a date in the future"}),e.disabled=!0):(e.disabled=!1,l=t[0]),console.log(t[0])}};C(r,m);e.addEventListener("click",T);function T(){r.disabled=!0,e.disabled=!0;const t=setInterval(()=>{const n=Date.now(),s=l-n,a=M(s),o=p(a);d.textContent=o[0],c.textContent=o[1],u.textContent=o[2],i.textContent=o[3],d.textContent==="00"&&c.textContent==="00"&&u.textContent==="00"&&i.textContent==="00"&&(clearInterval(t),r.disabled=!1,e.disabled=!0)},1e3)}function p(t){return[t.days.toString().padStart(2,"0"),t.hours.toString().padStart(2,"0"),t.minutes.toString().padStart(2,"0"),t.seconds.toString().padStart(2,"0")]}function M(t){const f=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:f,hours:h,minutes:y,seconds:S}}
//# sourceMappingURL=1-timer-dc74e818.js.map
