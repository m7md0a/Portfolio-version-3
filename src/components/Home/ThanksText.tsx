'use client'
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const ThanksText = () => {
  const text = `If you want me to help you with something, or you want to ask me a
  question, or you have a job opportunity that you can help me with,
  I will be happy to contact you anyway Thank you !`
  const pVariants = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          staggerChildren: 0.03, 
        }
      }
  }
  const itemVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1
      }
  }

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.p ref={ref} variants={pVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="md:w-3/5 text-xl text-gray-700">
            {
                text.split('').map(e => (
                    <motion.span variants={itemVariants} key={e}>{e}</motion.span>
                ))
            }
        </motion.p>
      )}
    </InView>
  );
};

export default ThanksText;
