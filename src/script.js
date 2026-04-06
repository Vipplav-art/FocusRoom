gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const container = document.querySelector("#scroll-container");
const originalPanels = gsap.utils.toArray(".panel");
const navLinks = gsap.utils.toArray(".nav-link");

container.innerHTML += container.innerHTML;
const allPanels = gsap.utils.toArray(".panel");
const totalOriginalWidth = container.offsetWidth / 2;

let scrollTween = gsap.to(allPanels, {
    xPercent: -100 * originalPanels.length,
    ease: "none",
    scrollTrigger: {
        trigger: "#horizontal",
        pin: true,
        scrub: 0,
        end: () => "+=" + totalOriginalWidth,
        onUpdate: (self) => {
            if (self.progress === 1) {
                self.scroll(self.start + 1);
            } else if (self.progress === 0 && self.direction === -1) {
                self.scroll(self.end - 1);
            }

            const currentIndex = Math.floor(self.progress * originalPanels.length);
            navLinks.forEach((link, i) => {
                if (i === currentIndex) link.classList.add("active");
                else link.classList.remove("active");
            });
        }
    }
});

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const index = parseInt(link.getAttribute("data-index"));
        const sectionScrollPos = scrollTween.scrollTrigger.start + 
            (index / originalPanels.length) * totalOriginalWidth;

        gsap.to(window, {
            duration: 1,
            scrollTo: sectionScrollPos,
            ease: "power2.inOut"
        });
    });
});
