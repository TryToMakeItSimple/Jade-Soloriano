import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &Copy; 2024 Jade Soloriano. <br/>
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
