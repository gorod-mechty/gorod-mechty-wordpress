({
    block: 'b-page',
    title: 'Симферополь — Город мечты',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css' },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 7' },
		{ elem: 'css', url: 'http://fonts.googleapis.com/css?family=PT+Mono&subset=latin,cyrillic-ext,latin-ext,cyrillic' },
		{ elem: 'meta', attrs: { name: 'description', content: 'Благотворительный фонд «Город мечты» — проекты в области озеленения и благоустройства Симферополя, преобразования его архитектурного облика и повышения культурного уровня' }}
        // , { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
		{
			elem: 'inner',
			content: [
				{
					block: 'b-link',
					mods: { type: 'logo'},
					url: '/',
					content:
					{
						block: 'logo',
						mods: {type: 'logo'},
						src: '/i/logo.png',
						content: 'Город мечты'
					}
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
					block: 'discription',
					content: [
						{
							elem: 'item',
							content: 'Всех, кто разделяет нашу озабоченность будущим столицы Крыма и кто не хочет сидеть сложа руки, дожидаясь перемен, мы приглашаем к сотрудничеству.'
						},
						{
							elem: 'item',
							content: 'Предприятия, учреждения, общественные организации и просто неравнодушные люди – вместе мы сможем сделать наш любимый город настоящим Городом Мечты!'
						}
					]
				},
				{
					block: 'b-link',
					mods: { type: 'main-content-link'},
					url: '/about/',
					content: 'Наши проекты'
				},
				{
					block: 'projects',
					content: [
						{
							elem: 'item',
							content: [
								{
									block: 'title',
									content: [
										'Сделано ',
										{
											block: 'b-link',
											url: '/',
											mods: { type: 'project-title-link'},
											content: '(Х проектов)'
										}
									]
								},
								{
									block: 'b-link',
									url: '/',
									mods: { type: 'italic-link'},
									content: [
										{
											block: 'b-icon',
											url: '../../../i/project-img-one.png',
											alt: 'img',
											mods: { type: 'project-link-img'}
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
									block: 'title',
									content: [
										'Делаем ',
										{
											block: 'b-link',
											url: '/',
											mods: { type: 'project-title-link'},
											content: '(Х проектов)'
										}
									]
								},
								{
									block: 'b-link',
									url: '/',
									mods: { type: 'italic-link'},
									content: [
										{
											block: 'b-icon',
											url: '../../../i/project-img-two.png',
											alt: 'img',
											mods: { type: 'project-link-img'}
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
									block: 'title',
									content: [
										'Планы ',
										{
											block: 'b-link',
											url: '/',
											mods: { type: 'project-title-link'},
											content: '(Х проектов)'
										}
									]
								},
								{
									block: 'b-link',
									url: '/',
									mods: { type: 'italic-link'},
									content: [
										{
											block: 'b-icon',
											url: '../../../i/project-img-three.png',
											alt: 'img',
											mods: { type: 'project-link-img'}
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
							block: 'projects__item',
							content: 'Перевести деньги',
							mods: {type: 'min-title'}
						},
						{
							block: 'regular-text',
							content:[
								'БО "Фонд Місто Мрії" в ',
								{
									block: 'b-link',
									url: '/',
									mods: { type: 'regular-link'},
									content: 'Приватбанке'
								}
							]
						},
						{
							block: 'formated-text',
							content: 'Счет 	26001060922547'
						},
						{
							block: 'formated-text',
							content: 'ОКПО 	38711011'
						},
						{
							block: 'formated-text',
							content: 'МФО 	384436'
						},
						{
							block: 'b-link',
							url: '/',
							mods: { type: 'block-link'},
							content: 'Быть волонтёром'
						},
						{
							block: 'br'
						},
						{
							block: 'b-link',
							url: '/',
							mods: { type: 'block-link'},
							content: 'Стать партнёром'
						}
					]
				}
			]


		}
//        {
//            block: 'header',
//            content: [
//                //  the link around logo can be used on inner pages
//                // {
//                //     block: 'b-link',
//                //     mods: { type: 'logo' },
//                //     url: '/',
//                //     content:
//                    {
//                        block: 'logo',
//                        src: '/i/logo.png',
//                        content: 'Город мечты'
//                    // }
//                },
//                {
//                    block: 'nav',
//                    content: [
//                        {
//                            elem: 'item',
//                            elemMods: { state: 'current' },
//                            content: 'Главная'
//                        },
//                        {
//                            elem: 'item',
//                            content: {
//                                block: 'b-link',
//                                url: '/contact/',
//                                content: 'Контактная информация'
//                            }
//                        }
//                    ]
//                }
//            ]
//        },
//        {
//            block: 'content',
//            content: [
//                {
//                    block: 'intro',
//                    content: [
//                        {
//                            elem: 'accent',
//                            content: [
//                                {
//                                    elem: 'highlight',
//                                    content: 'Ты'
//                                },
//                                ' тоже ',
//                                {
//                                    elem: 'highlight',
//                                    content: 'можешь'
//                                },
//                                ' помочь сделать мир ',
//                                {
//                                    elem: 'highlight',
//                                    content: 'лучше'
//                                },
//                                '!'
//                            ]
//                        },
//                        {
//                            tag: 'p',
//                            content: 'Мы стремимся сделать наш город, страну и мир прекраснее, красивее и удобнее для жизни.'
//                        }
//                    ]
//
//                },
//                {
//                    tag: 'p',
//                    content: '…Сколько раз вы, бывая в других городах и странах и подмечая там аккуратные клумбы, ухоженные аллеи и парки, удобные скамейки и необычные памятники, говорили себе: «Ну, почему так не сделать у нас?» Действительно, почему? Перечень того, что мешает – на самом деле лишь список отговорок и оправданий собственной бездеятельности. Мы ждем, когда начнут, наконец, работать депутаты и чиновники, когда жилищно-коммунальные службы сделают наш район, город, страну пригодной для жизни. А надо ли ждать? Все больше наших неравнодушных соотечественников понимают, что свобода – это, прежде всего, ответственность за все, что происходит вокруг. И если не начать преображать окружающий нас мир, он так и останется помойкой…'
//                },
//                {
//                    tag: 'p',
//                    content: 'Благотворительный фонд «Город мечты» учрежден в Симферополе для того, чтобы все, кому небезразлична судьба нашего города, смогли объединить свои усилия. Мы хотим, чтобы Город Пользы перестал быть просто воротами на южный берег Крыма, а железнодорожный вокзал – его единственной достопримечательностью. Мы хотим жить в цветущем городе, по которому не стыдно пройтись самому и который не стыдно показать друзьям. «Город мечты» намерен осуществлять проекты в области озеленения и благоустройства Симферополя, преобразования его архитектурного облика и повышения культурного уровня его жителей.'
//                },
//                {
//                    tag: 'p',
//                    content: 'Всех, кто разделяет нашу озабоченность будущим столицы Крыма и кто не хочет сидеть сложа руки и дожидаться перемен, мы приглашаем к сотрудничеству. Предприятия, учреждения, общественные организации и просто неравнодушные люди – вместе мы сможем сделать наш любимый город настоящим Городом Мечты!'
//                }
//            ]
//        },
//        {
//            block: 'footer',
//            content: [
//                {
//                    elem: 'copy',
//                    content: [
//                        '©&nbsp;2013 Проект «Город Мечты»',
//                        { tag: 'br' },
//                        { block: 'b-link', url: 'mailto:info@gorod-mechty.org.ua', content: 'info@gorod-mechty.org.ua' }
//                    ]
//                },
//                {
//                    elem: 'dev',
//                    content: [
//                        {
//                            block: 'b-link',
//                            url: 'http://tadatuta.ru/',
//                            content: 'Создание сайта'
//                        },
//                        ' — студия «Тадатута»'
//                    ]
//                }
//            ]
//        }, { block: 'i-jquery', mods: { version: '1.8.3' } },
//        { elem: 'js', url: '_index.js' }
    ]
})
