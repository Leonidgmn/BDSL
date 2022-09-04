import React from 'react';
import MyModal from "../UI/modal/MyModal";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const TeamModal = ({modal, newTeam, setModal, setTeams, teams}) => {
    return (
        <MyModal visible={modal} setVisible={setModal}>
            <form onSubmit={newTeam}>
                <MyInput type="text"
                         placeholder="Імена викладачів"
                         maxLength='40'
                         value={teams.name}
                         onChange={e => setTeams({...teams, name: e.target.value})}
                         required/>
                <MyInput type="text"
                         placeholder="який танець викладають"
                         maxLength='20'
                         value={teams.dance}
                         onChange={e => setTeams({...teams, dance: e.target.value})}
                         required/>

                <MyInput style={{paddingBottom: '1.5rem'}}
                         placeholder="опис танцю"
                         type="text"
                         value={teams.description}
                         onChange={e => setTeams({...teams, description: e.target.value})}
                         required/>
                <MyInput style={{marginBottom: '1rem'}}
                         placeholder="URL зображення викладачів"
                         type="text"
                         onChange={e => setTeams({...teams, photo: e.target.value})}
                         value={teams.photo}/>
                <MyInput style={{marginBottom: '1rem'}}
                         placeholder="коротка цитата"
                         type="text"
                         onChange={e => setTeams({...teams, quote: e.target.value})}
                         value={teams.quote}/>


                <MyButton type="submit"> Відправити</MyButton>
            </form>
        </MyModal>
    );
};

export default TeamModal;