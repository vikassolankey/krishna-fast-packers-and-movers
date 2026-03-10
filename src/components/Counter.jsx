import React, { useEffect, useRef } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

export default function Counter({
  value,
  direction = 'up',
  duration = 2,
  suffix = '',
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(direction === 'up' ? 0 : value, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
