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
            mix: { block: 'clearfix' },
            content: [
                {
                    block: 'sidebar',
                    content: [
                        {
                            block: 'b-link',
                            mix: { block: 'logo' },
                            url: '../index/index.html',
                            content:''
                        },
                        {
                            block: 'submenu',
                            content: [
                                {
                                    elem: 'item',
                                    content: '2013'
                                },
                                {
                                    elem: 'item',
                                    content:
                                    {
                                        block: 'b-link',
                                        url: '/',
                                        content: '2012'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            content: '2011'
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
                                mods: { type: 'nav' },
                                url: '../about/about.html',
                                content: 'О фонде'
                            }
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
                            elemMods: { state : 'current' },
                            content: 'Новости'
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: { type: 'nav' },
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
                                url: '../cashflow/cashflow.html',
                                content: 'Денежный поток'
                            }
                        }
                    ]
                },
                {
                    block: 'content',
                    content:[
                        {
                            block: 'heading',
                            mods: { level:1 },
                            content: 'Новости'
                        },
                        {
                            block: 'news',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'date',
                                            content: '15 октября'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            mods: { style: 'italic' },
                                            content: 'Севастополь предлагают лишить всех привилегий и сделать обычным админцентром «Таврической» области.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'date',
                                            content: '15 октября'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            mods: { style: 'italic' },
                                            content: 'В Гаспре коммунальный пляж урезали в четыре раза.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'date',
                                            content: '15 октября'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            mods: { style: 'italic' },
                                            content: 'В Севастополе второй день ищут гражданина Беларуси, унесенного в море во время шторма.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'date',
                                            content: '15 октября'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            mods: { style: 'italic' },
                                            content: 'Севастополь предлагают лишить всех привилегий и сделать обычным админцентром «Таврической» области.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'date',
                                            content: '15 октября'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/',
                                           mods: { style: 'italic' },
                                           content: 'В Севастополе второй день ищут гражданина Беларуси, унесенного в море во время шторма.'
                                       }
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
                            content: '© 2013  БО «Фонд Город Мечты»'
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
