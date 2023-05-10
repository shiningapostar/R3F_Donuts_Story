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
    
    <h2>{title}</h2>
    <br />
    <p>{subtitle}</p>
    <br />
    <p>{subtitle2}</p>
    <br />
    <p>{subtitle3}</p>
</div>
</div>
</section>
    );
};
export default About;