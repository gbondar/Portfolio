window.addEventListener("load", () => {
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 10); 
  
 
  
    
    const aboutSection = document.querySelector(".about-section");
    if (aboutSection) {
      aboutSection.classList.remove("show");
  
     
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          aboutSection.classList.add("show");
        }
      });
    }

    document.getElementById("mail-button").addEventListener("click", () => {
        const container = document.getElementById("mail-options");
      
        
        if (container.style.display === "flex") {
          container.style.display = "none";
          container.innerHTML = "";
          return;
        }
      
        
        container.style.display = "flex";
        container.innerHTML = `
          <button class="mail-option-btn" id="gmail-btn">Gmail</button>
          <button class="mail-option-btn" id="outlook-btn">Outlook</button>
          <button class="mail-option-btn" id="copy-btn">Copiar dirección de mail</button>
        `;
      
        // Gmail
        document.getElementById("gmail-btn").addEventListener("click", () => {
            if (isMobile()) {
              // Intenta abrir la app de Gmail
              window.location.href = "googlegmail://co?to=gonza.bondar@gmail.com";
              // Fallback a web luego de 1s si no se abre
              setTimeout(() => {
                window.open("https://mail.google.com/mail/?view=cm&to=gonza.bondar@gmail.com", "_blank");
              }, 1000);
            } else {
              window.open("https://mail.google.com/mail/?view=cm&to=gonza.bondar@gmail.com", "_blank");
            }
          });
          
          document.getElementById("outlook-btn").addEventListener("click", () => {
            if (isMobile()) {
              // Intenta abrir la app de Outlook
              window.location.href = "ms-outlook://compose?to=gonza.bondar@gmail.com";
              // Fallback a web
              setTimeout(() => {
                window.open("https://outlook.live.com/mail/0/deeplink/compose?to=gonza.bondar@gmail.com", "_blank");
              }, 1000);
            } else {
              window.open("https://outlook.live.com/mail/0/deeplink/compose?to=gonza.bondar@gmail.com", "_blank");
            }
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

        const mailBtn = document.getElementById("mail-button");
        const modal = document.getElementById("mail-modal");
        const closeModal = document.getElementById("close-modal");

        mailBtn.addEventListener("click", () => {
        modal.style.display = "flex";
        });

        // Cerrar el modal
        closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        });

        // Gmail
        document.getElementById("gmail-btn").addEventListener("click", () => {
        window.open("https://mail.google.com/mail/?view=cm&to=gonza.bondar@gmail.com", "_blank");
        });

        // Outlook
        document.getElementById("outlook-btn").addEventListener("click", () => {
        window.open("https://outlook.live.com/mail/0/deeplink/compose?to=gonza.bondar@gmail.com", "_blank");
        });

        // Copiar email
        document.getElementById("copy-btn").addEventListener("click", () => {
            const email = "gonza.bondar@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
              const msg = document.getElementById("copy-message");
              msg.style.opacity = "1";
              msg.textContent = "Dirección de mail copiada al portapapeles";
              setTimeout(() => {
                msg.style.opacity = "0";
              }, 1500);
            });
          });
          

        // Cerrar modal al hacer click fuera
        window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
        });


        document.addEventListener("DOMContentLoaded", () => {
          const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .typewriter');

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
              }
            });
          }, {
            threshold: 0.2 
          });

          animatedElements.forEach(el => observer.observe(el));
        });


      







  });


  