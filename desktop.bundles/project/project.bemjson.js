({
    block: 'b-page',
    title: 'Симферополь — Город мечты',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_project.css' },
        { elem: 'css', url: '_project.ie.css', ie: 'gte IE 7' },
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
                            content: 'Проекты'
                        },
                        {
                            tag: "p",
                            content: 'Всех, кто разделяет нашу озабоченность будущим столицы Крыма и кто не хочет сидеть сложа руки, дожидаясь перемен, мы приглашаем к сотрудничеству.'
                        }
                    ]
                },
                {
                    block: 'projects-col',
                    content:[
                        {
                            elem: 'title',
                            mix: { block: 'clearfix'},
                            content: 'Сделано'
                        },
                        {
                            elem: 'wrap',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-l'},
                                            url: '../../../i/projects-img-one.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-r'},
                                            url: '../../../i/projects-img-two.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            content: 'Освещение улиц города'
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic'},
                                            content: 'Мы установили 24 современные и удобные скамейки в центральном парке нашего города'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-l'},
                                            url: '../../../i/projects-img-one.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-r'},
                                            url: '../../../i/projects-img-two.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            content: 'Освещение улиц города'
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic'},
                                            content: 'Мы установили 24 скамейки'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-l'},
                                            url: '../../../i/projects-img-one.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-r'},
                                            url: '../../../i/projects-img-two.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            content: 'Монтаж площадок под мусорные контейнеры'
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic'},
                                            content: 'Мы установили 24 современные и удобные скамейки парке'
                                        }
                                    ]
                                }
                            ]
                        }

                    ]
                },
                {
                    block: 'projects-col',
                    content:[
                        {
                            elem: 'title',
                            mix: { block: 'clearfix'},
                            content: 'Делаем'
                        },
                        {
                            elem: 'wrap',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-l'},
                                            url: '../../../i/projects-img-three.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-r'},
                                            url: '../../../i/projects-img-four.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            content: 'Монтаж площадок под мусорные контейнеры'
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic'},
                                            content: 'Мы установили 24 скамейки'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-l'},
                                            url: '../../../i/projects-img-three.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-r'},
                                            url: '../../../i/projects-img-four.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            content: 'Монтаж площадок под мусорные контейнеры'
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic'},
                                            content: 'Мы установили 24 современные и удобные скамейки в центральном парке нашего города'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-l'},
                                            url: '../../../i/projects-img-three.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-r'},
                                            url: '../../../i/projects-img-four.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            content: 'Монтаж площадок под контейнеры'
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic'},
                                            content: 'Мы установили скамейки'
                                        }
                                    ]
                                }
                            ]
                        }

                    ]
                },
                {
                    block: 'projects-col',
                    content:[
                        {
                            elem: 'title',
                            mix: { block: 'clearfix'},
                            content: 'Планы'
                        },
                        {
                            elem: 'wrap',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-l'},
                                            url: '../../../i/projects-img-five.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-r'},
                                            url: '../../../i/projects-img-six.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            content: 'Установка скамеек в парке'
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic'},
                                            content: 'Мы установили 24 современные и удобные скамейки'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-l'},
                                            url: '../../../i/projects-img-five.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-r'},
                                            url: '../../../i/projects-img-six.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            content: 'Установка скамеек в парке'
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic'},
                                            content: 'Мы установили 24 современные и удобные скамейки в центральном парке нашего города'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-l'},
                                            url: '../../../i/projects-img-five.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: {block: 'projects-col', elem: 'img-r'},
                                            url: '../../../i/projects-img-six.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            content: 'Установка скамеек в парке'
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic'},
                                            content: 'Мы установили 24 современные и удобные скамейки'
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