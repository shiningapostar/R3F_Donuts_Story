import Image from 'next/image';
import styles from './Details.module.scss';


const Details = () => {
    return <section className={styles.details}>
        <div className={styles.stuffed}>
  <h2>Experimente os deliciosos Donuts Recheados!</h2>
  <div className={styles.types}>
      </div>
      </div>
 <Image  src='/donuts.png' alt='donuts' width={640} height={225} />
<div className={styles['card-wrapper']}>
    <div className={styles.card}>
   <h2>MR. Donuts</h2>
   <div className={styles.info}>
<h3>Endereço</h3>
<h4>Rua da fantasia, nº 60 / Mauá - SP</h4>
   </div>
<div className={styles.info}>
<h3>Funcionamento</h3>
<h4>
    <span>Seg a Sex: 09:00 às 18:00</span>
    <span>Sábados: 09:00 às 14:00</span>
</h4>
   </div>


    </div>

</div>

    </section>;
}
export default Details;