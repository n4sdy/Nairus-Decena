function SkillList({ src, skill }) {
  return (
    <span>
        <img src={src} alt="Chekcmark icon" />
        <p>{skill}</p>
    </span>
  );
}

export default SkillList;
