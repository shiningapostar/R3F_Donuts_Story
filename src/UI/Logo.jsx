import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.png' alt='bubble coffe' width={160} height={30} />
    </Link>
  );
};

export default Logo;