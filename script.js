const projects=[
 {title:"CampusConnect",cat:"web",label:"WEB",budget:"$150–300",desc:"A student-first platform for discovering societies, events and opportunities across campus.",stack:["Next.js","Supabase"]},
 {title:"FocusFlow",cat:"mobile",label:"MOBILE",budget:"$200–500",desc:"A calm productivity app that turns daily goals into focused, measurable sessions.",stack:["React Native","Firebase"]},
 {title:"InsightLens",cat:"ai",label:"AI & DATA",budget:"$300–700",desc:"Turn messy datasets into clear, explainable insights with a lightweight AI workspace.",stack:["Python","OpenAI"]},
 {title:"Devfolio",cat:"design",label:"UI/UX",budget:"$80–180",desc:"A refined portfolio system for developers who want their work to speak first.",stack:["Figma","Design System"]},
 {title:"LocalCart",cat:"web",label:"WEB",budget:"$250–600",desc:"A marketplace connecting local makers with customers through a fast storefront.",stack:["React","Postgres"]},
 {title:"BugBoard",cat:"web",label:"WEB",budget:"$120–300",desc:"A simple issue-tracking workspace designed for small engineering teams.",stack:["TypeScript","Node.js"]}
];
const grid=document.getElementById("projectGrid");
function render(filter="all"){grid.innerHTML=projects.filter(p=>filter==="all"||p.cat===filter).map(p=>`<article class="card"><div class="card-top"><span class="tag">${p.label}</span><span class="budget">${p.budget}</span></div><h3>${p.title}</h3><p>${p.desc}</p><div class="card-bottom"><div class="stack">${p.stack.map(x=>`<span>${x}</span>`).join("")}</div><span class="arrow">↗</span></div></article>`).join("")}
render();
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelector(".filter.active").classList.remove("active");btn.classList.add("active");render(btn.dataset.filter)}));
function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}
function openModal(){document.getElementById("modal").classList.add("show");document.getElementById("modal").setAttribute("aria-hidden","false")}
function closeModal(){document.getElementById("modal").classList.remove("show");document.getElementById("modal").setAttribute("aria-hidden","true")}
function submitProject(e){e.preventDefault();closeModal();e.target.reset();showToast("Project saved — connect a backend to persist real submissions.")}
function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),2600)}
function toggleMenu(){showToast("On mobile, use the section buttons to navigate this prototype.")}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
