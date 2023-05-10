import styles from './Reviews.module.scss';
import Stars from '@/UI/Stars';
import { useEffect, useState } from 'react';
import Image from 'next/image';


const reviews = [
    {
      avatar: '/avatar1.png',
      name: 'Sonia Pereira',
      role: 'Programadora',
      stars: 5,
      comment:
        'Eu simplesmente adorei daqui! O ambiente é acolhedor e os funcionários são super atenciosos.',
    },
    {
      avatar: '/avatar2.png',
      name: 'João Pereira',
      role: 'Estudante',
      stars: 5,
      comment:
        'Amei os donuts, pedirei sempre para minha mãe comprar. ',
    },
    {
      avatar: '/avatar3.png',
      name: 'Mario Silva',
      role: 'Engenheiro',
      stars: 4,
      comment:
        'Os donuts são maravilhosos, mas acho que poderia ter mais opções de acompanhamentos, como refrigerante.',
    },
  ];

const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const nextReview = () =>
      setCurrentReview(
        currentReview === reviews.length - 1 ? 0 : currentReview + 1
      );
    const previousReview = () =>
      setCurrentReview(
        currentReview === 0 ? reviews.length - 1 : currentReview - 1
      );
  
    useEffect(() => {
      const interval = setInterval(nextReview, 5000);
      return () => clearInterval(interval);
    }, [currentReview]);
  
    const { avatar, name, role, stars, comment } = reviews[currentReview];


    return (
        <section id='reviews' className={styles.reviews}>
        <Image
          className={styles.image}
          src='/manyDonuts.png'
          alt='variedade de donuts'
          width={425}
          height={250}
          />
          <h2>O que falam da gente?</h2>
      <div className={styles.review}>
        <button className={styles.previous} onClick={previousReview}>
          &larr;
        </button>
        <Image
          className={styles.avatar}
          src={avatar}
          alt='avatar'
          width={120}
          height={120}
        />
        <h3>{name}</h3>
        <h4>{role}</h4>
        <Stars stars={stars} />
        <p>{comment}</p>
        <button className={styles.next} onClick={nextReview}>
          &rarr;
        </button>
      </div>
    </section>
    )
}
export default Reviews;