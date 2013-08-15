({
    block: 'b-page',
    title: 'Симферополь — Город мечты',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css' },
        { elem: 'css', url: '../merged/_merged.ie.css', ie: 'gte IE 7' },
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=PT+Mono&subset=latin,cyrillic-ext,latin-ext,cyrillic' },
        { elem: 'meta', attrs: { name: 'description', content: 'Благотворительный фонд «Город мечты» — проекты в области озеленения и благоустройства Симферополя, преобразования его архитектурного облика и повышения культурного уровня' }}
        // , { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            elem: 'inner',
            mix: {block: 'clearfix'},
            content: [
                {
                    block: 'b-link',
                    mix: {block: 'logo'},
                    url: '/',
                    content:""

                },
                {
                    block: 'nav',
                    content: [
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: {type: 'nav'},
                                url: '/about/',
                                content: "О фонде"
                            }
                        },
                        {
                            elem: 'item',
                            elemMods: { state: 'current'},
                            content: "Проекты"
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: {type: 'nav'},
                                url: '/news/',
                                content: "Новости"
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: {type: 'nav'},
                                url: '/partnership/',
                                content: "Сотрудничество"
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: {type: 'nav'},
                                url: '/cashflow/',
                                content: "Денежный поток"
                            }
                        }
                    ]
                },
                {
                    block: 'content',
                    content: [
                        {
                            block: 'heading',
                            mods: { level: 1},
                            content: 'Денежный поток'
                        },
                        {
                            tag: "p",
                            content: '…Сколько раз вы, бывая в других городах и странах и подмечая там аккуратные клумбы, ухоженные аллеи и парки, удобные скамейки и необычные памятники, говорили себе: «Ну, почему так не сделать у нас?» Действительно, почему? '
                        }
                    ]
                },
                {
                    block: 'link-block',
                    content: [
                        {
                            block: 'b-link',
                            mods: { type: 'cur'},
                            url: '#',
                            content: "Все"
                        },
                        {
                            block: 'b-link',
                            mods: { type: 'dashed'},
                            url: '#',
                            content: "Поступления"
                        },
                        {
                            block: 'b-link',
                            mods: { type: 'dashed'},
                            url: '#',
                            content: "Траты"
                        }
                    ]
                },
                {
                    block: 'cf-table-title',
                    content: [
                        {
                            elem: 'item',
                            mix:{block: 'cf-table-title', elem:'sum'},
                            content: 'Сумма'
                        },
                        {
                            elem: 'item',
                            mix:{block: 'cf-table-title', elem:'date'},
                            content: 'Дата/Время'
                        },
                        {
                            elem: 'item',
                            mix:{block: 'cf-table-title', elem:'from'},
                            content: 'От кого/аноним'
                        },
                        {
                            elem: 'item',
                            mix:{block: 'cf-table-title', elem:'project'},
                            content: 'Проект'
                        },
                        {
                            elem: 'item',
                            mix:{block: 'cf-table-title', elem:'comments'},
                            content: 'Комментарии'
                        },
                    ]
                },
                {
                    block: 'cashflow-table',
                    content:[
                        {
                            elem: 'row',
                            content: [
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'sum'},
                                    content: '↑1500 грн'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'date'},
                                    content: [
                                        '08 октября',
                                        {
                                            elem: 'br'
                                        },
                                        '15:35'
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'from'},
                                    content: 'Константин Константинопольский'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'project'},
                                    content:[
                                        {
                                            block: 'b-link',
                                            mods: { style: 'italic'},
                                            url: '#',
                                            content: 'Установка новых скамеек в центральном парке'
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'comment'},
                                    content: 'Закупка материалов'
                                }
                            ]
                        },
                        {
                            elem: 'row',
                            content: [
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'sum'},
                                    content: '↓28000 грн'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'date'},
                                    content: [
                                        '12 ноября',
                                        {
                                            elem: 'br'
                                        },
                                        '15:35'
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'from'},
                                    content: 'Валерий У.'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'project'},
                                    content:[
                                        {
                                            block: 'b-link',
                                            mods: { style: 'italic'},
                                            url: '#',
                                            content: 'Ремонт уличного освещения'
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'comment'},
                                    content: 'Перевод денег'
                                }
                            ]
                        },
                        {
                            elem: 'row',
                            content: [
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'sum'},
                                    content: '↑5 грн'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'date'},
                                    content: [
                                        '05 мая',
                                        {
                                            elem: 'br'
                                        },
                                        '15:35'
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'from'},
                                    content: 'Валерий Валерьевич'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'project'},
                                    content:[
                                        {
                                            block: 'b-link',
                                            mods: { style: 'italic'},
                                            url: '#',
                                            content: 'Установка современных и удобных площадок под мусорные контейнеры'
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'comment'},
                                    content: 'Закупка площадок, монтирование площадок, краш-тестирование площадок'
                                }
                            ]
                        },
                        {
                            elem: 'row',
                            content: [
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'sum'},
                                    content: '↑1500 грн'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'date'},
                                    content: [
                                        '08 октября',
                                        {
                                            elem: 'br'
                                        },
                                        '15:35'
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'from'},
                                    content: 'Константин Константинопольский'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'project'},
                                    content:[
                                        {
                                            block: 'b-link',
                                            mods: { style: 'italic'},
                                            url: '#',
                                            content: 'Установка новых скамеек в центральном парке'
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'comment'},
                                    content: 'Закупка материалов'
                                }
                            ]
                        },
                        {
                            elem: 'row',
                            content: [
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'sum'},
                                    content: '↑1500 грн'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'date'},
                                    content: [
                                        '08 октября',
                                        {
                                            elem: 'br'
                                        },
                                        '15:35'
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'from'},
                                    content: 'Константин Константинопольский'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'project'},
                                    content:[
                                        {
                                            block: 'b-link',
                                            mods: { style: 'italic'},
                                            url: '#',
                                            content: 'Установка новых скамеек в центральном парке'
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'comment'},
                                    content: 'Закупка материалов'
                                }
                            ]
                        },
                        {
                            elem: 'row',
                            content: [
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'sum'},
                                    content: '↓120 грн'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'date'},
                                    content: [
                                        '12 ноября',
                                        {
                                            elem: 'br'
                                        },
                                        '15:35'
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'from'},
                                    content: 'Валерий У.'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'project'},
                                    content:[
                                        {
                                            block: 'b-link',
                                            mods: { style: 'italic'},
                                            url: '#',
                                            content: 'Ремонт уличного освещения'
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'comment'},
                                    content: 'Перевод денег'
                                }
                            ]
                        },
                        {
                            elem: 'row',
                            content: [
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'sum'},
                                    content: '↑10 грн'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'date'},
                                    content: [
                                        '05 мая',
                                        {
                                            elem: 'br'
                                        },
                                        '15:35'
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'from'},
                                    content: 'Валерий Валерьевич'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'project'},
                                    content:[
                                        {
                                            block: 'b-link',
                                            mods: { style: 'italic'},
                                            url: '#',
                                            content: 'Установка современных и удобных площадок под мусорные контейнеры'
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'comment'},
                                    content: 'Закупка площадок, монтирование площадок, краш-тестирование площадок'
                                }
                            ]
                        },
                        {
                            elem: 'row',
                            content: [
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'sum'},
                                    content: '↑1500 грн'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'date'},
                                    content: [
                                        '08 октября',
                                        {
                                            elem: 'br'
                                        },
                                        '15:35'
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'from'},
                                    content: 'Константин Константинопольский'
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'project'},
                                    content:[
                                        {
                                            block: 'b-link',
                                            mods: { style: 'italic'},
                                            url: '#',
                                            content: 'Установка новых скамеек в центральном парке'
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    mix:{block: 'cashflow-table', elem:'comment'},
                                    content: 'Закупка материалов'
                                }
                            ]
                        }

                    ]
                }

            ]


        },
        {
            block: 'button',
            mix: {block: 'clearfix'},
            content:[
                {
                    block: 'b-link',
                    mods: { type: 'button'},
                    url: '#',
                    content: 'Загрузить ещё'
                }
            ]
        },
        {
            block: 'footer',
            mix: {block: 'clearfix'},
            content: [
                {
                    elem: 'text',
                    content: '© 2013  БО «Фонд Город Мечты»'
                },
                {
                    elem: 'link',
                    url: 'mailto:info@gorod-mechty.org',
                    content: 'info@gorod-mechty.org'
                },
                {
                    block: 'socials',
                    content:[
                        {
                            elem: 'item',
                            content:[
                                {
                                    elem: 'link',
                                    elemMods: {type: 'vk'},
                                    url: '/',
                                    content: 'ВКонтакте'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content:[
                                {
                                    elem: 'link',
                                    elemMods: {type: 'fb'},
                                    url: '/',
                                    content: 'ВКонтакте'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'copyright',
                    content:[
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
})
