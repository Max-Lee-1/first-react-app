// Intersection Observer API for reading section ID
export function observeSections(callback) {
  const observer = new IntersectionObserver((entries) => {
    const visibleSection = entries.find(
      (entry) => entry.isIntersecting
    )?.target;

    if (visibleSection) {
      callback(visibleSection.id);
    }
  });

  const sections = document.querySelectorAll("[data-section]");

  sections.forEach((section) => {
    observer.observe(section);
  });

  return observer;
}

export function unobserveSections(observer) {
  const sections = document.querySelectorAll("[data-section]");

  sections.forEach((section) => {
    observer.unobserve(section);
  });
}
