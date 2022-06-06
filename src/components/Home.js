import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import style from '../css_modules/home.module.css';
import { HomeContainer } from "../styles/HomeStyles";
import Task from './Task';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setcurrentTask] = useState('');
    const currentIndex = localStorage.getItem('index');
    const prevTasks = localStorage.getItem('tasksArr');

    const handleCreateTask = (e) => {
        setcurrentTask(e.target.value);
    }

    const removeTask = (index) => {
        setTasks(prev => prev.filter((t, i) => i !== index));
        const newPrevTasks = prevTasks.split(',');
        newPrevTasks.splice(index, 1);
        localStorage.setItem('tasksArr', newPrevTasks);
        if (tasks.length > 0) {
            localStorage.setItem('index', +`${currentIndex}` - 1);
        }
    }

    const handlieClickAddTask = () => {
        if (currentTask) {
            setTasks(prev => {
                const tasks = [...prev];
                tasks[currentIndex] = currentTask;
                localStorage.setItem('index', +`${currentIndex}` + 1);
                localStorage.setItem('tasksArr', [...prev, [`${currentTask}`]]);
                return tasks;
            })
        } else {
            alert('Please, describe the task')
        }
        setTimeout(setcurrentTask(''), 300);
    }

    useEffect(() => {
        if (prevTasks.length > 0) {
            const newPrevTasks = prevTasks.split(',');
            setTasks([...newPrevTasks]);
        }
    }, [])

    return (
        <HomeContainer>
            <div className="animate__animated animate__pulse">
                <div className={style.mainItem} >
                    <h3 className={style.headerTitle}> To do list</h3>
                    {tasks.map((item, index) => (
                        <Task
                            key={index + 1}
                            index={index}
                            content={item}
                            deleteTask={removeTask}
                            setTasks={setTasks}
                            currentTask={currentTask}
                        />
                    ))}
                    <div className={style.header}>
                        <TextField className="animate__animated animate__pulse" onChange={handleCreateTask} id="outlined-basic" label="New task name" variant="outlined" value={currentTask || ''} sx={{ bgcolor: 'white' }} />
                        <div className={style.mainBtn} ><Button className="animate__animated animate__pulse" onClick={handlieClickAddTask} variant="outlined" sx={{ bgcolor: 'white' }}>Add</Button></div>
                    </div>
                </div>
            </div>
        </HomeContainer>
    )
}

export default Home