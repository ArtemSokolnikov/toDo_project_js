import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import style from '../css_modules/task.module.css';
import CheckIcon from '@mui/icons-material/Check';

const Task = ({ index, content, deleteTask }) => {

    const handlieClickRemove = () => {
        deleteTask(index);
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <div className={style.box}>
                <div className={style.boxContent}>
                    <div className={style.check}><CheckIcon /></div>
                    <span><h4 className={style.contentTitle}>{content}</h4></span>
                </div>
                <div className={style.btnRemoveEdit}>
                    <button className={style.btnItems} onClick={handlieClickRemove}><DeleteIcon sx={{ fontSize: 22 }} /></button>
                </div>
            </div>
        </div>
    )
}

export default Task