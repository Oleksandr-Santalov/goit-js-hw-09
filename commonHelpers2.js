import"./assets/modulepreload-polyfill-3cfb730f.js";const n="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("input",l);e.addEventListener("submit",o);function o(t){t.preventDefault();const a=e.elements.email.value,s=e.elements.message.value;e.elements.email.value!==""&&e.elements.message.value!==""&&(console.log({email:a,message:s}),localStorage.removeItem(n),e.reset())}function l(){const t=e.elements.email.value,a=e.elements.message.value,s={email:t.trim(),message:a.trim()};m(n,s)}function m(t,a){const s=JSON.stringify(a);localStorage.setItem(t,s)}function c(t){const a=localStorage.getItem(t);try{return JSON.parse(a)}catch{return a}}function r(){const t=c(n)||{};e.elements.email.value=t.email||"",e.elements.message.value=t.message||""}r();
//# sourceMappingURL=commonHelpers2.js.map