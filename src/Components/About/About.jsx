import LocalComponent from './Local';
import styles from './About.module.scss';
import { about } from '@/constants';

const About = () => {
    const {title, subtitle, subtitle2, subtitle3} = about;

    return (
<section id='about' 
className={styles.about}>

<div className={styles.container}>
<LocalComponent  /> 
<div className={styles.content}>
    
    <h2 >{title}</h2>
    <br />
    <p className='dark-bg'>{subtitle}</p>
    <br />
    <p className='dark-bg'>{subtitle2}</p>
    <br />
    <p className='dark-bg'>{subtitle3}</p>
</div>
</div>
</section>
    );
};
export default About;