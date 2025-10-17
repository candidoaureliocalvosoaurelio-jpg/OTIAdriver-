
(function(){
  const select = document.querySelector('#lang-switch');
  if(!select) return;
  const map = {
    "pt": {"/":"/","/sobre":"/sobre","/contato":"/contato"},
    "en": {"/":"/en/","/sobre":"/en/about","/contato":"/en/contact"},
    "es": {"/":"/es/","/sobre":"/es/sobre","/contato":"/es/contacto"}
  };
  select.addEventListener('change', function(){
    const lang = this.value;
    const path = location.pathname.replace(/\/index\.html$/,'') || '/';
    // normalize end slash
    let normalized = path.endsWith('/') ? path.slice(0,-1) : path;
    if(normalized === '') normalized = '/';
    const dest = (map[lang] && map[lang][normalized]) || '/';
    location.href = dest;
  });
})();
