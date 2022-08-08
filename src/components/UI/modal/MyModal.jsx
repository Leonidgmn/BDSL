import React from 'react';
import classes from './myModal.module.css'
const MyModal = ({children, visible, setVisible}) => {
    const classVisible=[classes.myModal];
    if (visible){
        classVisible.push(classes.active)
    }
    return (
        <div className={classVisible.join(' ')} onClick={()=>setVisible(false)}>
            <div className={classes.modalContent} onClick={(event => event.stopPropagation())}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;