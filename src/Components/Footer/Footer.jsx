import Logo from '@/UI/Logo';
import SocialLinks from '@/UI/SocialLinks';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer id='footer' className={styles.footer}>
        <div className={styles.content}>
         <div className={styles.column1}>
        <h2>
            <Logo />
        </h2>
<h3 className='p'>
Você não pode comprar Felicidade, mas você pode comprar DONUTS. E isso é a mesma coisa!
</h3>
<SocialLinks />
         </div>
         <div className={styles.column2}>
            <h2 className='p'>Faça-nos uma Visita</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116666.06549520945!2d-46.50576120273438!3d-23.9669972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce039e56ca80dd%3A0x865646f47205fc92!2sMister%20donuts!5e0!3m2!1spt-BR!2sbr!4v1683751347705!5m2!1spt-BR!2sbr" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
         <div className={styles.column3}>
            <h2 className='p'>Funcionamento</h2>
            <ul>
            <li>Seg a Sex: 09:00 às 18:00</li>
            <li>Sábados: 09:00 às 14:00</li>
            <li>(11) 99999-9999</li>
            <li>contato@mrdonuts.com.br</li>
            </ul>
         </div>
        </div>
        <span>Mr.Donuts - Todos os direitos reservados</span>
        </footer>
    );
};

export default Footer;