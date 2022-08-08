import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyModal from "./UI/modal/MyModal";
import { send } from 'emailjs-com';
const Respond = ({modal, setModal}) => {
    const [form, setForm]=useState({
        name:'',
        email:'',
        phone:'',
        description:''
    })
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_hz8mm9i',
            'template_xgrdrbd',
            form,
            'T0kC7gDLW0ynUCu89'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        setForm({name:'',
            email:'',
            phone:'',
            description:''})
    };

    console.log(form);
    return (
        <MyModal visible={modal} setVisible={setModal}>
            <h2>Вітаємо!</h2>
            <h3>Якщо Ви проявили бажання танцювати разом з нами, заповніть форму і ми обов'язково з Вами зв'яжемося!</h3>
            <form onSubmit={onSubmit}>
                <MyInput type="text"
                         placeholder="Ваше ім'я"
                         maxlength='12'
                         value={form.name}
                         onChange={e=>setForm({...form, name:e.target.value})}
                         required/>
                <MyInput type="email"
                         placeholder="Ваша поштовий адрес"
                         pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                         value={form.email}
                         onChange={e=>setForm({...form, email:e.target.value})}
                         required/>

                <MyInput placeholder="Ваш номер телефону (формат +380951234567)"
                         type="tel"
                         pattern="[0-9, +]{13}"
                         value={form.phone}
                         onChange={e=>setForm({...form, phone:e.target.value})}
                         required/>

                <MyInput placeholder="Ваші побажання"
                         type="text"
                         onChange={e=>setForm({...form, description:e.target.value})}
                         value={form.description}/>

                <button type="submit" > Відправити</button>
            </form>
        </MyModal>
    );
};

export default Respond;