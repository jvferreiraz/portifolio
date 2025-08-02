// Código para: src/components/AnimatedSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children, id }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} ref={ref} className={`animated-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </section>
  );
}
export default AnimatedSection;