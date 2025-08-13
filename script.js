        document.addEventListener('DOMContentLoaded', function() {
            // Set current year in footer
            document.getElementById('year').textContent = new Date().getFullYear();
            
            // Initialize particles.js
            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#3498db"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        }
                    },
                    "opacity": {
                        "value": 0.3,
                        "random": false,
                        "anim": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#3498db",
                        "opacity": 0.1,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 100,
                            "line_linked": {
                                "opacity": 0.3
                            }
                        },
                        "push": {
                            "particles_nb": 4
                        }
                    }
                },
                "retina_detect": true
            });
            
            // Theme toggle functionality
            const themeBtn = document.getElementById('themeBtn');
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
            
            // Check for saved theme preference or use system preference
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
                document.body.setAttribute('data-theme', 'dark');
                themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
            }
            
            // Theme toggle button click event
            themeBtn.addEventListener('click', function() {
                let theme;
                if (document.body.getAttribute('data-theme') === 'dark') {
                    document.body.removeAttribute('data-theme');
                    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
                    theme = 'light';
                } else {
                    document.body.setAttribute('data-theme', 'dark');
                    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
                    theme = 'dark';
                }
                localStorage.setItem('theme', theme);
            });
            
            // Print functionality
            const printBtn = document.getElementById('printBtn');
            printBtn.addEventListener('click', function() {
                window.print();
            });
            
            // Download CV functionality
            const downloadBtn = document.getElementById('downloadBtn');
            const footerDownload = document.getElementById('footerDownload');
            
            function downloadCV() {
                // Create a temporary link
                const link = document.createElement('a');
                
                // For a real implementation, this would be the path to your PDF
                // Since we don't have an actual PDF, we'll simulate download
                link.href = '#'; 
                link.download = 'Umar_Imran_CV.pdf';
                
                // Show a message
                alert('In a real implementation, this would download your PDF CV. For now, you can print this page as PDF.');
                
                // Trigger the download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            
            // Add event listeners to both download buttons
            downloadBtn.addEventListener('click', downloadCV);
            footerDownload.addEventListener('click', downloadCV);
            
            // Animation for section entries on scroll
            function animateSections() {
                const sections = document.querySelectorAll('section');
                const windowHeight = window.innerHeight;
                
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    const sectionPoint = 150;
                    
                    if (sectionTop < windowHeight - sectionPoint) {
                        section.style.animation = 'fadeInUp 0.8s ease forwards';
                    }
                });
            }
            
            // Initial check
            animateSections();
            
            // Check on scroll
            window.addEventListener('scroll', animateSections);
            
            // Add hover effect to experience items
            const expItems = document.querySelectorAll('.experience-item, .education-item');
            expItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    item.style.transform = 'translateY(-5px)';
                    item.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
                });
                
                item.addEventListener('mouseleave', () => {
                    item.style.transform = 'translateY(0)';
                    item.style.boxShadow = 'none';
                });
            });
            
            // Add skill progress animation
            const skillLevels = document.querySelectorAll('.progress-fill');
            skillLevels.forEach(level => {
                const width = level.getAttribute('data-level');
                level.style.width = width;
            });
        });