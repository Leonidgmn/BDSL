export const scheduleData = [
    {
        adress: 'Львів, Лемківська 15',
        hall: 'СІРИЙ',
        class: 'first',
        dance: 'BACHATA',
        day: 'ПОНЕДІЛОК',
        hour: '19:00 - 20:00',
        level: 'A2',
        teacher: 'Олег & Марта',
    },
    {
        adress: 'Львів, Лемківська 15',
        dance: 'ZOUK',
        day: 'СЕРЕДА',
        hour: '19:00 - 20:00',
        level: 'A2',
        teacher: 'Олег & Марта',
    },
    {
        adress: 'Львів, Лемківська 15',
        dance: 'BACHATA',
        day: 'ПОНЕДІЛОК',
        hour: '20:00 - 21:00',
        level: 'B1-B2',
        teacher: 'Олег & Оля'
    },
    {
        adress: 'Львів, Лемківська 15',
        dance: 'BACHATA',
        day: 'СЕРЕДА',
        hour: '20:00 - 21:00',
        level: 'B1-B2',
        teacher: 'Олег & Оля'
    },
    {
        adress: 'Львів, Лемківська 15',
        dance: 'BACHATA',
        day: 'ВІВТОРОК',
        hour: '19:00 - 20:00',
        level: 'B1-B2',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Лемківська 15',
        dance: 'BACHATA',
        day: 'ЧЕТВЕР',
        hour: '19:00 - 20:00',
        level: 'C1',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'SALSA',
        day: 'ПОНЕДІЛОК',
        hour: '18:45-19:45',
        level: 'A2',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'BACHATA',
        day: 'СЕРЕДА',
        hour: '18:45-19:45',
        level: 'A2',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'BACHATA',
        day: 'ПОНЕДІЛОК',
        hour: '19:45-20:45',
        level: 'Special Course',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'BACHATA',
        day: 'СЕРЕДА',
        hour: '19:45-20:45',
        level: 'Special Course',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'ZOUK',
        day: 'ВІВТОРОК',
        hour: '20:00 - 21:00',
        level: 'A2',
        teacher: 'Слава & Юля',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'ZOUK',
        day: 'ЧЕТВЕР',
        hour: '20:00 - 21:00',
        level: 'A2',
        teacher: 'Слава & Юля',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'ZOUK',
        day: 'ВІВТОРОК',
        hour: '21:00 - 21:50',
        level: 'B1-B2',
        teacher: 'Слава & Юля',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'ZOUK',
        day: 'ЧЕТВЕР',
        hour: '21:00 - 21:50',
        level: 'B1-B2',
        teacher: 'Слава & Юля',
    },
    {
        adress: 'Львів, Театральна 15',
        dance: 'KIZOMBA',
        day: 'ВІВТОРОК',
        hour: '19:00 - 20:00',
        level: 'A2',
        teacher: 'Ярослав & Іра',
    },
    {
        adress: 'Львів, Театральна 15',
        dance: 'ZOUK',
        day: 'ЧЕТВЕР',
        hour: '21:00 - 21:50',
        level: 'B1-B2',
        teacher: 'Слава & Юля',
    },
    {
        adress: 'Львів, Театральна 15',
        dance: 'KIZOMBA',
        day: 'СЕРЕДА',
        hour: '19:00 - 20:00',
        level: 'A2',
        teacher: 'Ярослав & Іра',
    },
];

export const locations = [...new Set(scheduleData.map((a) => a.adress))];


export const locationAndDance = [
    {
        adress: 'Львів, Лемківська 15',
        dance1: ['BACHATA', 'ZOUK',]
    },
    {
        adress: 'Львів, Наукова 7а',
        dance1: ['BACHATA', 'SALSA', 'ZOUK',]
    },
    {
        adress: 'Львів, Театральна 15',
        dance1: ['KIZOMBA', 'ZOUK',]
    },
];

console.log(locationAndDance[0].dance1[0]);

    




export const allDanceTypes= [...new Set(scheduleData.map((a) => a.dance))];
// export const locationsAndDances = (arr) => {
//     const result = [];

//     arr.forEach((item) => {
//         if() {

//         }
//     })}

    // return result;
    // const foo = [
    //     {
    //         adresss: '',
    //         danceTypes: [ '', ]},

    // ]