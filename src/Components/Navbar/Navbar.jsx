import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";

const Navbar = () => {
    const renderLinks = navLinks.map((link, i) => (
        <li key={i}> 
        <a href={link.url}>{link.name}</a>
        </li>
    ));
    
    return (
<section className={styles.navbar}>
<div>
    <Link href="/">
      <Image src='/logo.png' alt="Donuts Story" width={160} height={30}/>
    </Link>
</div>
<nav>
    <ul className={styles.links}>{renderLinks}</ul>
</nav>
</section>
    );
};
export default Navbar;