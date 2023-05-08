
import styles from './Product.module.scss';
import Image from 'next/image';
import Stars from '@/UI/Stars';

const Produt = ({ product ,title, desc, stars, reviews, price }) => {
    return (
        <div className={styles.product}>
       <Image
        src={`/product${product}.png`}
        alt={`produto ${product}`}
        width={300}
        height={320}
      />
         <h2>{title}</h2>
         <h3>{desc}</h3>
         <Stars stars={stars} reviews={reviews} />
        <h4>R${price}</h4>
        </div>
    );
};

export default Produt;