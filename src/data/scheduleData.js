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


export const hourDataList = [
    {value: '00', lable: '00'},
    {value: '01', lable: '01'},
    {value: '02', lable: '02'},
    {value: '03', lable: '03'},
    {value: '04', lable: '04'},
    {value: '05', lable: '05'},
    {value: '06', lable: '06'},
    {value: '07', lable: '07'},
    {value: '08', lable: '08'},
    {value: '09', lable: '09'},
    {value: '10', lable: '10'},
    {value: '11', lable: '11'},
    {value: '12', lable: '12'},
    {value: '13', lable: '13'},
    {value: '14', lable: '14'},
    {value: '15', lable: '15'},
    {value: '16', lable: '16'},
    {value: '17', lable: '17'},
    {value: '18', lable: '18'},
    {value: '19', lable: '19'},
    {value: '20', lable: '20'},
    {value: '21', lable: '21'},
    {value: '22', lable: '22'},
    {value: '23', lable: '23'},
    {value: '24', lable: '24'},
]

export const minuteDataList = [
    {value: '00', lable: '00'},
    {value: '05', lable: '05'},
    {value: '10', lable: '10'},
    {value: '15', lable: '15'},
    {value: '20', lable: '20'},
    {value: '25', lable: '25'},
    {value: '30', lable: '30'},
    {value: '35', lable: '35'},
    {value: '40', lable: '40'},
    {value: '45', lable: '45'},
    {value: '50', lable: '50'},
    {value: '55', lable: '55'},
]

export const levelDataList = [
    {value: 'A1', lable: 'A1'},
    {value: 'A2', lable: 'A2'},
    {value: 'B1', lable: 'B1'},
    {value: 'B2', lable: 'B2'},
    {value: 'B1-B2', lable: 'B1-B2'},
    {value: 'C1', lable: 'C1'},
    {value: 'all', lable: 'ДЛЯ УСІХ'},
    {value: 'intensive', lable: 'ІНТЕНСИВ'},
    {value: 'new', lable: 'НОВИЙ НАБІР'},
    {value: 'special', lable: 'СПЕЦКУРС'},
]

export const hallDataList = [
    {value: 'grey', lable: 'СІРИЙ'},
    {value: 'pink', lable: 'РОЖЕВИЙ'},
    {value: 'violet', lable: 'ФІОЛЕТОВИЙ'},
]

export const danceDataList = [
    {value: 'bachata', lable: 'BACHATA'},
    {value: 'bachataLady', lable: 'BACHATA LADY SOLO'},
    {value: 'ballet', lable: 'BODY BALLET'},
    {value: 'salsaCuba', lable: 'CUBAN SALSA'},
    {value: 'kizomba', lable: 'KIZOMBA'},
    {value: 'salsa', lable: 'SALSA'},
    {value: 'salsaLa', lable: 'SALSA LA'},
    {value: 'salsaNy', lable: 'SALSA NY'},
    {value: 'salsaSon', lable: 'SALSA SON'},
    {value: 'urbanKizomba', lable: 'URBAN-KIZ'},
    {value: 'yoga', lable: 'YOGA'},
    {value: 'zouk', lable: 'ZOUK'},
    {value: 'zumba', lable: 'ZUMBA'},
]

export const teacherDataList = [
    {lable: 'Віталік & Женя'},
    {lable: 'Галя'},
    {lable: 'Іван & Оля'},
    {lable: 'Ігор & Олеся'},
    {lable: 'Ігор & Мія'},
    {lable: 'Марина'},
    {lable: 'Мико & Женя'},
    {lable: 'Михайло & Женя'},
    {lable: 'Олег & Оля'},
    {lable: 'Олег & Марта'},
    {lable: 'Олексій'},
    {lable: 'Олена'},
    {lable: 'Слава & Юля'},
    {lable: 'Тарас & Галя'},
    {lable: 'Тарас'},
    {lable: 'Ярослав & Іра'},
  
]
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