import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'en-US',
    fallbackLocale: 'ru-RU',
    messages: {
        'en-US': {
            siteTitle: 'Film Database',
            titlePageAccount: 'Favorite movies',
            name: 'Name',
            email: 'Email',
            btnOpen: 'Open',
            search: 'Search',
            discoverTitle: 'Discover New Movies & TV Shows',
            movies: 'Movies',
            tvShows: 'Tv-shows'
        },
        'ru-RU': {
            siteTitle: 'База данных фильмов',
            titlePageAccount: 'Любимые фильмы',
            name: 'Имя',
            email: 'Почта',
            btnOpen: 'Открыть',
            search: 'Поиск',
            discoverTitle: 'Поиск Новых Фильмов и Сериалов',
            movies: 'Фильмы',
            tvShows: 'Сериалы'




        }
    }
})
