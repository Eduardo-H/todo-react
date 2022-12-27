import { Trash } from 'phosphor-react';

import styles from './styles.module.css';

interface TaskProps {
  id: string;
  title: string;
  completed?: boolean;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ id, title, completed = false, onToggleTask, onDeleteTask }: TaskProps) {
  function handleToggleTask() {
    onToggleTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.container}>
      <label>
        <input type="checkbox" onClick={handleToggleTask} />
        <span></span>
      </label>

      <p className={completed ? styles.taskCompleted : ''}>
        { title }
      </p>

      <button type="button" onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}