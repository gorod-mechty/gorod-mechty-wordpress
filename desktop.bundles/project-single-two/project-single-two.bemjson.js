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
                            url: '/',
                            content:''
                        },
                        {
                            block: 'submenu',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'b-link',
                                            url: '/projects/',
                                            content: 'К списку проектов'
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
                                url: '/about/',
                                content: 'О фонде'
                            }
                        },
                        {
                            elem: 'item',
                             content:
                            {
                                block: 'b-link',
                                mods: { type: 'nav' },
                                url: '/projects/',
                                content: 'Проекты'
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: { type: 'nav' },
                                url: '/news/',
                                mix: { block: 'displayng' },
                                content: 'Новости'
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: { type: 'nav' },
                                url: '/partners/',
                                mix: { block: 'displayng' },
                                content: 'Сотрудничество'
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: { type: 'nav' },
                                url: '/cashflow/',
                                mix: { block: 'displayng' },
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
                            content: 'Проект  «100 деревьев»'
                        },
                        {
                            block: 'project-single',
                            content: [
                                {
                                    block: 'b-icon',
                                    mix: { block: 'project-single', elem: 'img-l' },
                                    url: '/i/trees-left.png',
                                    alt: 'img'
                                },
                                {
                                    block: 'b-icon',
                                    mix: { block: 'project-single', elem: 'img-r' },
                                    url: '/i/trees-right.png',
                                    alt: 'img'
                                },
                                {
                                    block:'project-cash',
                                    mix: { block: 'displayng' },
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
                                                    url: '/',
                                                     content: 'Потрачено:',
                                                },
                                                '        2500 грн'
                                            ]
                                        },
                                        {
                                            elem: 'docs',
                                            content: [
                                                {
                                                    block: 'b-link',
                                                    mods: { style: 'italic' },
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
                                                'Сейчас реализуется'
                                            ]
                                        },
                                        'Суть этого проекта заключается в том, чтобы по мере возможности высаживать зеленые насаждения в местах, где они ранее произрастали, но погибли или были уничтожены. В рамках этого проекта Фонд, по согласованию с городскими властями, намерен определить ряд мест, которые нуждаются в озеленении, и произвести там высадку молодых деревьев. Целью проекта является увеличение численности зеленых насаждений, озеленение и затенение улиц Симферополя.'
                                    ]
                                },
                                {
                                    block: 'project-slider',
                                    content: [
                                        {
                                            elem: 'list',
                                            mix: { block: 'displayng' },
                                            content: [
                                                {
                                                    block: 'b-icon',
                                                    mix: { block: 'project-slider', elem: 'item' },
                                                    url: '/i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: { block: 'project-slider', elem: 'item' },
                                                    url: '/i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: { block: 'project-slider', elem: 'item' },
                                                    url: '/i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: { block: 'project-slider', elem: 'item' },
                                                    url: '/i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: { block: 'project-slider', elem: 'item' },
                                                    url: '/i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    elem: 'nav-l',
                                                    content:'◀'
                                                },
                                                {
                                                    elem: 'nav-r',
                                                    content:'▶'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: { block: 'project-single', elem: 'img-big' },
                                            url: '/i/trees-big.png',
                                            alt: 'img'
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
                            content:[
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
