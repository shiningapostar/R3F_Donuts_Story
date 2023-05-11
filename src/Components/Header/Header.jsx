import DonutComponent from './Donuts';
import styles from './Header.module.scss';
import { header } from '@/constants';
import { motion } from 'framer-motion';


const Header = () => {
 const {title, subtitle} = header;

 const motionProps = (initialX, finalX) => ({
    initial: { opacity: 0, x: initialX },
    whileInView: { opacity: 1, x: finalX },
    viewport: { once: true },
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  });


    return ( 
    <header className={styles.header}>
        <div className={styles.container}>
            <motion.div {...motionProps(-100, 0)} className={styles.content}>
            <h1>{title}</h1>
            <p className='dark-bg'>{subtitle}</p>
            <br/>
            <a href='#footer' className='btn btn-primary'>
            Fale Conosco
        </a>
        </motion.div>
        <motion.div {...motionProps(100, 0)}>
         <DonutComponent />
         </motion.div>
        </div>
    </header>
    );
};

export default Header;