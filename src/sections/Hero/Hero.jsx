import styles from './HeroStyles.module.css';
import heroImg from '../../assets/nasd.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import facebookLight from '../../assets/facebook-light.svg';
import facebookDark from '../../assets/facebook-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import CV from '../../assets/CV (2).pdf';
import { useTheme } from '../../common/Themecontext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const facebookIcon = theme === 'light' ? facebookLight : facebookDark;
    const instagramIcon = theme === 'light' ? instagramLight : instagramDark;

  return (
  <section id ="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
            className={styles.hero} 
            src={heroImg} 
            alt="profile picture of Nas Dy" 
        />
        <img 
            className={styles.colorMode}
            src={themeIcon} 
            alt="Color mode icon"
            onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1>
            Nairus <br />Decena
        </h1>
        <h2>Computer Science Student</h2>
        <span>
            <a href="https://github.com/n4sdy/Nairus-Decena" target="_blank">
            <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.facebook.com/nairus.decena.7/" target="_blank">
            <img src={facebookIcon} alt="Facebook icon" />
            </a>
            <a href="https://www.instagram.com/nas.dyyy/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
            </a>
        </span>
        <p className={styles.description}>
            A Third Year student dedicated about coding and problem-solving.
            Exploring new technologies and working on projects that challenge my skills.
        </p>
        <a href={CV} download>
            <button className="hover" >Resume</button>
        </a>
    </div>
  </section>
  );
};

export default Hero;