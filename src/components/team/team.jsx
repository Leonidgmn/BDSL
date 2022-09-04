import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {useCollectionData} from "react-firebase-hooks/firestore";
import MyButton from "../UI/button/MyButton";
import firebase from "firebase/compat/app";
import MyModal from "../UI/modal/MyModal";
import MyInput from "../UI/input/MyInput";
import TeamModal from "../modals/TeamModal";

const Team = () => {
    const [modal, setModal] = useState(false);
    const {firestore} = useContext(Context)
    const [teams, setTeams] = useState({
        name: '',
        photo: '',
        dance: '',
        description: '',
        quote: ''
    })
    const [team, loading] = useCollectionData(
        firestore.collection('teamData')
    )
    if (loading) {
        return
    }
    const newTeam = async (e) => {
        e.preventDefault()
        await firestore.collection('teamData').add({
            id: firebase.firestore.FieldValue.serverTimestamp(),
            name: teams.name,
            photo: teams.photo,
            dance: teams.dance,
            description: teams.description,
            quote: teams.quote
        })
        setTeams({
            name: '',
            photo: '',
            dance: '',
            description: '',
            quote: ''
        })
        console.log(team)
    }
    const deleteTeam = (id) => {
        const deleteItem = firestore.collection('teamData').where('id', '==', id);
        deleteItem.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete()
            })
        })

    }
    return (
        <section id="team">
            <div className="content">
                <h2>Наша команда</h2>
                <div className="team-list">
                    {team.map((team) => (
                        <div className='team-item left' key={team.id}>
                            <div><img src={team.photo} alt=""/></div>
                            <div className="team-item-description">
                                <h3>{team.name}</h3>
                                <h4>{team.dance}</h4>
                                <p>{team.description}</p>
                                <span>{team.quote}</span>
                                <MyButton onClick={() => deleteTeam(team.id)}>видалити викладачів</MyButton>
                            </div>
                        </div>
                    ))}
                </div>
                <TeamModal modal={modal} setModal={setModal} newTeam={newTeam} teams={teams} setTeams={setTeams}/>
                <MyButton onClick={() => setModal(true)}>добавити викладачів</MyButton>
            </div>
        </section>
    );
};

export default Team;