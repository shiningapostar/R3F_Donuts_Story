import Product from './Product';
import styles from './Menu.module.scss';


const Menu = () => {
    return (
 <section id='menu' className={styles.menu}>
   <Product
    product='1'
    title='Tradicional'
    desc='Glaceado com açúcar'
    stars='4'
    reviews='16'
    price='10,90'
   />
  <Product
    product='20'
    title='Com cobertura'
    desc='Coberturas diversas'
    stars='5'
    reviews='16'
    price='15,00'
   />
  <Product
    product='3'
    title='Recheado'
    desc='Recheios diversos'
    stars='5'
    reviews='16'
    price='16,50'
   />
  <Product
    product='4'
    title='Salgado'
    desc='Sabores queijo e bacon'
    stars='3'
    reviews='16'
    price='13,90'
   />
   </section>  

    );
};
export default Menu;