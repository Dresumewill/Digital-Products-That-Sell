// Scroll reveal
const rObs=new IntersectionObserver((es)=>{es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),(i%4)*60);rObs.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>rObs.observe(el));

// Animated counters
const cObs=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){const el=e.target;const t=+el.dataset.count;const suf=el.dataset.suffix||'';let s=0;const step=Math.max(1,Math.ceil(t/45));const iv=setInterval(()=>{s+=step;if(s>=t){s=t;clearInterval(iv);}el.textContent=s+suf;},26);cObs.unobserve(el);}});},{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>cObs.observe(el));
