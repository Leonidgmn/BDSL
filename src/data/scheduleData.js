export const scheduleData = [
    {
        adress: 'Львів, Лемківська 15',
        hall: 'СІРИЙ',
        dance: 'BACHATA',
        day: 'ПОНЕДІЛОК',
        hour: '21',
        minute: '00',
        level: 'A2',
        teacher: 'Олег & Марта',
    },
    {
        adress: 'Львів, Лемківська 15',
        hall: 'СІРИЙ',
        dance: 'BACHATA',
        day: 'СЕРЕДА',
        hour: '19',
        minute: '00',
        level: 'A2',
        teacher: 'Олег & Марта',
    },
    {
        adress: 'Львів, Лемківська 15',
        hall: 'СІРИЙ',
        dance: 'BACHATA',
        day: 'ПОНЕДІЛОК',
        hour: '20',
        minute: '00',
        level: 'B1-B2',
        teacher: 'Олег & Оля'
    },
    {
        adress: 'Львів, Лемківська 15',
        hall: 'СІРИЙ',
        dance: 'ZOUK',
        day: 'СЕРЕДА',
        hour: '20',
        minute: '00',
        level: 'B1-B2',
        teacher: 'Олег & Оля'
    },
    {
        adress: 'Львів, Лемківська 15',
        hall: 'РОЖЕВИЙ',
        dance: 'BACHATA',
        day: 'СЕРЕДА',
        hour: '19',
        minute: '00',
        level: 'B1-B2',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Лемківська 15',
        hall: 'РОЖЕВИЙ',
        dance: 'BACHATA',
        day: 'ЧЕТВЕР',
        hour: '19',
        minute: '00',
        level: 'B1-B2',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Лемківська 15',
        dance: 'KIZOMBA',
        day: 'ЧЕТВЕР',
        hour: '19',
        minute: '00',
        level: 'C1',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'SALSA',
        day: 'ПОНЕДІЛОК',
        hour: '18',
        minute: '45',
        level: 'A2',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'BACHATA',
        day: 'СЕРЕДА',
        hour: '18',
        minute: '45',
        level: 'A2',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'BACHATA',
        day: 'ПОНЕДІЛОК',
        hour: '19',
        minute: '45',
        level: 'Special Course',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'BACHATA',
        day: 'СЕРЕДА',
        hour: '19',
        minute: '45',
        level: 'Special Course',
        teacher: 'Тарас & Галя',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'ZOUK',
        day: 'ВІВТОРОК',
        hour: '20',
        minute: '00',
        level: 'A2',
        teacher: 'Слава & Юля',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'ZOUK',
        day: 'ЧЕТВЕР',
        hour: '20',
        minute: '00',
        level: 'A2',
        teacher: 'Слава & Юля',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'ZOUK',
        day: 'ВІВТОРОК',
        hour: '21',
        minute: '00',
        level: 'B1-B2',
        teacher: 'Слава & Юля',
    },
    {
        adress: 'Львів, Наукова 7а',
        dance: 'ZOUK',
        day: 'ПОНЕДІЛОК',
        hour: '21',
        minute: '00',
        level: 'B1-B2',
        teacher: 'Слава & Юля',
    },
    {
        adress: 'Львів, Театральна 15',
        dance: 'KIZOMBA',
        day: 'ВІВТОРОК',
        hour: '19',
        minute: '00',
        level: 'A2',
        teacher: 'Ярослав & Іра',
    },
    {
        adress: 'Львів, Театральна 15',
        dance: 'ZOUK',
        day: 'ЧЕТВЕР',
        hour: '21',
        minute: '00',
        level: 'B1-B2',
        teacher: 'Слава & Юля',
    },
    {
        adress: 'Львів, Театральна 15',
        dance: 'KIZOMBA',
        day: 'СЕРЕДА',
        hour: '16',
        minute: '00',
        level: 'A2',
        teacher: 'Ярослав & Іра',
    },
    {
        adress: 'Львів, Театральна 15',
        dance: 'KIZOMBA',
        day: 'СЕРЕДА',
        hour: '15',
        minute: '00',
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


export const allDanceTypes = [...new Set(scheduleData.map((a) => a.dance))];
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