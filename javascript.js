window.addEventListener("load", () => {
    const el = document.querySelector(".typewriter");
    setTimeout(() => {
      el.classList.add("done");
    }, 2000); // tiempo total de typing + caret (ajustable)
  });