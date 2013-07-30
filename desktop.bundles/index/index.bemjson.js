({
    block: 'b-page',
    mix: {block: 'b-page', elem: 'main'},
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
							tag: "p",
							content: 'Всех, кто разделяет нашу озабоченность будущим столицы Крыма и кто не хочет сидеть сложа руки, дожидаясь перемен, мы приглашаем к сотрудничеству.'
						},
						{
                            tag: "p",
							content: 'Предприятия, учреждения, общественные организации и просто неравнодушные люди – вместе мы сможем сделать наш любимый город настоящим Городом Мечты!'
						}
					]
				},
				{
					block: 'heading_level_2',
                    mods: { type: 'main-heading'},
                    content:[
                        {
                            block: 'b-link',
                            mods: { type: 'main-content-link'},
                            url: '/about/',
                            content: 'Наши проекты'
                        }
                    ]
				},
				{
					block: 'projects',
                    mix: {block: 'clearfix'},
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
										style: 'italic',
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
										style: 'italic',
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
										style: 'italic',
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
							block: 'heading_level_4',
							content: 'Перевести деньги'
						},
						{
							block: 'text',
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
							block: 'text',
                            mods: {style: 'formatted'},
							content: 'Счет 	26001060922547'
						},
						{
                            block: 'text',
                            mods: {style: 'formatted'},
							content: 'ОКПО 	38711011'
						},
						{
                            block: 'text',
                            mods: {style: 'formatted'},
							content: 'МФО 	384436'
						},
						{
							block: 'b-link',
							url: '/',
							mods: { type: 'block-link'},
							content: 'Быть волонтёром'
						},
						{
							tag: 'br'
						},
						{
							block: 'b-link',
							url: '/',
							mods: { type: 'block-link'},
							content: 'Стать партнёром'
						}
					]
				},
				{
					block: 'news',
					content:[
						{
							block: 'heading_level_2',
							content: 'Новости'
						},
						{
							elem: 'news-item',
							content: [
                                {
                                    block: 'date',
                                    content: '12 октября'
                                },
								{
									block: 'b-link',
									url: '/',
									mods: { style: 'italic'},
									content: 'В Гаспре коммунальный пляж урезали в четыре раза'
								}
							]
						},
						{
							elem: 'news-item',
							content: [
                                {
                                    block: 'date',
                                    content: '12 октября'
                                },
								{
									block: 'b-link',
									url: '/',
									mods: { style: 'italic'},
									content: 'В Севастополе второй день ищут гражданина Беларуси, унесенного в море во время '
								}							]
						},
						{
							elem: 'news-item',
							content: [
                                {
                                    block: 'date',
                                    content: '12 октября'
                                },
								{
									block: 'b-link',
									url: '/',
									mods: { style: 'italic'},
									content: 'Севастополь предлагают лишить всех привилегий и сделать обычным админцентром «Таврической» '
								}
							]
						},
						{
							block: 'text',
                            mix:{block: 'news', elem:'more'},
                            content:[
								'Больше — ',
								{
									block: 'b-link',
									url: '/',
									mods: { type: 'normal'},
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
							block: 'heading_level_2',
							content: 'Денежный поток'
						},
						{
							elem: 'item',
							content: [
								{
									block: 'heading-title',
									content: '↓150 грн'
								},
								'от ',
								{
									block: 'heading-text',
									content: 'Константина Константинопольского '

								},
                                {
                                    block: 'date',
                                    content: 'в 15:35, 07 июня 2013'
                                }

							]
						},
						{
							elem: 'item',
							content: [
								{
									block: 'heading-title',
									content: '↑18200 грн'
								},
								{
									block: 'heading-text',
									content: 'на закупку материалов для установки скамеек в центральном парке'

								},
                                {
                                    block: 'date',
                                    content: 'в 15:35, 07 июня 2013'
                                }

							]
						},
						{
							elem: 'item',
							content: [
								{
									block: 'heading-title',
									content: '↓1100 грн'
								},
								'от',
								{
									block: 'heading-text',
									content: ' Андрея М.'

								},
                                {
                                    block: 'date',
                                    content: 'в 15:35, 07 июня 2013'
                                }

							]
						},
						{
							block: 'text',
							mix:{block: 'news', elem:'more'},
							content:[
								'Показать ',
								{
									block: 'b-link',
									url: '/',
									mods: { type: 'normal'},
									content: 'весь список'
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
