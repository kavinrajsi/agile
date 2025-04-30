export const setupScrollAnimation = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const fadeElements = section.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((el) => observer.observe(el));

  return () => {
    fadeElements.forEach((el) => observer.unobserve(el));
  };
};