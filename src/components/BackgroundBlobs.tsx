import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BackgroundBlobs: React.FC = () => {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob1 = blob1Ref.current;
    const blob2 = blob2Ref.current;
    const blob3 = blob3Ref.current;

    if (!blob1 || !blob2 || !blob3) return;

    // Animate blobs with different speeds and directions
    gsap.to(blob1, {
      x: 100,
      y: -50,
      rotation: 360,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to(blob2, {
      x: -80,
      y: 100,
      rotation: -360,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to(blob3, {
      x: 150,
      y: 80,
      rotation: 180,
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        ref={blob1Ref}
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl parallax-slow"
      />
      <div
        ref={blob2Ref}
        className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-full blur-3xl parallax-fast"
      />
      <div
        ref={blob3Ref}
        className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 rounded-full blur-3xl parallax-slow"
      />
    </div>
  );
};

export default BackgroundBlobs;
