import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';

const AnimatedCard = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Trigger animation when the component mounts
    controls.start({ left: '100vw' });
  }, [controls]);

  return (
    <motion.div
      className="card"
      initial={{ left: '-100vw' }}
      animate={controls}
      transition={{ duration: 2, ease: 'easeOut' }}
    />
  );
};

export default AnimatedCard;
