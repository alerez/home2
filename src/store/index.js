import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    showModal: false,

    modalData: {
      title: 'Получите расчет',
      text: 'Заполните форму, и мы свяжемся с Вами в самое ближайшее время',
      button: 'Получить смету',

      link: '/',
      link2: '/thanks'
    },

    mainData: {
      title: "Надежный дом с плоской крышей" + "" + "« GRASTEN » за 20.16 млн.р.",
      btn: 'в спб и Ленинградской области',
      text: 'Ответьте на 5 вопросов, и мы вышлем смету\n' +
        'с точностью до рубля, а также сертификат\n' +
        'на проектирование дома в подарок',
      button: 'Получить смету',
      link: 'https://mrqz.me/62601a50b2c77f003fdff44b'
    },

    mainDataThanks: {
      title: 'Благодарим вас за оставленную заявку!',
      text: 'Наш менеджер свяжется с Вами в ближайшее время и детально проконсультирует по каждому вопросу!',
      button: 'На главную',
    },
  })
})
