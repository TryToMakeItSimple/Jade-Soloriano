import styles from './HeroStyles.module.css';
import heroImg from '../../assets/mypicture2.png';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Resume-Jade Soloriano.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
     <img className={styles.hero}
     src={heroImg}
      alt="Profile picture of Jade Soloriano"
     />
     <img className={styles.colorMode}
      src={themeIcon}
       alt="Colo mode icon" 
       onClick={toggleTheme}/>
       
    </div>
    <div className={styles.info}>
      <h1>Jade 
        <br />
        Soloriano</h1>
        <h2>Junior Software Developer</h2>
        <span>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>  
        <p className={styles.description}>
          Passionate about developing efficient and user-friendly applications that make a difference. 
          Driven to create seamless digital experiences and continuously improve my skills to bring ideas to life.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
    </div>
  </section>;
}

export default Hero
