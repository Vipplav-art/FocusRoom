// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Select DOM elements
const container = document.querySelector("#scroll-container");
const panels = gsap.utils.toArray(".panel");
const navLinks = gsap.utils.toArray(".nav-link");

// Calculate total scroll distance based on the actual width of the dynamic container
// We subtract window.innerWidth so it stops exactly at the right edge of the last panel
function getScrollAmount() {
    return container.scrollWidth - window.innerWidth;
}

// 1. Create the main Horizontal Scroll Tween
const scrollTween = gsap.to(container, {
    x: () => -getScrollAmount(),
    ease: "none",
    scrollTrigger: {
        trigger: "#horizontal",
        pin: true,
        scrub: 1, // 1 second lag for smooth studio feel
        end: () => "+=" + getScrollAmount(),
        invalidateOnRefresh: true // Recalculates on window resize
    }
});

// 2. Setup Image Parallax inside the horizontal scroll
// We trigger this based on the containerAnimation to link it to the horizontal scroll timeline
gsap.utils.toArray(".parallax-wrapper").forEach(wrapper => {
    const img = wrapper.querySelector(".parallax-img");
    
    // Get speed from data attribute, default to 20 if missing
    const speed = img.getAttribute("data-speed") || 20;

    gsap.to(img, {
        xPercent: speed,
        ease: "none",
        scrollTrigger: {
            trigger: wrapper,
            containerAnimation: scrollTween, // Binds this trigger to the horizontal movement
            start: "left right", // When the wrapper's left edge hits the viewport's right edge
            end: "right left",   // When the wrapper's right edge hits the viewport's left edge
            scrub: true
        }
    });
});

// 3. Navigation Click Handlers (ScrollSpy & Smooth Scroll)
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Remove active class from all, add to clicked
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");

        const index = parseInt(link.getAttribute("data-index"));
        
        // Calculate position. 
        // For variable width panels, we need to sum the offsetWidth of all preceding panels
        let targetX = 0;
        for(let i = 0; i < index; i++) {
            targetX += panels[i].offsetWidth;
        }

        // Cap targetX so we don't scroll past the end of the container
        targetX = Math.min(targetX, getScrollAmount());

        // Animate the window scroll position to match the ScrollTrigger progression
        gsap.to(window, {
            duration: 1.5,
            scrollTo: scrollTween.scrollTrigger.start + targetX,
            ease: "power3.inOut"
        });
    });
});

// Optional: Active Nav state updates based on scroll position
panels.forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        containerAnimation: scrollTween,
        start: "left center",
        end: "right center",
        onToggle: self => {
            if (self.isActive && navLinks[i]) {
                navLinks.forEach(nav => nav.classList.remove("active"));
                navLinks[i].classList.add("active");
            }
        }
    });
});
