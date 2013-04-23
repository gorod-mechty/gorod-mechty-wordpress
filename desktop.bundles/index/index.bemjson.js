({
    block: 'b-page',
    title: 'Симферополь — Город мечты',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css' },
        // { elem: 'css', url: '_index', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: 'Благотворительный фонд «Город мечты» — проекты в области озеленения и благоустройства Симферополя, преобразования его архитектурного облика и повышения культурного уровня' }}
        // , { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            block: 'content',
            content: [
                {
                    block: 'logo',
                    src: '/i/logo.png',
                    content: 'Город мечты'
                },
                {
                    block: 'intro',
                    content: [
                        {
                            elem: 'accent',
                            content: [
                                {
                                    elem: 'highlight',
                                    content: 'Ты'
                                },
                                ' тоже ',
                                {
                                    elem: 'highlight',
                                    content: 'можешь'
                                },
                                ' помочь сделать мир ',
                                {
                                    elem: 'highlight',
                                    content: 'лучше'
                                },
                                '!'
                            ]
                        },
                        {
                            tag: 'p',
                            content: 'Мы стремимся сделать наш город, страну и мир прекраснее, красивее и удобнее для жизни.'
                        }
                    ]

                },
                {
                    tag: 'p',
                    content: '…Сколько раз вы, бывая в других городах и странах и подмечая там аккуратные клумбы, ухоженные аллеи и парки, удобные скамейки и необычные памятники, говорили себе: «Ну, почему так не сделать у нас?» Действительно, почему? Перечень того, что мешает – на самом деле лишь список отговорок и оправданий собственной бездеятельности. Мы ждем, когда начнут, наконец, работать депутаты и чиновники, когда жилищно-коммунальные службы сделают наш район, город, страну пригодной для жизни. А надо ли ждать? Все больше наших неравнодушных соотечественников понимают, что свобода – это, прежде всего, ответственность за все, что происходит вокруг. И если не начать преображать окружающий нас мир, он так и останется помойкой…'
                },
                {
                    tag: 'p',
                    content: 'Благотворительный фонд «Город мечты» учрежден в Симферополе для того, чтобы все, кому небезразлична судьба нашего города, смогли объединить свои усилия. Мы хотим, чтобы Город Пользы перестал быть просто воротами на южный берег Крыма, а железнодорожный вокзал – его единственной достопримечательностью. Мы хотим жить в цветущем городе, по которому не стыдно пройтись самому и который не стыдно показать друзьям. «Город мечты» намерен осуществлять проекты в области озеленения и благоустройства Симферополя, преобразования его архитектурного облика и повышения культурного уровня его жителей.'
                },
                {
                    tag: 'p',
                    content: 'Всех, кто разделяет нашу озабоченность будущим столицы Крыма и кто не хочет сидеть сложа руки и дожидаться перемен, мы приглашаем к сотрудничеству. Предприятия, учреждения, общественные организации и просто неравнодушные люди – вместе мы сможем сделать наш любимый город настоящим Городом Мечты!'
                }
            ]
        },
        {
            block: 'footer',
            content: [
                {
                    elem: 'copy',
                    content: [
                        '©&nbsp;2013 Проект «Город Мечты»',
                        { tag: 'br' },
                        { block: 'b-link', url: 'mailto:info@gorod-mechty.org.ua', content: 'info@gorod-mechty.org.ua' }
                    ]
                },
                {
                    elem: 'dev',
                    content: [
                        {
                            block: 'b-link',
                            url: 'http://tadatuta.ru/',
                            content: 'Создание сайта'
                        },
                        ' — студия «Тадатута»'
                    ]
                }
            ]
        }
        // , { block: 'i-jquery', mods: { version: '1.8.3' } },
        // { elem: 'js', url: '_index.js' }
    ]
})
