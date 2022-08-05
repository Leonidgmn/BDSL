import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyModal from "./UI/modal/MyModal";

const Respond = ({modal, setModal}) => {
    return (
        <MyModal visible={modal} setVisible={setModal}>
            <h2>Вітаємо!</h2>
            <h3>Якщо Ви проявили бажання танцювати разом з нами, заповніть форму і ми обов'язково з Вами зв'яжемося!</h3>
            <MyInput placeholder="Ваша поштовий адрес" type='email'/>
            <MyInput placeholder="Ваш номер телефону" type="tel" pattern="[0-9]{3}"/>
            <MyInput placeholder="Ваші побажання" type="text"/>
        </MyModal>
    );
};

export default Respond;