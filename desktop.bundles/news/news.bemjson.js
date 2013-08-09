({
    block: 'b-page',
    title: 'Симферополь — Город мечты',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_news.css' },
        { elem: 'css', url: '_news.ie.css', ie: 'gte IE 7' },
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
                                    content: '2013'
                                },
                                {
                                    elem: 'item',
                                    content:
                                    {
                                        block: 'b-link',
                                        mods:{type: 'left-nav'},
                                        url: '/',
                                        content: "2012"
                                    }
                                },
                                {
                                    elem: 'item',
                                    content:[
                                        {
                                            block: 'b-link',
                                            mods:{type: 'left-nav'},
                                            url: '/',
                                            content: "2011"
                                        }
                                    ]
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
                    block: 'content',
                    content:[
                        {
                            block: 'heading',
                            mods: { level:1},
                            content: 'Сотрудничество'
                        },
                        {
                            block: 'news',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'date',
                                            content: '15 октября'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            mods: { style: 'italic'},
                                            content: 'Севастополь предлагают лишить всех привилегий и сделать обычным админцентром «Таврической» области.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'date',
                                            content: '15 октября'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            mods: { style: 'italic'},
                                            content: 'В Гаспре коммунальный пляж урезали в четыре раза.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'date',
                                            content: '15 октября'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            mods: { style: 'italic'},
                                            content: 'В Севастополе второй день ищут гражданина Беларуси, унесенного в море во время шторма.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'date',
                                            content: '15 октября'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            mods: { style: 'italic'},
                                            content: 'Севастополь предлагают лишить всех привилегий и сделать обычным админцентром «Таврической» области.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'date',
                                            content: '15 октября'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/',
                                           mods: { style: 'italic'},
                                           content: 'В Севастополе второй день ищут гражданина Беларуси, унесенного в море во время шторма.'
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
