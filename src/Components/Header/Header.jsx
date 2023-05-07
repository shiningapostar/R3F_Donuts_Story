import DonutComponent from './Donuts';
import styles from './Header.module.scss';
import { header } from '@/constants';

const Header = () => {
 const {title, subtitle} = header;

    return ( 
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.content}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <br/>
            <a href='#social' className='btn btn-primary'>
            Fale Conosco
        </a>
        </div>
        <div>
         <DonutComponent />
        </div>
        </div>
    </header>
    );
};

export default Header;