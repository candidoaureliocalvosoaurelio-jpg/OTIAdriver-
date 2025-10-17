// Função que troca o idioma ao clicar na bandeira
document.addEventListener("DOMContentLoaded", function () {
  const flags = document.querySelectorAll(".flags img");
  const langSelect = document.getElementById("lang-switch");

  // Quando o usuário clicar em uma bandeira
  flags.forEach(flag => {
    flag.addEventListener("click", () => {
      const lang = flag.getAttribute("title").toLowerCase();
      switch (lang) {
        case "português":
          langSelect.value = "pt";
          window.location.href = "/index.html";
          break;
        case "english":
          langSelect.value = "en";
          window.location.href = "/contact.html";
          break;
        case "español":
          langSelect.value = "es";
          window.location.href = "/contacto.html";
          break;
        case "中文":
          langSelect.value = "zh";
          window.location.href = "/contato.html";
          break;
        default:
          break;
      }
    });
  });
});
