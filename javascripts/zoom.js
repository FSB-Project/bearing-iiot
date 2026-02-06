document.addEventListener("DOMContentLoaded", function () {
    const diagrams = document.querySelectorAll(".interactive-diagram");

    diagrams.forEach((container) => {
        const svg = container.querySelector("svg");
        if (!svg) return;

        // Configuration
        const scaleAmount = 2.0; // Zoom level

        // Apply base styles for the effect
        container.style.overflow = "hidden";
        container.style.position = "relative"; // Ensure positioning context

        svg.style.transition = "transform 0.1s ease-out";
        svg.style.transformOrigin = "center center";
        svg.style.cursor = "zoom-in";
        svg.style.display = "block"; // Remove extra spacing
        svg.style.width = "100%";
        svg.style.height = "100%";

        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();

            // Mouse position relative to the container
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate percentage position for transform-origin
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            // Apply zoom at the cursor position
            svg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
            svg.style.transform = `scale(${scaleAmount})`;
        });

        // Reset when leaving only if we want it to snap back.
        // Some users prefer it stays zoomed until they move away.
        // Here we snap back for a clean "loupe" feel.
        container.addEventListener("mouseleave", () => {
            svg.style.transformOrigin = "center center";
            svg.style.transform = "scale(1)";
        });
    });
});
