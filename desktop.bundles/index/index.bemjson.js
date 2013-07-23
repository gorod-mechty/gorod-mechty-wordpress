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
									mods: {
										type: 'italic-link',
										style: 'margin-link'
									},
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
									mods: {
										type: 'italic-link',
										style: 'margin-link'
									},
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
									mods: {
										type: 'italic-link',
										style: 'margin-link'
									},
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
				},
				{
					block: 'news-block',
					content:[
						{
							block: 'h2-title',
							content: 'Новости'
						},
						{
							elem: 'news',
							content: [
								'12 октября',
								{
									block: 'b-link',
									url: '/',
									mods: { type: 'italic-link'},
									content: 'В Гаспре коммунальный пляж урезали в четыре раза'
								}
							]
						},
						{
							elem: 'news',
							content: [
								'05 сентября',
								{
									block: 'b-link',
									url: '/',
									mods: { type: 'italic-link'},
									content: 'В Севастополе второй день ищут гражданина Беларуси, унесенного в море во время '
								}							]
						},
						{
							elem: 'news',
							content: [
									'01 сентября',
								{
									block: 'b-link',
									url: '/',
									mods: { type: 'italic-link'},
									content: 'Севастополь предлагают лишить всех привилегий и сделать обычным админцентром «Таврической» '
								}
							]
						},
						{
							block: 'regular-text',
							mods: { style: 'margin-text'},
							content:[
								'Больше — ',
								{
									block: 'b-link',
									url: '/',
									mods: { type: 'regular-link'},
									content: 'в архиве'
								}
							]
						}
					]
				},
				{
					block: 'cashflow-block',
					content: [
						{
							block: 'h2-title',
							content: 'Денежный поток'
						},
						{
							elem: 'cashflow',
							content: [
								{
									block: 'bold-title',
									content: '↓150 грн.'
								},
								'от ',
								{
									block: 'bold-text',
									content: 'Константина Константинопольского '

								},
								{
									block: 'br'
								},
								'в 15:35, 07 июня 2013'
							]
						},
						{
							elem: 'cashflow',
							content: [
								{
									block: 'bold-title',
									content: '↑18200 грн.'
								},
								{
									block: 'bold-text',
									content: 'на закупку материалов для установки скамеек в центральном парке'

								},
								{
									block: 'br'
								},
								'в 15:35, 07 июня 2013'
							]
						},
						{
							elem: 'cashflow',
							content: [
								{
									block: 'bold-title',
									content: '↓1100 грн.'
								},
								'от',
								{
									block: 'bold-text',
									content: ' Андрея М.'

								},
								{
									block: 'br'
								},
								'в 15:35, 07 июня 2013'
							]
						},
						{
							block: 'regular-text',
							mods: { style: 'margin-text'},
							content:[
								'Показать ',
								{
									block: 'b-link',
									url: '/',
									mods: { type: 'regular-link'},
									content: 'весь список'
								}
							]
						}

					]

				},
				{
					block: 'footer',
					content: [
						{
							block: 'regular-text',
							mods: { style: 'footer-text'},
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
											mods: { type: 'social-link'},
											content: [
												{
													block: 'b-icon',
													url: '../../../i/social-one.png',
													alt: 'img',
													mods: { type: 'socials-img'}
												},
												'ВКонтакте'
											]
										}
									]
								},
								{
									elem: 'social-item',
									content:[
										{
											block: 'b-link',
											url: '/',
											mods: { type: 'social-link'},
											content: [
												{
													block: 'b-icon',
													url: '../../../i/social-two.png',
													alt: 'img',
													mods: { type: 'socials-img'}
												},
												'FaceBook'
											]
										}
									]
								},
								{
									block: 'regular-text',
									mods: { style: 'dev-text'},
									content:[
										'Создание сайта — ',
										{
											block: 'b-link',
											url: 'http://tadatuta.ru',
											mods: { type: 'regular-link'},
											content: 'студия «Тадатута»'
										}
									]
								}
							]
						}
					]
				}
			]


		}
    ]
})
