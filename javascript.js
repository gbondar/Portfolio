window.addEventListener("load", () => {
  const el = document.querySelector(".typewriter");
  const typingDuration = 1400; // igual al timing de .typewriter
  const delay = 600; // tiempo desde que carga

  setTimeout(() => {
    el.classList.add("done");
  }, typingDuration + delay);
});

