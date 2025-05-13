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

    document.getElementById("mail-button").addEventListener("click", () => {
        const container = document.getElementById("mail-options");
      
        // Si ya están visibles, ocultamos
        if (container.style.display === "flex") {
          container.style.display = "none";
          container.innerHTML = "";
          return;
        }
      
        // Si no, los mostramos
        container.style.display = "flex";
        container.innerHTML = `
          <button class="mail-option-btn" id="gmail-btn">Gmail</button>
          <button class="mail-option-btn" id="outlook-btn">Outlook</button>
          <button class="mail-option-btn" id="copy-btn">Copiar dirección de mail</button>
        `;
      
        // Gmail
        document.getElementById("gmail-btn").addEventListener("click", () => {
          window.open("https://mail.google.com/mail/?view=cm&to=gonza.bondar@gmail.com", "_blank");
        });
      
        // Outlook
        document.getElementById("outlook-btn").addEventListener("click", () => {
          window.open("https://outlook.live.com/mail/0/deeplink/compose?to=gonza.bondar@gmail.com", "_blank");
        });
      
        // Copiar al portapapeles
        document.getElementById("copy-btn").addEventListener("click", () => {
          navigator.clipboard.writeText("gonza.bondar@gmail.com").then(() => {
            // Mostrar mensajito
            const msg = document.createElement("div");
            msg.id = "copy-message";
            msg.textContent = "Dirección de mail copiada al portapapeles";
            container.appendChild(msg);
      
            // Eliminar luego de 3 segundos
            setTimeout(() => {
              if (msg) msg.remove();
            }, 3000);
          });
        });
      });
      







  });


  