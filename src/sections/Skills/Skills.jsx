import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/Themecontext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='HTML'/>
          <SkillList src={checkMarkIcon} skill='CSS'/>
          <SkillList src={checkMarkIcon} skill='C#'/>
          <SkillList src={checkMarkIcon} skill='JAVASCRIPT'/>
          <SkillList src={checkMarkIcon} skill='PYTHON'/>
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='MYSQL'/>
          <SkillList src={checkMarkIcon} skill='PHP'/>
          <SkillList src={checkMarkIcon} skill='MONGO DB'/>
          <SkillList src={checkMarkIcon} skill='INKSCAPE'/>
          <SkillList src={checkMarkIcon} skill='CRUD'/>
        </div>
        <hr />
    </section>
  );
}

export default Skills;