'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./styles/global.css";
import styles from "./styles/Navigation.module.css";
import logo from './assets/logo.png';
import { Raleway } from 'next/font/google'; 

const raleway = Raleway({
  weight: ['700', '500'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic']
});



export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;
  return (
    <html lang="en">
      <body className={raleway.className}>
        <nav className={styles.nav}>
          <Image src={logo} alt="" width={175} height={54}/>
          <div className={styles.links}>
            <Link 
              href="/" 
              className={isActive('/') ? styles.activeLink : styles.link}
              style={isActive('/') ? { color: 'rgba(139, 84, 247, 1)' } : {}}
            >
              Главная
            </Link>
            <Link 
              href="/services" 
              className={isActive('/services') ? styles.activeLink : styles.link}
              style={isActive('/services') ? { color: 'rgba(139, 84, 247, 1)' } : {}}
            >
              Услуги
            </Link>
            <Link 
              href="/about" 
              className={isActive('/about') ? styles.activeLink : styles.link}
              style={isActive('/about') ? { color: 'rgba(139, 84, 247, 1)' } : {}}
            >
              Обо мне
            </Link>
            <Link 
              href="/FAQ" 
              className={isActive('/FAQ') ? styles.activeLink : styles.link}
              style={isActive('/FAQ') ? { color: 'rgba(139, 84, 247, 1)' } : {}}
            >
              Вопросы и ответы
            </Link>
          </div>
          <a href="#form" className={styles.register}>
            <p className={raleway.className}>Записаться</p>
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
