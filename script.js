const projects=[
  {
    "id": "dunhuang",
    "title": "Dunhuang Artist Studio",
    "category": "architecture",
    "label": "Architecture · Artist Workspace",
    "location": "Dunhuang, China",
    "year": "2026",
    "credits": "JY STUDIO · Design and drafting: JY (as credited on the drawings). Drawing issue: 17 August 2026.",
    "description": "A compact pitched-roof artist studio opening onto a raised terrace. The proposal brings a generous glazed frontage and rooflight to a small workspace within a planted setting. The drawing set develops the ground-floor and roof plans, south and west elevations, foundations and a layered timber-frame wall detail.",
    "status": "Design proposal · Visualisation and technical drawings",
    "images": [
      {
        "src": "assets/projects/dunhuang-1.webp",
        "caption": "Design visualisation from the project presentation; not a verified completion photograph."
      },
      {
        "src": "assets/projects/dunhuang-2.webp",
        "caption": "Ground-floor and roof plans, south and west elevations · JY STUDIO."
      },
      {
        "src": "assets/projects/dunhuang-3.webp",
        "caption": "Foundation plan · Drawing issue: 17 August 2026."
      },
      {
        "src": "assets/projects/dunhuang-4.webp",
        "caption": "Wall build-up detail · JY STUDIO."
      }
    ]
  },
  {
    "id": "yunxi",
    "title": "Sintra — Yunxi Site & Sound Sculptures",
    "category": "art",
    "categories": [
      "art",
      "architecture",
      "research"
    ],
    "label": "Collaborative Practice · Landscape & Sound Art",
    "location": "Sintra, Portugal",
    "year": "2026",
    "credits": "Sound sculpture concept: Josep Cerdà; proposal credited Cerdá/ZIYOU. Site work and model-making reports dated 27–29 January 2026 are signed JY. Individual sculpture-design authorship is not claimed here.",
    "description": "Project development in Sintra connects topographic study, physical landscape models and sound-sculpture documentation. The model records the relationship between sloping terrain, building volumes, a pool and a tennis court. A related proposal for Quinta dos Mouros describes a route of five interactive sound sculptures by Josep Cerdà. The selected materials show the working process and a dimensioned sculpture component, rather than a completed installation.",
    "status": "Development documentation · Site model and sculpture drawing",
    "images": [
      {
        "src": "assets/projects/yunxi-model.webp",
        "caption": "Physical site model showing terrain, buildings, pool and tennis court."
      },
      {
        "src": "assets/projects/yunxi-process.webp",
        "caption": "Collaborative model-making process in the project workspace."
      },
      {
        "src": "assets/projects/yunxi-sculpture.webp",
        "caption": "Dimensioned sculpture component, sheet 1 of LISBOA YUNXI1 sculpture. Sculpture concept: Josep Cerdà."
      }
    ]
  },
  {
    "id": "meijiang",
    "title": "Meijiang Courtyard Renovation",
    "category": "architecture",
    "label": "Architecture · Courtyard & Landscape",
    "location": "Meijiang, China",
    "year": "2026",
    "credits": "JY STUDIO (drawing title block). Sheet 01 · 1 September 2026. Individual design and drafting names are not filled in on the source sheet.",
    "description": "A courtyard renovation organised around a decked dining area, planted edges and a compact water feature. Paved circulation links the garden entrance to the interior, while the plan identifies water, power and drainage points. The portfolio presents the documented design layout, with the full drawing available to inspect.",
    "status": "Design layout · Ground-floor plan",
    "images": [
      {
        "src": "assets/projects/meijiang-plan.webp",
        "caption": "Courtyard ground-floor plan · Original sheet scale 1:50; on-screen display is not to scale."
      }
    ]
  },
  {
    "id": "sintra",
    "title": "Reactivation of a Tennis Centre",
    "category": "architecture",
    "label": "Architecture · Adaptive Reuse",
    "location": "Sintra, Portugal",
    "year": "2026",
    "short": "SIN",
    "art": "#b7bba9",
    "shape": "linear-gradient(113deg,transparent 25%,#6f7c6b 25% 54%,transparent 54%),linear-gradient(22deg,#c8c9b8 10%,#879482 80%)",
    "description": "Bachelor's diploma project exploring the reactivation of a tennis centre in Sintra. This portfolio entry will present the spatial strategy, architectural drawings, technical development and final proposal."
  },
  {
    "id": "escac",
    "title": "ESCAC — Adaptive Reuse",
    "category": "architecture",
    "label": "Architecture · Cultural Spaces",
    "location": "Catalonia, Spain",
    "year": "2024–2026",
    "short": "ES",
    "art": "#bfc7c0",
    "shape": "linear-gradient(150deg,transparent 27%,#566b66 27% 51%,transparent 51%),linear-gradient(24deg,#b1b7ab 20%,#7a8b7e 80%)",
    "description": "Architectural practice project related to the adaptation of ESCAC spaces. Images, precise scope and individual responsibilities will be added after verification."
  },
  {
    "id": "girona",
    "title": "Girona — Hospitality Concept",
    "category": "architecture",
    "label": "Architecture · Hospitality",
    "location": "Girona, Spain",
    "year": "2024–2026",
    "short": "GI",
    "art": "#d0c3a9",
    "shape": "linear-gradient(70deg,transparent 34%,#ad9474 34% 61%,transparent 61%),linear-gradient(0deg,#d6c8ad,#9b937c)",
    "description": "Hospitality and spatial design project in the Girona region. Selected design process and outcomes will be documented here."
  },
  {
    "id": "olot",
    "title": "Olot — Spatial Design",
    "category": "architecture",
    "label": "Architecture · Public / Cultural",
    "location": "Olot, Spain",
    "year": "2024–2026",
    "short": "OL",
    "art": "#aab1b1",
    "shape": "linear-gradient(130deg,transparent 28%,#667b7e 28% 59%,transparent 59%),linear-gradient(0deg,#c6c9c3,#7c8f90)",
    "description": "Architectural project in Olot, addressing spatial organisation and context. Further documentation and verified project details will be added."
  },
  {
    "id": "sonora",
    "title": "Sonora Gaudí",
    "category": "art",
    "label": "Art & Installation · Cultural Space",
    "location": "Spain",
    "year": "2024–2026",
    "short": "SG",
    "art": "#b6a899",
    "shape": "radial-gradient(ellipse at 60% 55%,#796659 0 22%,transparent 23%),linear-gradient(40deg,#d1bca4,#99846f)",
    "description": "An interdisciplinary creative project engaging with architecture and cultural interpretation. Visual material, collaborators and individual contributions will be credited when uploaded."
  }
];
const grid=document.querySelector("#project-grid"),dialog=document.querySelector("#project-dialog");
const categories={architecture:"Architecture",art:"Art & Installation",research:"Research"};
const escapeHtml=s=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function render(filter="all"){grid.replaceChildren();projects.filter(p=>filter==="all"||p.category===filter||p.categories?.includes(filter)).forEach(p=>{const b=document.createElement("button");b.type="button";b.className="project-card";b.setAttribute("aria-label","View "+p.title);b.innerHTML=(p.images ? '<div class="project-art has-image"><img src="'+p.images[0].src+'" alt="'+escapeHtml(p.images[0].caption)+'" loading="lazy" width="1400" height="1000"><span class="image-label">'+escapeHtml(p.status)+'</span></div>' : '<div class="project-art" style="--art:'+p.art+';--shape:'+p.shape+'"><span class="project-ghost">'+p.short+'</span><span class="image-label">PROJECT VISUAL / TO BE ADDED</span></div>')+'<div class="project-info"><div><h3>'+escapeHtml(p.title)+'</h3><p>'+escapeHtml(p.label)+' · '+escapeHtml(p.year)+'</p></div><span class="project-arrow" aria-hidden="true">↗</span></div>';b.addEventListener("click",()=>openProject(p));grid.append(b)})}
function openProject(p){document.querySelector("#dialog-type").textContent=p.label;document.querySelector("#dialog-location").textContent=p.location;document.querySelector("#dialog-year").textContent=p.year;document.querySelector("#dialog-title").textContent=p.title;document.querySelector("#dialog-description").textContent=p.description;const art=document.querySelector("#dialog-art");art.style.setProperty("--art",p.art);art.style.setProperty("--shape",p.shape);art.replaceChildren();art.classList.toggle('has-image',Boolean(p.images));
if(p.images){const cover=document.createElement('img');cover.src=p.images[0].src;cover.alt=p.images[0].caption;art.append(cover)}
document.querySelector('#dialog-credits').textContent=p.credits||'';
document.querySelector('#dialog-status').textContent=p.status||'Detailed images and documentation coming soon.';
const gallery=document.querySelector('#dialog-gallery');gallery.replaceChildren();
for(const item of p.images||[]){const figure=document.createElement('figure');const link=document.createElement('a');link.href=item.src;link.target='_blank';link.rel='noopener';link.setAttribute('aria-label','Open full image: '+item.caption);const image=document.createElement('img');image.src=item.src;image.alt=item.caption;image.loading='lazy';link.append(image);const caption=document.createElement('figcaption');caption.textContent=item.caption;figure.append(link,caption);gallery.append(figure)}
dialog.showModal();dialog.scrollTop=0;history.replaceState(null,"","#project-"+p.id)}
function closeProject(){dialog.close();history.replaceState(null,"","#work")}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>{x.classList.toggle("active",x===b);x.setAttribute("aria-pressed",String(x===b))});render(b.dataset.filter)}));
document.querySelectorAll(".close-dialog").forEach(b=>b.addEventListener("click",closeProject));
dialog.addEventListener("click",e=>{if(e.target===dialog)closeProject()});dialog.addEventListener("close",()=>{if(location.hash.startsWith("#project-"))history.replaceState(null,"","#work")});
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open))});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));
document.querySelector("#year").textContent=String(new Date().getFullYear());
document.querySelector(".email-pending").addEventListener("click",e=>e.preventDefault());
document.querySelector('[data-filter="all"] sup').textContent=String(projects.length).padStart(2,'0');
render();const deep=location.hash.match(/^#project-(.+)$/);if(deep){const p=projects.find(x=>x.id===(deep[1]==="sonic"?"yunxi":deep[1]));if(p)openProject(p)}
