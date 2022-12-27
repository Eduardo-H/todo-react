import rocketSvg from '../../assets/rocket.svg';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.container}>
      <img src={rocketSvg} alt="" />
      <strong>
        <span>to</span>
        <span>do</span>
      </strong>
    </header>
  );
}