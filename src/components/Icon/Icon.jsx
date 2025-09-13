import Sprite from '../../assets/sprite.svg';

const Icon = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use href={`${Sprite}#${name}`} />
    </svg>
  );
};

export default Icon;
