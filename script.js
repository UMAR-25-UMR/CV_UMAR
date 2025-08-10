document.addEventListener('DOMContentLoaded', function() {
            // Set current year in footer
            document.getElementById('year').textContent = new Date().getFullYear();
            
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
        });