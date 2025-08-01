const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
 constructor() {
   this.reset();
 }
 reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.y -= this.speed;
        if (this.y < -10) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = "#6cc9c8";
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let particle of particles) {
        particle.update();
        particle.draw();
      }
      requestAnimationFrame(animate);
    }
    animate();
    // Redimensionar el canvas si cambia el tamaño de la ventana
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    
    /* Funcion para emviar email */
document.getElementById('emailBtn').addEventListener('click', function() {
  const subject = encodeURIComponent("Quiero mas información");
  const body = encodeURIComponent("Cuerpo del mensaje...");
  window.location.href = `mailto: danielrespaldo396@gmail.com?subject=${subject}&body=${body}`;
});

// animacion de texto //
class Typewriter {
constructor(element, words, options = {}) {
                this.element = element;
                this.words = words;
                this.currentWordIndex = 0;
                this.currentCharIndex = 0;
                this.isDeleting = false;
// Configuraciones
                this.typeSpeed = options.typeSpeed || 150;
                this.deleteSpeed = options.deleteSpeed || 100;
                this.pauseTime = options.pauseTime || 2000;
                this.deleteDelay = options.deleteDelay || 1000;
                
                this.start();
            }
            
            start() {
                this.type();
            }
            
            type() {
                const currentWord = this.words[this.currentWordIndex];
                
                if (this.isDeleting) {
                // Borrando caracteres
                    this.element.textContent = currentWord.substring(0, this.currentCharIndex - 1);
                    this.currentCharIndex--;
                    
                    if (this.currentCharIndex === 0) {
                        this.isDeleting = false;
                        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
                        setTimeout(() => this.type(), 200);
                        return;
                    }
                    
                    setTimeout(() => this.type(), this.deleteSpeed);
                } else {
                // Escribiendo caracteres
                    this.element.textContent = currentWord.substring(0, this.currentCharIndex + 1);
                    this.currentCharIndex++;
                    
                    if (this.currentCharIndex === currentWord.length) {
                      // Palabra completa, pausar y luego empezar a borrar
                        setTimeout(() => {
                            this.isDeleting = true;
                            this.type();
                        }, this.pauseTime);
                        return;
                    }
                    
                    setTimeout(() => this.type(), this.typeSpeed);
                }
            }
}
// Palabras para la animación
        const words = [
            'Full-stack',
            'de Python',
            'Móvil',
            'Web',
            'Front-End',
            'Back-End',
            'y diseñador Web',
            'de IA'
        ];
// Inicializar la animación cuando la página cargue
        document.addEventListener('DOMContentLoaded', () => {
            const typewriterElement = document.getElementById('typewriter');
            
            new Typewriter(typewriterElement, words, {
                typeSpeed: 40,      // Velocidad de escritura (ms por carácter)
                deleteSpeed: 40,     // Velocidad de borrado (ms por carácter)
                pauseTime: 900,     // Pausa después de escribir la palabra completa
                deleteDelay: 1000    // Retraso antes de empezar a borrar
            });
        });