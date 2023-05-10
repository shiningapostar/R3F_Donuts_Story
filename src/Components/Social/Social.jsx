import styles from './Social.module.scss';
import SocialLinks from '@/UI/SocialLinks';
import Image from 'next/image';

const Social = () => {
    return (
        <section id='social' className={styles.social}>
          <div className={styles.content}>
          <h2>😍Descubra seu donut favorito!😍</h2>
          <p className='dark-bg'>
          Cada donut é preparado com ingredientes selecionados e muito carinho,
          para que você possa saborear cada momento. Venha nos visitar e
          desfrute de um delicioso donut enquanto faz uma pausa.
          </p>
          <SocialLinks />
      </div>
      <Image
        className={styles.image}
        src='/social2.png'
        alt='escolha um donat'
        width={380}
        height={540}
      />
</section>
    )
}
export default Social;