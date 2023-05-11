import LocalComponent from './Local';
import styles from './About.module.scss';
import { about } from '@/constants';
import { motion } from 'framer-motion';

const About = () => {
    const {title, subtitle, subtitle2, subtitle3} = about;

 const motionProps = (initialX, finalX) => ({
    initial: { opacity: 0, x: initialX },
    whileInView: { opacity: 1, x: finalX },
    viewport: { once: true },
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      delay: 0.1,
    },
  });


    return (
<section id='about' 
className={styles.about}>

<div className={styles.container}>
<LocalComponent  />   
<motion.div {...motionProps(-100, 0)} className={styles.content}>
    <h2 >{title}</h2>
    <br />
    <p className='dark-bg'>{subtitle}</p>
    <br />
    <p className='dark-bg'>{subtitle2}</p>
    <br />
    <p className='dark-bg'>{subtitle3}</p>
    </motion.div>
</div>
</section>
    );
};
export default About;