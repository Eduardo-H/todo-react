import { FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuid } from 'uuid';

import { Header } from './components/Header';
import { EmptyTasks } from './components/EmptyTasks';

import styles from './app.module.css';
import { Task } from './components/Task';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export function App() {
  const [titleNewTask, setTitleNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    if (!titleNewTask.trim()) {
      return window.alert('Inform a title to create the task.');
    }

    const newTask = {
      id: uuid(),
      title: titleNewTask,
      completed: false
    }

    setTasks([...tasks, newTask]);
    setTitleNewTask('');
  }

  function handleToggleTask(taskId: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function handleDeleteTask(taskId: string) {
    const taskListWithoutDeletedOne = tasks.filter(task => task.id !== taskId);

    setTasks(taskListWithoutDeletedOne);
  }

  return (
    <>
      <Header />
      
      <main className={styles.content}>
        <form onSubmit={handleCreateTask}>
          <input 
            type="text" 
            placeholder="Add a new task" 
            onChange={(e) => setTitleNewTask(e.target.value)}
            value={titleNewTask}
          />

          <button type="submit">
            Create <PlusCircle size={18} weight="bold" />
          </button>
        </form>

        <div className={styles.tasks}>
          <header>
            <div>
              <strong>Tasks created</strong>
              <span>{tasks.length}</span>
            </div>

            <div>
              <strong>Completed</strong>
              <span>
                { 
                  tasks.length > 0 
                  ? `${tasks.filter(item => item.completed).length} of ${tasks.length}` 
                  : '0' 
                }
              </span>
            </div>
          </header>

          {
            tasks.length > 0
            ? (
              <div className={styles.tasksList}>
                {tasks.map((task) => (
                  <Task 
                    key={task.id}
                    id={task.id} 
                    title={task.title}
                    completed={task.completed}
                    onToggleTask={handleToggleTask}
                    onDeleteTask={handleDeleteTask}
                  />
                ))}
              </div>
            )
            : <EmptyTasks />
          }
        </div>
      </main>
    </>
  );
}
