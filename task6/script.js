(function () {
    var adList = [
        {
            id: '1',
            description: 'Скидка на стулья - до 15%',
            createdAt: new Date('2021-03-15T23:00:00'),
            link: 'https://coolchairs.com',
            vendor: 'Chair Service',
            photoLink: 'https://images.app.goo.gl/dgAFyP2cEduzkJUP9',
            validUntil: new Date('2021-06-01T23:00:00'),
            discount: '15%',
            hashTags: ['tag1', 'tag2']
            rating: 4
        },

        {
            id: '2',
            desciption: 'TikTok',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically',
            vendor: 'TikTok Pte. Ltd.',
            photoLink: 'https://play-lh.googleusercontent.com/iBYjvYuNq8BB7EEEHktPG1fpX9NiY7Jcyg1iRtQxO442r9CZ8H-X9cLkTjpbORwWDG9d=s180-rw',
            hashTags: ['tiktok', 'music', 'app'],
            discount: '10%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 5
            
        },
        {
            id: '3',
            desciption: 'ВКонтакте — мессенджер, музыка и видео',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.vkontakte.android',
            vendor: 'VK.com',
            photoLink: 'https://play-lh.googleusercontent.com/LmnJkZ_97f5PHg-BE_AkntaS1v3_7MmaUO_m6oWpfKxVOriOsMPf79S52KInIJ0E_S8=s180-rw',
            hashTags: ['social', 'app'],
            discount: '40%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 3
        },
        {
            id: '4',
            desciption: 'Badoo — Чат и знакомства онлайн',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.badoo.mobile',
            vendor: 'Badoo',
            photoLink: 'https://play-lh.googleusercontent.com/GIY7fWpdLDzy8bJNb4-0541BBNThv-NB_Db5fMhvmamGYsZzkOxOSvtkZFqewBqXs5Q=s180-rw',
            hashTags: ['social', 'app'],
            discount: '5%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 1
        },
        {
            id: '5',
            description: 'Равным образом, внедрение современных методик предполагает независимые способы реализации форм воздействия.',
            createdAt: new Date('2021-11-05T23:00:00'),
            link: 'https://coolchairs.com',
            vendor: 'Talerink',
            photoLink: 'https://cdn.iz.ru/sites/default/files/inline/0025_771x517_0.jpg',
            validUntil: new Date('2021-06-01T23:00:00'),
            discount: '20%',
            hashTags: ['furniture', 'chairs']
            rating: 3
        },
        {
            id: '6',
            description: 'Bag number 6, vintage, Italian quality',
            createdAt: new Date('2021-03-17T23:00:00'),
            link: 'https://www.dior.com/en_int/products/couture-M0565OJAP_M885-medium-lady-d-lite-bag-yellow-multicolor-dior-paisley-embroidery',
            vendor: 'Paseko Nadia',
            validUntil:new Date('2021-10-17T23:00:00'),
            discount:'10%',
            hashTags: ['#bag', '#Dior']
            rating: 3
        },
        {
            id: '7',
            description: 'Учитывая ключевые сценарии поведения, семантический разбор внешних противодействий позволяет оценить значение стандартных подходов.',
            createdAt: new Date('2021-02-05T23:00:00'),
            link: 'https://coolchairs.com',
            vendor: 'Aovander',
            photoLink: 'https://lh3.googleusercontent.com/proxy/NG3Fqm3EsevQX2gPckXg28tNCl4sNt3xTTa5CXcwotEDJ_f6-K6nnlS_c3iUdeBYjsAOYbFMYOy7eYEeJYj5Vh5LigKKYfXyRSeJYo04S8ZeUphKnQ',
            validUntil: new Date('2021-06-01T23:00:00'),
            discount: '20%',
            hashTags: ['furniture', 'chairs']
            rating: 5
        },
        {
            id: '8',
            description: 'Мы вынуждены отталкиваться от того, что семантический разбор внешних противодействий не оставляет шанса для кластеризации усилий.',
            createdAt: new Date('2021-01-05T23:00:00'),
            link: 'https://coolchairs.com',
            vendor: 'Aovander',
            photoLink: 'https://te-st.ru/wp-content/uploads/2020/04/Unknown2.jpg',
            validUntil: new Date('2021-06-01T23:00:00'),
            discount: '20%',
            hashTags: ['furniture', 'chairs']
            rating: 5
        },
        {
            id: '9',
            description: 'Современные технологии достигли такого уровня, что высокотехнологичная концепция общественного уклада представляет собой интересный эксперимент проверки инновационных методов управления процессами.',
            createdAt: new Date('2021-01-05T23:00:00'),
            link: 'https://coolchairs.com',
            vendor: 'Talerink',
            photoLink: 'https://n1s1.hsmedia.ru/c8/9f/cb/c89fcb31dd077084bc8bbc2284586b7f/1000x600_0xac120003_16946826431608901545.jpg',
            validUntil: new Date('2021-06-01T23:00:00'),
            discount: '20%',
            hashTags: ['furniture', 'chairs']
            rating: 4
        },
        {
            id: '10',
            description: 'В своём стремлении повысить качество жизни, они забывают, что убеждённость некоторых оппонентов предопределяет высокую востребованность системы обучения кадров, соответствующей насущным потребностям.',
            createdAt: new Date('2020-11-15T23:00:00'),
            link: 'https://coolchairs.com',
            vendor: 'Bores',
            photoLink: 'https://m.buro247.ru/images/ira_zhirkova/670830-i28032020-1.png',
            validUntil: new Date('2021-06-01T23:00:00'),
            discount: '20%',
            hashTags: ['furniture', 'chairs']
            rating: 4
        },
        {
            id: '11',
            description: 'Вот вам яркий пример современных тенденций - современная методология разработки напрямую зависит от глубокомысленных рассуждений.',
            createdAt: new Date('2021-09-04T23:00:00'),
            link: 'https://coolchairs.com',
            vendor: 'Fipda',
            photoLink: 'https://popsters.ru/blog/content/4/r4n6aBG8Sqc.jpg',
            validUntil: new Date('2021-06-01T23:00:00'),
            discount: '20%',
            hashTags: ['furniture', 'chairs']
            rating: 3

        },
        {
            id: '12',
            description: 'Bag number 15, vintage, Italian quality',
            createdAt: new Date('2021-01-17T23:00:00'),
            link: 'https://www.dior.com/en_int/products/couture-M0565OJAP_M885-medium-lady-d-lite-bag-yellow-multicolor-dior-paisley-embroidery',
            vendor: 'Paseko Nadia',
            validUntil:new Date('2021-11-17T23:00:00'),
            discount:'20%',
            hashTags: ['#bag', '#Dior']
            rating: 5
        },
        {
            id: '13',
            desciption: 'Adobe PHOTOSHOP - 12% off',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://www.adobe.com/',
            vendor: 'Adobe',
            photoLink: 'https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg',
            hashTags: ['adobe', 'art', 'program'],
            discount: '12%',
            validUntil: new Date('2077-12-12T00:00:00'),
            rating: 5,
        },
        {
            id: '14',
            description: 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, ассоциативно распределены по отраслям.',
            createdAt: new Date('2021-01-05T23:00:00'),
            link: 'https://coolchairs.com',
            vendor: 'Wormergank',
            photoLink: 'https://m.buro247.ru/images/2020/08/1597311576157603.jpg',
            validUntil: new Date('2021-06-01T23:00:00'),
            discount: '20%',
            hashTags: ['furniture', 'chairs']
            rating: 5
        },
        {
            id: '15',
            description: 'Учитывая ключевые сценарии поведения, новая модель организационной деятельности позволяет выполнить важные задания по разработке экономической целесообразности принимаемых решений.',
            createdAt: new Date('2021-03-05T23:00:00'),
            link: 'https://coolchairs.com',
            vendor: 'Wormergank',
            photoLink: 'https://avatars.mds.yandex.net/get-zen_doc/1538903/pub_5df215e43d5f6900addcd818_5df216a0e4fff000af17eefe/scale_1200',
            validUntil: new Date('2021-06-01T23:00:00'),
            discount: '20%',
            hashTags: ['furniture', 'chairs']
            rating: 4
        },
        {
            id: '16',
            desciption: 'Steam - 30% off',
            createdAt: new Date('2021-01-12T00:00:00'),
            link: 'https://store.steampowered.com/',
            vendor: 'Steam',
            photoLink: 'https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016',
            hashTags: ['steam', 'games', 'program'],
            discount: '30%',
            validUntil: new Date('2050-11-12T00:00:00'),
            rating: 5,
        },
        {
            id: '17',
            description: 'Имеется спорная точка зрения, гласящая примерно следующее: представители современных социальных резервов указаны как претенденты на роль ключевых факторов.',
            createdAt: new Date('2021-01-05T23:00:00'),
            link: 'https://coolchairs.com',
            vendor: 'AltFinger',
            photoLink: 'https://avatars.mds.yandex.net/get-zen_doc/1548443/pub_5dbbf59c8d5b5f00b1fea8bf_5dbbf73804af1f00ad1f76cc/scale_1200',
            validUntil: new Date('2021-06-01T23:00:00'),
            discount: '20%',
            hashTags: ['furniture', 'chairs']
            rating: 2.5
        },
        {
            id: '18',
            desciption: 'Tilda - 50% off',
            createdAt: new Date('2021-02-25T00:00:00'),
            link: 'https://tilda.cc/ru/',
            vendor: 'Tilda',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Tilda_Logo.png',
            hashTags: ['tilda', 'websites', 'program'],
            discount: '50%',
            validUntil: new Date('2030-01-01T00:00:00'),
            rating: 5,
        },
        {
            id: '19',
            description: 'С учётом сложившейся международной обстановки, экономическая повестка сегодняшнего дня требует определения и уточнения форм воздействия.',
            createdAt: new Date('2021-11-04T23:00:00'),
            link: 'https://coolchairs.com',
            vendor: 'AltFinger',
            photoLink: 'https://ranbus.fra1.cdn.digitaloceanspaces.com/ranbus/media/images/2019/02/1549096127CrTGFoEsVq.jpg',
            validUntil: new Date('2021-06-01T23:00:00'),
            discount: '20%',
            hashTags: ['furniture', 'chairs']
            rating: 4
        },
        {
            id: '20',
            desciption: 'Spotify - 25% off',
            createdAt: new Date('2021-02-20T00:00:00'),
            link: 'https://www.spotify.com/',
            vendor: 'Spotify',
            photoLink: 'https://yt3.ggpht.com/ytc/AAUvwngewBL8V1Sxnl0IZmrdQZcvojcLFb1N1HpPllzrog=s900-c-k-c0x00ffffff-no-rj',
            hashTags: ['spotify', 'music', 'program'],
            discount: '25%',
            validUntil: new Date('2040-10-10T00:00:00'),
            rating: 5,
        },
    ];
    console.log(adList);

    function getAds(skip = 0, top = 10, filterConfig = null) {
        if(typeof skip !== "number" || typeof top !== "number" || typeof filterConfig !== "object"){
            return err;
        }
        var array = [];
        if (!filterConfig) {
            array = adList.slice(skip, skip + top);
        } else {
            for (let i = 0; i < adList.length; i++) {
                if ((filterConfig.fromDate === undefined || adList[i].createdAt >= filterConfig.fromDate)
                    && (filterConfig.toDate === undefined || adList[i].createdAt <= filterConfig.toDate)
                    && (filterConfig.vendor === undefined || adList[i].vendor === filterConfig.vendor)) {

                    if (filterConfig.tags.
                            every(tagNeed =>
                                adList[i].hashTags.find(tag => tag === tagNeed) !== undefined)) {
                        array.push(adList[i]);
                    }
                }

            }
            array = array.slice(skip, skip + top)
        }
        return array;
    }

    var filterConfig = {
        fromDate: new Date('2010-03-15T23:00:00'),
        toDate: new Date('2022-03-15T23:00:00'),
        tags: ["tag1", "tag2"],
        //vendor:"vendor"
    }
    console.log(getAds(0, 10));
    console.log(getAds(10, 10));
    console.log(getAds(1, 1, filterConfig));

    function getAd(idFind) {
        if(typeof idFind !== "string"){
            return err;
        }
        return adList.find(item => item.id === idFind);
    }

    console.log(getAd('1'));

    function validateAd(adItem) {
        if(typeof adItem !== "object"){
            return err;
        }
        if (adItem.id !== undefined && typeof adItem.id == "string"
                && adList.find(item => item.id === adItem.id && item !== adItem) === undefined
            && adItem.description !== undefined && typeof adItem.description == "string"
                && adItem.description.length < 200
            && adItem.createdAt !== undefined && adItem.createdAt instanceof Date
            && adItem.link !== undefined && typeof adItem.link == "string"
            && adItem.vendor !== undefined && typeof adItem.vendor == "string"
                && adItem.vendor.trim() !== ""
            && adItem.hashTags !== undefined && Array.isArray(adItem.hashTags)
            && adItem.discount !== undefined && typeof adItem.discount == "string"
            && adItem.validUntil !== undefined && adItem.createdAt instanceof Date) {
            return true;
        } else {
            return false;
        }
    }

    console.log(validateAd(adList[0]));
    var incorrect = {
        id: '20',
        description: 'Скидка на стулья - до 15%',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://coolchairs.com',
        vendor: 'Chair Service',
        photoLink: 'https://images.app.goo.gl/dgAFyP2cEduzkJUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '15%',
        hashTags: ['tag1', 'tag2']
    };
    console.log(validateAd(incorrect));

    function addAd(adItem) {
        if(typeof adItem !== "object"){
            return err;
        }
        if (validateAd(adItem)) {
            adList.push(adItem);
            return true;
        } else {
            return false;
        }
    }

    console.log(addAd({
        id: '21',
        description: 'Вот вам яркий пример современных тенденций - современная методология разработки напрямую зависит от глубокомысленных рассуждений.',
        createdAt: new Date('2021-09-04T23:00:00'),
        link: 'https://coolchairs.com',
        vendor: 'Fipda',
        photoLink: 'https://popsters.ru/blog/content/4/r4n6aBG8Sqc.jpg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '20%',
        hashTags: ['furniture', 'chairs']
    }))

    function editAd(id, adItem) {
        if(typeof id !== "string" || typeof adItem !== "object"){
            return err;
        }
        if (adItem.id !== undefined) {
            return false;
        }
        let editableItem = getAd(id);
        const resultItem = Object.assign(editableItem, adItem);
        if (validateAd(resultItem)) {
            editableItem = resultItem;
            return true;
        } else {
            return false;
        }
    }

    console.log(getAd('1').vendor);
    console.log(editAd('1', {vendor: 'fee'}));
    console.log(editAd('1', {id: '123'}));
    console.log(getAd('1').vendor);

    function removeAd(id) {
        if(typeof id !== "string"){
            return err;
        }
        var index = adList.findIndex(value => value.id === id);
        if (index !== -1) {
            adList.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    console.log(removeAd('5'));
    console.log(adList);
}());