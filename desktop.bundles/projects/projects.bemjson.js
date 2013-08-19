({
    block: 'b-page',
    title: 'Проекты — Город мечты',
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
                    block: 'b-link',
                    mix: { block: 'logo' },
                    url: '/',
                    content:''

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
                            elemMods: { state: 'current' },
                            content: 'Проекты'
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mods: { type: 'nav' },
                                mix: { block: 'displayng' },
                                url: '/news/',
                                content: 'Новости'
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mix: { block: 'displayng' },
                                mods: { type: 'nav' },
                                url: '/partners/',
                                content: 'Сотрудничество'
                            }
                        },
                        {
                            elem: 'item',
                            content:
                            {
                                block: 'b-link',
                                mix: { block: 'displayng' },
                                mods: { type: 'nav' },
                                url: '/cashflow/',
                                content: 'Денежный поток'
                            }
                        }
                    ]
                },
                {
                    block: 'description',
                    content: [
                        {
                            block: 'heading',
                            mods: { level: 1 },
                            content: 'Проекты'
                        },
                        {
                            tag: 'p',
                            content: 'Всех, кто разделяет нашу озабоченность будущим столицы Крыма и кто не хочет сидеть сложа руки, дожидаясь перемен, мы приглашаем к сотрудничеству.'
                        }
                    ]
                },
                {
                    block: 'projects-col',
                    content:[
                        {
                            elem: 'title',
                            mix: { block: 'clearfix' },
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
                                            mix: { block: 'projects-col', elem: 'img-l' },
                                            url: '/i/park-preview.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: { block: 'projects-col', elem: 'img-r' },
                                            url: '/i/park-two-preview.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/project-single/',
                                            content: 'Высадка декоративных кустарников'
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic' },
                                            content: ' В Детском парке Симферополя были высажены несколько десятков декоративных кустарников.'
                                        }
                                    ]
                                }
                            ]
                        }

                    ]
                },
                {
                    block: 'projects-col',
                    content: [
                        {
                            elem: 'title',
                            mix: { block: 'clearfix' },
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
                                            mix: { block: 'projects-col', elem: 'img-l' },
                                            url: '/i/trees-preview.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: { block: 'projects-col', elem: 'img-r' },
                                            url: '/i/trees-two-preview.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/project-single-two/',
                                            content: 'Проект  «100 деревьев»'
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic' },
                                            content: 'Высаживаем заленые насаждения'
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
                            mix: { block: 'clearfix' },
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
                                            mix: { block: 'projects-col', elem: 'img-l' },
                                            url: '/i/fountain-preview.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-icon',
                                            mix: { block: 'projects-col', elem: 'img-r' },
                                            url: '/i/fountain-two-preview.png',
                                            alt: 'img'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '/project-single-three/',
                                            content: 'Реконструкция фонтана по ул. Гоголя '
                                        },
                                        {
                                            block: 'text',
                                            mods: { style: 'italic' },
                                            content: 'Планируем реставрацию фонтана'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'button',
                    mix: { block: 'clearfix' },
                    content:[
                        {
                            block: 'b-link',
                            mods: { type: 'button' },
                            url: '#',
                            content: 'Загрузить ещё'
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
                                    content:[
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
