import { IDay } from 'src/type'
const today = new Date()
export const LOCAL_CONSTANT = {
  en: {
    WEEK_DAY: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
    ],

    WEEK_DAY_SHORT: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    MONTHS: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ],
    MONTHS_SHORT: [
      'Янв',
      'Февр',
      'Март',
      'Апр',
      'Май',
      'Июнь',
      'Июль',
      'Авг',
      'Сент',
      'Окт',
      'Нояб',
      'Дек'
    ],
    WEEK_DAYS: [
      {
        name: 'Воскресенье',
        short: 'Вс',
        isWeekend: true
      },
      {
        name: 'Понедельник',
        short: 'Пн'
      },
      {
        name: 'Вторник',
        short: 'Вт'
      },
      {
        name: 'Среда',
        short: 'Ср'
      },
      {
        name: 'Четверг',
        short: 'Чт'
      },
      {
        name: 'Пятница',
        short: 'Пт'
      },
      {
        name: 'Суббота',
        short: 'Сб',
        isWeekend: true
      }
    ],
    YEARS_RANGE_START: today.getFullYear() - 100,
    YEARS_RANGE_END: today.getFullYear() + 100,
    getDay: (date: IDay) => {
      return new Date(date.year, date.month, date.day).getDay()
    },
    // today: () => {
    //   return new Date()
    // },
    todayObject: () => {
      const date = new Date()
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
      }
    },
    getDayOfMonth: (date: IDay) => {
      return new Date(date.year, date.month, date.day).getDate()
    },

    inputPlaceholder: 'Выберите',
    clockFromLB: 'От',
    clockToLB: 'До',
    nextMonthBtnTL: 'Следующий месяц',
    previousMonthBtnTL: 'Предыдущий месяц',
    fromLB: 'От',
    toLB: 'До',
    clockLB: 'часов',
    todayBtnTL: 'Сегодня'
  }
}

export const YEARS_VIEW = 'YEARS_VIEW'
export const MONTHS_VIEW = 'MONTHS_VIEW'
export const DAYS_VIEW = 'DAYS_VIEW'
