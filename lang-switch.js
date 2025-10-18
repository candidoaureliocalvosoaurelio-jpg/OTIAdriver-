// --- Sincroniza bandeiras e <select> (duas vias) ---
const flags  = document.querySelectorAll(".flag");
const select = document.getElementById("lang-switch");

function goToLang(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.location.href = url.toString();
}

function updateActiveFlag(lang) {
  flags.forEach(f => f.classList.remove("active"));
  const active = document.querySelector(.flag[data-lang="${lang}"]);
  if (active) active.classList.add("active");
}

// Clique na bandeira -> atualiza <select> e navega
flags.forEach(flag => {
  flag.addEventListener("click", () => {
    const lang = flag.dataset.lang;
    if (select) select.value = lang;
    goToLang(lang);
  });
});

// Mudança no <select> -> destaca bandeira e navega
if (select) {
  select.addEventListener("change", (e) => {
    const lang = e.target.value;
    updateActiveFlag(lang);
    goToLang(lang);
  });
}

// Estado inicial (URL ?lang=... ou valor do <select>)
const currentLang =
  new URLSearchParams(window.location.search).get("lang") ||
  (select ? select.value : "pt");
if (select) select.value = currentLang;   // mantém o select sincronizado
updateActiveFlag(currentLang);            // destaca a bandeira atual
          break;
      }
    });
  });
});
