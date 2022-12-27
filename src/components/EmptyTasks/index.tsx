import { Clipboard } from 'phosphor-react';

import styles from './styles.module.css';

export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <Clipboard color="#333333" size={56} />

      <div>
        <p>You still have no tasks created</p>
        <p>Create and organize your to-do's</p>
      </div>
    </div>
  );
}