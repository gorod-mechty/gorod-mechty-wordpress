({
    block: 'b-page',
    mix: { mods: { page: 'main' } },
    title: 'Симферополь — Город мечты',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css' },
        { elem: 'css', url: '../merged/_merged.ie.css', ie: 'gte IE 7' },
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=PT+Mono&subset=latin,cyrillic-ext,latin-ext,cyrillic' },
        { elem: 'meta', attrs: { name: 'description', content: 'Благотворительный фонд «Город мечты» — проекты в области озеленения и благоустройства Симферополя, преобразования его архитектурного облика и повышения культурного уровня' }}
        // , { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content: [
        {
            elem: 'inner',
            mix: { block: 'clearfix' },
            elemMods: { state: 'main' },
            content: [
                {
                    block: 'logo'
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
                    block: 'description',
                    content: [
                        {
                            tag: 'p',
                            content: 'Всех, кто разделяет нашу озабоченность будущим столицы Крыма и кто не хочет сидеть сложа руки, дожидаясь перемен, мы приглашаем к сотрудничеству.'
                        },
                        {
                            tag: 'p',
                            content: 'Предприятия, учреждения, общественные организации и просто неравнодушные люди – вместе мы сможем сделать наш любимый город настоящим Городом Мечты!'
                        }
                    ]
                },
                {
                    block: 'heading',
                    mods: { level: 2 },
                    mix: { block: 'main-heading' },
                    content: [
                        {
                            block: 'b-link',
                            mods: { type: 'main' },
                            url: '../projects/projects.html',
                            content: 'Наши проекты'
                        }
                    ]
                },
                {
                    block: 'projects',
                    mix: { block: 'clearfix' },
                    content: [
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'title',
                                    content: [
                                        'Сделано ',
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            content: '(Х проектов)'
                                        }
                                    ]
                                },
                                {
                                    block: 'b-link',
                                    url: '/',
                                    mods: {
                                        type: 'project'
                                    },
                                    content: [
                                        {
                                            block: 'b-icon',
                                            url: '../../../i/project-img-one.png',
                                            alt: 'img'
                                        },
                                        'В ближайшем будущем  мы планируем взяться за освещение на улицах города'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'title',
                                    content: [
                                        'Делаем ',
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            content: '(Х проектов)'
                                        }
                                    ]
                                },
                                {
                                    block: 'b-link',
                                    url: '/',
                                    mods: {
                                        type: 'project'
                                    },
                                    content: [
                                        {
                                            block: 'b-icon',
                                            url: '../../../i/project-img-two.png',
                                            alt: 'img'
                                        },
                                        'Сейчас мы работаем над установкой площадок под мусорные баки'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'title',
                                    content: [
                                        'Планы ',
                                        {
                                            block: 'b-link',
                                            url: '/',
                                            content: '(Х проектов)'
                                        }
                                    ]
                                },
                                {
                                    block: 'b-link',
                                    url: '/',
                                    mods: {
                                        type: 'project'
                                    },
                                    content: [
                                        {
                                            block: 'b-icon',
                                            url: '../../../i/project-img-three.png',
                                            alt: 'img'
                                        },
                                        'Мы установили 24 удобные скамейки в центральном парке'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'banking',
                    content: [
                        {
                            elem: 'title',
                            content: [
                                {
                                    elem: 'title-green',
                                    content: 'Ты '
                                },
                                'тоже ',
                                {
                                    elem: 'title-green',
                                    content: 'можешь '
                                },
                                'помочь сделать мир ',
                                {
                                    elem: 'title-green',
                                    content: 'лучше!'
                                }
                            ]
                        },
                        {
                            block: 'heading',
                            mods:{ level: 4 },
                            content: 'Перевести деньги'
                        },
                        {
                            block: 'text',
                            content: [
                                'БО «Фонд Місто Мрії» в ',
                                {
                                    block: 'b-link',
                                    url: '/',
                                    content: 'Приватбанке'
                                }
                            ]
                        },
                        {
                            elem: 'details',
                            content: 'Счет  26001060922547'
                        },
                        {
                            elem: 'details',
                            content: 'ОКПО  38711011'
                        },
                        {
                            elem: 'details',
                            content: 'МФО   384436'
                        },
                        {
                            block: 'b-link',
                            url: '/',
                            mods: { type: 'block' },
                            content: 'Быть волонтёром'
                        },
                        {
                            tag: 'br'
                        },
                        {
                            block: 'b-link',
                            url: '/',
                            mods: { type: 'block' },
                            content: 'Стать партнёром'
                        }
                    ]
                },
                {
                    block: 'news-list',
                    content: [
                        {
                            block: 'heading',
                            mods: { level: 1 },
                            content: 'Новости'
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'date',
                                    content: '12 октября'
                                },
                                {
                                    block: 'b-link',
                                    url: '/',
                                    mods: { style: 'italic' },
                                    content: 'В Гаспре коммунальный пляж урезали в четыре раза'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'date',
                                    content: '12 октября'
                                },
                                {
                                    block: 'b-link',
                                    url: '/',
                                    mods: { style: 'italic' },
                                    content: 'В Севастополе второй день ищут гражданина Беларуси, унесенного в море во время '
                                }                           ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'date',
                                    content: '12 октября'
                                },
                                {
                                    block: 'b-link',
                                    url: '/',
                                    mods: { style: 'italic' },
                                    content: 'Севастополь предлагают лишить всех привилегий и сделать обычным админцентром «Таврической» области'
                                }
                            ]
                        },
                        {
                            block: 'text',
                            mix: { block: 'news', elem:'more' },
                            content: [
                                'Больше — ',
                                {
                                    block: 'b-link',
                                    url: '/',
                                    content: 'в архиве'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'cashflow',
                    content: [
                        {
                            block: 'heading',
                            mods: { level: 1 },
                            content: 'Денежный поток'
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    block: 'title',
                                    content: '↓150 грн'
                                },
                                'от ',
                                {
                                    block: 'heading-text',
                                    content: 'Константина Константинопольского '

                                },
                                {
                                    elem: 'date',
                                    content: 'в 15:35, 07 июня 2013'
                                }

                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    block: 'title',
                                    content: '↑18200 грн'
                                },
                                'на ',
                                {
                                    block: 'heading-text',
                                    content: 'закупку материалов для установки скамеек в центральном парке'

                                },
                                {
                                    elem: 'date',
                                    content: 'в 15:35, 07 июня 2013'
                                }

                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    block: 'title',
                                    content: '↓1100 грн'
                                },
                                'от',
                                {
                                    block: 'heading-text',
                                    content: ' Андрея М.'

                                },
                                {
                                    elem: 'date',
                                    content: 'в 15:35, 07 июня 2013'
                                }

                            ]
                        },
                        {
                            block: 'text',
                            mix: { block: 'news', elem: 'more' },
                            content: [
                                'Показать ',
                                {
                                    block: 'b-link',
                                    url: '/',
                                    content: 'весь список'
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
