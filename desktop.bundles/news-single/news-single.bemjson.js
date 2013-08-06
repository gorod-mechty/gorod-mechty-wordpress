({
    block: 'b-page',
    title: 'Симферополь — Город мечты',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_news-single.css' },
        { elem: 'css', url: '_news-single.ie.css', ie: 'gte IE 7' },
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
                                url: '/news/',
                                content: "Новости"
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                url: '/partnership/',
                                content: "Сотрудничество"
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                url: '/cashflow/',
                                content: "Денежный поток"
                            }
                        }
                    ]
                },
                {
                    block: 'description',
                    content: [
                        {
                            block: 'heading_level_2',
                            mods: { type: 'header'},
                            content: 'Севастополь предлагают лишить всех привилегий и сделать админцентром'
                        }

                    ]
                },
                {
                    block: 'news-list',
                    content: [
                        {
                            elem: 'news-item',
                            content: [
                                {
                                    block: 'date',
                                    content: '15 октября'
                                },
                                {
                                    tag: "p",
                                    content: 'Благотворительный фонд «Город мечты» учрежден в Симферополе для того, чтобы все, кому небезразлична судьба нашего города, смогли объединить свои усилия. Мы хотим, чтобы Город Пользы перестал быть просто воротами на южный берег Крыма, а вокзал – его единственной достопримечательностью. '
                                },
                                {
                                    block: 'b-icon',
                                    mix: {block: 'news-list', elem: 'img-l'},
                                    url: '../../../i/news-single-img.png',
                                    alt: 'img'
                                },
                                {
                                    tag: 'p',
                                    content: [
                                        'Мы хотим жить в цветущем городе, по которому не стыдно пройтись самому и который не стыдно показать друзьям. ',
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            mods: { type: 'big'},
                                            content: '«Город мечты»'
                                        },
                                        ' намерен осуществлять ',
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            mods: { type: 'big'},
                                            content: 'проекты'
                                        },
                                        ' в области озеленения и благоустройства Симферополя.'

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'left-nav',
                    content:[
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods:{type: 'left-nav'},
                                url: '/',
                                content: "К списку новостей"
                            }
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
                    block: 'text',
                    mix: { block: 'footer', elem: 'text' },
                    content: '© 2013  БО «Фонд Город Мечты»'
                },
                {
                    block: 'b-link',
                    url: 'mailto:info@gorod-mechty.org',
                    mods: { type: 'footer-link'},
                    content: 'info@gorod-mechty.org'
                },
                {
                    block: 'socials',
                    content:[
                        {
                            elem: 'social-item',
                            content:[
                                {
                                    block: 'b-link',
                                    url: '/',
                                    mods: { type: 'vk'},
                                    content: 'ВКонтакте'
                                }
                            ]
                        },
                        {
                            elem: 'social-item',
                            content:[
                                {
                                    block: 'b-link',
                                    url: '/',
                                    mods: { type: 'fb'},
                                    content: 'FaceBook'
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
                            mods: { type: 'normal'},
                            content: 'студия «Тадатута»'
                        }
                    ]
                }
            ]
        }
    ]
})
