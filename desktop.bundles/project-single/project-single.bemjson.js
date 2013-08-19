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
                                    content: [
                                        {
                                            block: 'b-link',
                                            url: '../projects/projects.html',
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
                            content:
                            {
                                block: 'b-link',
                                mods: { type: 'nav' },
                                url: '../news/news.html',
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
                                url: '../partners/partners.html',
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
                                url: '../cashflow/cashflow.html',
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
                            content: 'Высадка декоративных кустарников на территории Детского парка'
                        },
                        {
                            block: 'project-single',
                            content: [
                                {
                                    block: 'b-icon',
                                    mix: { block: 'project-single', elem: 'img-l' },
                                    url: '../../../i/park-left.png',
                                    alt: 'img'
                                },
                                {
                                    block: 'b-icon',
                                    mix: { block: 'project-single', elem: 'img-r' },
                                    url: '../../../i/park-right.png',
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
                                    block: 'project-date',
                                    content: [
                                        {
                                            elem: 'caption'
                                            content: 'Даты реализации: '
                                        },
                                        '12 мая'
                                    ]
                                },
                                {
                                    block: 'project-mission',
                                    content: 'Первая акция Благотворительного фонда «Город мечты» состоялась 12 мая. В Детском парке Симферополя группой добровольцев были высажены несколько десятков приобретенных Фондом декоративных кустарников. Подготовительные работы были проведены заранее: приобретен и доставлен в парк посадочный материал, засыпка, подготовлена почва, уложено агроволокно, которое препятствует росту сорняков. Собравшиеся по призыву Фонда волонтеры, под руководством озеленителя Ирины Калмыковой и под наблюдением директора коммунального учреждения «Детский парк» Александра Шабанова высадили саженцы кустарника, полили их, зачистили и благоустроили площадку. Теперь вход в зооуголок украшает клумба с кустами лаванды, осоки власовидной, юкки, чабреца, очитка, мискантуса зебрина и пр. Все растения акклиматизированы в условиях Крыма, устойчивы к засухе и не требуют сложного ухода.'
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
                                                    url: '../../../i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: { block: 'project-slider', elem: 'item' },
                                                    url: '../../../i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: { block: 'project-slider', elem: 'item' },
                                                    url: '../../../i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: { block: 'project-slider', elem: 'item' },
                                                    url: '../../../i/single-project-preview.png',
                                                    alt: 'img'
                                                },
                                                {
                                                    block: 'b-icon',
                                                    mix: { block: 'project-slider', elem: 'item' },
                                                    url: '../../../i/single-project-preview.png',
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
                                            url: '../../../i/park-big.png',
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
