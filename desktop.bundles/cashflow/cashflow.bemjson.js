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
            mix: {block: 'clearfix'},
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
											mods: { type: 'social-link-one'},
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
											mods: { type: 'social-link-two'},
											content: 'FaceBook'
										}
									]
								}
							]
						},
                        {
                            block: 'text',
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
})
