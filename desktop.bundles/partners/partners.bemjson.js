({
    block: 'b-page',
    title: 'Симферополь — Город мечты',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_partners.css' },
        { elem: 'css', url: '_partners.ie.css', ie: 'gte IE 7' },
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
                    block: 'sidebar',
                    content:[
                        {
                            block: 'b-link',
                            mix: {block: 'logo'},
                            url: '/',
                            content:""
                        },
                        {
                            block: 'submenu',
                            content:[
                                {
                                    elem: 'item',
                                    content:[
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            content: "Реквизиты"
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: 'Партнеры'
                                },
                                {
                                    elem: 'item',
                                    content:
                                    {
                                        block: 'b-link',
                                        url: '/',
                                        content: "Волонтёры"
                                    }
                                },
                                {
                                    elem: 'item',
                                    content:
                                    {
                                        block: 'b-link',
                                        url: '/',
                                        content: "Расходные материалы"
                                    }
                                }
                            ]
                        }
                    ]
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
                            content: 'Сотрудничество'
                        },
                        {
                            tag: 'p',
                            content: '…Сколько раз вы, бывая в других городах и странах и подмечая там аккуратные клумбы, ухоженные аллеи и парки, удобные скамейки и необычные памятники, говорили себе: «Ну, почему так не сделать у нас?» Действительно, почему?  '
                        },
                        {
                            block: 'partners',
                            content:[
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem:'text',
                                            content: [
                                                'Благотворительный фонд «Город мечты» учрежден в Симферополе для того, чтобы все, кому небезразлична судьба нашего города, смогли объединить свои усилия. Мы хотим, чтобы Город Пользы перестал быть просто воротами на южный берег Крыма.',
                                                {
                                                    tag: 'br'
                                                },
                                                {
                                                    tag: 'br'
                                                },
                                                {
                                                    block: 'b-link',
                                                    url: '/',
                                                    content: [
                                                        'gorod-mechty.org',
                                                        {
                                                            block: 'b-icon',
                                                            url: '../../../i/partners-one.png',
                                                            alt: 'img'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }

                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem:'text',
                                            content: [
                                                'Благотворительный фонд «Город мечты» учрежден в Симферополе для того, чтобы все, кому небезразлична судьба нашего города, смогли объединить свои усилия.',
                                                {
                                                    tag: 'br'
                                                },
                                                {
                                                    tag: 'br'
                                                },
                                                {
                                                    block: 'b-link',
                                                    url: '/',
                                                    mods: { type: 'normal'},
                                                    content: [
                                                        'gorod-mechty.org',
                                                        {
                                                            block: 'b-icon',
                                                            url: '../../../i/partners-two.png',
                                                            alt: 'img'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }

                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem:'text',
                                            content: [
                                                'Благотворительный фонд «Город мечты» учрежден в Симферополе для того, чтобы все, кому небезразлична судьба нашего города, смогли объединить свои усилия. Предприятия, учреждения, общественные организации и просто неравнодушные люди – вместе мы сможем сделать наш любимый город настоящим Городом Мечты!',
                                                {
                                                    tag: 'br'
                                                },
                                                {
                                                    tag: 'br'
                                                },
                                                {
                                                    block: 'b-link',
                                                    url: '/',
                                                    content: [
                                                        'gorod-mechty.org',
                                                        {
                                                            block: 'b-icon',
                                                            url: '../../../i/partners-three.png',
                                                            alt: 'img'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem:'text',
                                            content: [
                                                'Благотворительный фонд «Город мечты» учрежден в Симферополе для того, чтобы все, кому небезразлична судьба нашего города, смогли объединить свои усилия. Предприятия, учреждения, общественные организации и просто неравнодушные люди – вместе мы сможем сделать наш любимый город настоящим Городом Мечты!',
                                                {
                                                    tag: 'br'
                                                },
                                                {
                                                    tag: 'br'
                                                },
                                                {
                                                    block: 'b-link',
                                                    url: '/',
                                                    content: [
                                                       'gorod-mechty.org',
                                                       {
                                                            block: 'b-icon',
                                                            url: '../../../i/partners-four.png',
                                                            alt: 'img'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
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
