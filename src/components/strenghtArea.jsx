import './strength.css';

const Strength = ({ level }) => {
  return (
    <p className={`strength ${level.toLowerCase()}`}>
      Your password strength is: <strong>{level}</strong>
    </p>
  );
};

export default Strength;

