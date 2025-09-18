// Optimized animation utilities to reduce bundle size
export const fadeInUp = {
  from: { opacity: 0, y: 30 },
  to: { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
};

export const staggerChildren = (delay: number = 0.2) => ({
  stagger: delay,
  ease: 'power2.out'
});

export const hoverScale = {
  scale: 1.05,
  duration: 0.3,
  ease: 'power2.out'
};

export const neonGlow = {
  boxShadow: '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)',
  duration: 0.3
};
