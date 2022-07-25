const isInViewPort = (entry, offset = 0) => {
    const rect = entry.boundingClientRect;
    return rect.top - 1 <= 0 + offset && rect.bottom >= 0 + offset;
};

const sections = document.querySelectorAll('[data-scrollspy]');