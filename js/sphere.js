document.addEventListener('DOMContentLoaded', () => {
    const sphere = document.querySelector('.logo-sphere');
    if (sphere) {
        const logos = sphere.querySelectorAll('.logo-item');
        const logoCount = logos.length;
        const radius = 140; // Sphere radius in pixels

        logos.forEach((logo, i) => {
            // Using the golden angle (Fibonacci sphere) for even distribution
            const y = 1 - (i / (logoCount - 1)) * 2; // y goes from 1 to -1
            const radiusAtY = Math.sqrt(1 - y * y); // radius at y
            const theta = (Math.PI * (3.0 - Math.sqrt(5.0))) * i; // golden angle increment

            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;

            logo.style.transform = `translateX(${x * radius}px) translateY(${y * radius}px) translateZ(${z * radius}px)`;
        });
    }
});
