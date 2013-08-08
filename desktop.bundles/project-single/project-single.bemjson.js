({
    block: 'b-page',
    title: 'Симферополь — Город мечты',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_project-single.css' },
        { elem: 'css', url: '_project-single.ie.css', ie: 'gte IE 7' },
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
                    block: 'content',
                    content: [
                        {
                            block: 'heading_level_2',
                            mods: { type: 'header'},
                            content: 'Монтаж площадок под контейнеры'
                        },
                        {
                            block: 'project-single',
                            content:[
                                {
                                    block: 'b-icon',
                                    mix: {block: 'project-single', elem: 'img-l'},
                                    url: '../../../i/single-project-left.png',
                                    alt: 'img'
                                },
                                {
                                    block: 'b-icon',
                                    mix: {block: 'project-single', elem: 'img-r'},
                                    url: '../../../i/single-project-right.png',
                                    alt: 'img'
                                },
                                {
                                    block:'project-cash',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    tag: 'span',
                                                     content: 'Надо собрать:'
                                                 },
                                                 '    28500 грн'
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    block: 'b-link',
                                                    mods: {type: 'normal'},
                                                    url: '/',
                                                     content: 'Собрано:',
                                                },
                                                '            8000 грн'
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    block: 'b-link',
                                                    mods: {type: 'normal'},
                                                    url: '/',
                                                     content: 'Потрачено:',
                                                },
                                                '        2500 грн'
                                            ]
                                        },
                                        {
                                            elem: 'docs',
                                            content:[
                                                {
                                                    block: 'b-link',
                                                    mods: {style: 'italic'},
                                                    url: '/',
                                                     content: 'Скачать',
                                                },
                                                {
                                                    tag: 'span',
                                                    content: ' документацию'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'project-mission',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: [
                                                {
                                                    tag: 'span',
                                                    content: 'Даты реализации: '
                                                },
                                                '12 октября — в процессе'
                                            ]
                                        },
                                        'Благотворительный фонд «Город мечты» учрежден в Симферополе для того, чтобы все, кому небезразлична судьба нашего города, смогли объединить свои усилия. Мы хотим, чтобы Город Пользы перестал быть просто воротами на южный берег Крыма, а вокзал – его единственной достопримечательностью.'
                                    ]
                                },
                                {
                                    block: 'project-slider',
                                    content: [
                                        {
                                            elem: 'list',
                                            content: [
                                                {
                                                    block: 'b-icon',
                                                    mix: {block: 'project-slider', elem: 'item'},
                                                    url: '../../../i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: {block: 'project-slider', elem: 'item'},
                                                    url: '../../../i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: {block: 'project-slider', elem: 'item'},
                                                    url: '../../../i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: {block: 'project-slider', elem: 'item'},
                                                    url: '../../../i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: {block: 'project-slider', elem: 'item'},
                                                    url: '../../../i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    elem: 'nav-l',
                                                    content:''
                                                },
                                                {
                                                    elem: 'nav-r',
                                                    content:''
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-icon',
                                            url: '../../../i/single-project-big.png',
                                            alt: 'img'
                                        }
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
                                content: "К списку проектов"
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
