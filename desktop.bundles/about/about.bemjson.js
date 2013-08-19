({
    block: 'b-page',
    title: 'Симферополь — Город мечты',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css' },
        { elem: 'css', url: '../merged/_merged.ie.css', ie: 'gte IE 7' },
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=PT+Mono&subset=latin,cyrillic-ext,latin-ext,cyrillic' },
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=PT+Serif&subset=latin,latin-ext,cyrillic-ext' },
        { elem: 'meta', attrs: { name: 'description', content: 'Благотворительный фонд «Город мечты» — проекты в области озеленения и благоустройства Симферополя, преобразования его архитектурного облика и повышения культурного уровня' }}
        // , { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            elem: 'inner',
            mix: { block: 'clearfix' },
            content: [
                {
                    block: 'sidebar',
                    content: [
                        {
                            block: 'b-link',
                            mix: { block: 'logo' },
                            url: '../index/index.html',
                            content: ''
                        },
                        {
                            block: 'submenu',
                            mix: { block: 'displayng' },
                            content: [
                                {
                                    elem: 'item',
                                    content: 'Что такое фонд'
                                },
                                {
                                    elem: 'item',
                                    content:
                                    {
                                        block: 'b-link',
                                        url: '/',
                                        content: 'Наши цели'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            content: 'Стать участником'
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    block: 'nav',
                    content: [
                        {
                            elem: 'item',
                            elemMods: { state: 'current'},
                            content: 'О фонде'
                        },
                        {
                            elem: 'item',
                             content:
                            {
                                block: 'b-link',
                                mods: { type: 'nav' },
                                url: '../projects/projects.html',
                                content: 'Проекты'
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: { type: 'nav' },
                                mix: { block: 'displayng' },
                                url: '../news/news.html',
                                content: 'Новости'
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: { type: 'nav' },
                                mix: { block: 'displayng' },
                                url: '../partners/partners.html',
                                content: 'Сотрудничество'
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: { type: 'nav' },
                                mix: { block: 'displayng' },

                                url: '../cashflow/cashflow.html',
                                content: 'Денежный поток'
                            }
                        }
                    ]
                },
                {
                    block: 'content',
                    content: [
                        {
                            block: 'heading',
                            mods: { level: 1 },
                            content: 'О фонде'
                        },
                        {
                            elem: 'italic',
                            content: '…Сколько раз вы, бывая в других городах и странах и подмечая там аккуратные клумбы, ухоженные аллеи и парки, удобные скамейки и необычные памятники, говорили себе: «Ну, почему так не сделать у нас?» Действительно, почему? '
                        },
                        {
                            elem: 'img-r',
                            content: [
                                {
                                    block: 'b-icon',
                                    url: '../../../i/project-img-one.png',
                                    alt: 'img'
                                },
                                'Здесь будет находиться краткое, но очень ёмкое',
                                {
                                    block: 'b-link',
                                    url: '/',
                                    mods: { style: 'italic' },
                                    content: 'описание к изображению'
                                }
                            ]
                        },
                        {
                            tag: 'p',
                            content: 'Благотворительный фонд «Город мечты» учрежден в Симферополе для того, чтобы все, кому небезразлична судьба нашего города, смогли объединить свои усилия. Мы хотим, чтобы Город Пользы перестал быть просто воротами на южный берег Крыма, а вокзал – его единственной достопримечательностью. '
                        },
                        {
                            tag: 'p',
                            content: [
                                'Мы хотим жить в цветущем городе, по которому не стыдно пройтись самому и который не стыдно показать друзьям. ',
                                {
                                    block: 'b-link',
                                    url: 'index/index.html',
                                    mods: { type: 'big' },
                                    content: '«Город мечты»'
                                },
                                ' намерен осуществлять ',
                                {
                                    block: 'b-link',
                                    url: 'projects/projects.html',
                                    mods: { type: 'big' },
                                    content: 'проекты'
                                },
                                ' в области озеленения и благоустройства Симферополя, преобразования его архитектурного облика и повышения культурного уровня жителей.'

                            ]
                        },
                        {
                            block: 'b-icon',
                            mix: { block: 'content', elem: 'img-l' },
                            url: '../../../i/news-single-img.png',
                            alt: 'img'
                        },
                        {
                            tag: 'p',
                            content: 'Всех, кто разделяет нашу озабоченность будущим столицы Крыма и кто не хочет сидеть сложа руки и дожидаться перемен, мы приглашаем к сотрудничеству:'
                        },
                        {
                            elem: 'list',
                            content: [
                                '—  предприятия и учреждения',
                                {
                                    tag: 'br'
                                },
                                {
                                    block: 'content-list',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: 'государственные'
                                        },
                                        {
                                            elem: 'item',
                                            content: 'частные'
                                        },
                                        {
                                            elem: 'item',
                                            content: 'другие'
                                        }
                                    ]
                                },
                                '—  общественные организации',
                                {
                                    tag:'br'
                                },
                                '—  просто неравнодушные люди'
                            ]
                        },
                        {
                            block: 'heading',
                            mix: { block: 'clearfix' },
                            mix: { block: 'displayng' },
                            mods: { level: 2},
                            content: 'Подзаголовок'
                        },
                        {
                            block: 'table',
                            mix: { block: 'displayng' },
                            content: [
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            elem: 'head',
                                            content: 'Раздел таблицы 1'
                                        },
                                        {
                                            elem: 'head',
                                            content: 'Раздел таблицы 2'
                                        },
                                        {
                                            elem: 'head',
                                            content: 'Раздел таблицы 3'
                                        },
                                        {
                                            elem: 'head',
                                            content: 'Раздел таблицы 4'
                                        },
                                    ]
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            elem: 'cell',
                                            elemMods: { style: 'italic'},
                                            content: 'Ячейка 1'
                                        },
                                        {
                                            elem: 'cell',
                                            elemMods: { style: 'italic'},
                                            content: 'Ячейка 2'
                                        },
                                        {
                                            elem: 'cell',
                                            elemMods: { style: 'italic'},
                                            content: 'Ячейка 3'
                                        },
                                        {
                                            elem: 'cell',
                                            elemMods: { style: 'italic'},
                                            content: 'Ячейка 4'
                                        },
                                    ]
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            elem: 'cell',
                                            elemMods: { style: 'italic'},
                                            content: 'Ячейка 5'
                                        },
                                        {
                                            elem: 'cell',
                                            elemMods: { style: 'italic'},
                                            content: 'Ячейка 6'
                                        },
                                        {
                                            elem: 'cell',
                                            elemMods: { style: 'italic'},
                                            content: 'Ячейка 7'
                                        },
                                        {
                                            elem: 'cell',
                                            elemMods: { style: 'italic'},
                                            content: 'Ячейка 8'
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'footer',
                    mix: { block: 'clearfix' },
                    content: [
                        {
                            elem: 'text',
                            content: '© 2013  БО Фонд Город Мечты'
                        },
                        {
                            elem: 'link',
                            url: 'mailto:info@gorod-mechty.org',
                            content: 'info@gorod-mechty.org'
                        },
                        {
                            block: 'socials',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'link',
                                            elemMods: { type: 'vk' },
                                            url: '/',
                                            content: 'ВКонтакте'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'link',
                                            elemMods: { type: 'fb' },
                                            url: '/',
                                            content: 'ВКонтакте'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'copyright',
                            content: [
                                'Создание сайта — ',
                                {
                                    block: 'b-link',
                                    url: 'http://tadatuta.ru',
                                    content: 'студия «Тадатута»'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
