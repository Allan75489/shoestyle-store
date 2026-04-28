// Animação de scroll para cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observar todos os cards
        document.querySelectorAll('.produto-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });

        // Smooth scroll para links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Efeito de partículas no hero
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'rgba(255,255,255,0.6)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';
            particle.style.animation = `floatParticle ${Math.random() * 3 + 2}s linear infinite`;
            
            document.querySelector('.hero').appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 5000);
        }

        // CSS para partículas
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0% {
                    transform: translateY(0) scale(0);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Criar partículas
        setInterval(createParticle, 300);

        // Efeito de hover nos cards com som (opcional)
        document.querySelectorAll('.produto-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-25px) scale(1.03)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
