function loadBase() {
    fetch('base.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');

            // Insert navbar
            document.getElementById('navbar-placeholder').innerHTML = doc.querySelector('nav').outerHTML;

            // Insert footer
            document.getElementById('footer-placeholder').innerHTML = doc.querySelector('footer').outerHTML;

            // Append common styles and scripts
            document.head.appendChild(doc.querySelector('link[rel="stylesheet"]'));
            const scripts = doc.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.src = script.src;
                document.body.appendChild(newScript);
            });
        })
        .catch(error => console.error('Error loading base content:', error));
}

document.addEventListener('DOMContentLoaded', loadBase);
