window.addEventListener("load", () => {
    // 🔝 Siempre arrancar arriba de todo
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 10); // pequeño delay para asegurar efecto
  
    // ⌨️ Efecto de escritura: eliminar cursor luego de escribir
    const el = document.querySelector(".typewriter");
    if (el) {
      setTimeout(() => {
        el.classList.add("done");
      }, 2000); // coincide con tu animación
    }
  
    // 👻 Ocultar la sección al inicio
    const aboutSection = document.querySelector(".about-section");
    if (aboutSection) {
      aboutSection.classList.remove("show");
  
      // 📏 Mostrar cuando scrolleás más de 500px
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          aboutSection.classList.add("show");
        }
      });
    }
  });
  