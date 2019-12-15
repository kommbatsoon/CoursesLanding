(function () {
    window.scrollTo(0, 0);

    /* Working with REViEWS data */

    //Reviews list (id, photo, fullName, text)
    let REVIEWS_DATA = [
        {
            id: 1,
            photo: 'photo1.PNG',
            fullName: 'Юлия Сенник',
            text: ' Спасибо большое Евгению за невероятное лазерное шоу! Я догадывалась, что в живую выступление будет намного эффектнее, чем на видео, но не думала, что настолько! Это правда очень круто! Гости остались под впечатлением (их отзывы - "это просто вау", "круто", "никогда такого не видел", "очень необычно" и т.д.). Даже администратор коттеджа нам сказал, что сколько было свадеб у них, он ни разу такого не видел! Поэтому те, кто решается, приглашать ли Евгения на свой праздник, с уверенностью отвечаю - конечно приглашать! Это будет изюминкой любого мероприятия! Спасибо еще раз!!',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_135%2Fall'
        },
        {
            id: 2,
            photo: 'photo8.PNG',
            fullName: 'Олег Юша',
            text: 'Если вы решили заказать на свое торжество Иллюзионно-лазерное шоу от Евгения Филона, то вы точно не прогадаете! Яркие эмоции, прекрасное впечатление. Это то, что нужно вам, это то, что я вам рекомендую. Берите и заказывайте, праздник будет мега крутым!',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_135%2Fall',
            videoLink:'https://www.youtube.com/watch?v=o0cvjoAiwk8&feature=youtu.be'
        },
        {
            id: 3,
            photo: 'photo4.PNG',
            fullName: 'Игорь Воеводин',
            text: 'Хотим выразить огромную благодарность Евгению за подареный нам вечер!!! Гости в восторге, до сих пор отходим от впечатления !!! Все было на высоте !! Вы нас очень удивили и порадовали !!)',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_130%2Fall'
        },
        {
            id: 4,
            photo: 'photo2.PNG',
            fullName: 'Диана Третьякевич',
            text: 'Хотим сказать огромное спасибо Жене за проделанную работу на нашем торжестве! Это было невероятное, завораживающее, незабываемое шоу!!! Мы и наши гости под большим впечатлением!!! Лазерное шоу стало "вишенкой на торте"! Захватывающе!!!\n' +
            'Все гости до сих пор нам говорят о своих впечатлениях! И мы их понимаем! Восторг!' +
            'Женечка, ты крутой! Мы желаем тебе таких же ярких выступлений, удивлённой и восторженной публики, новых идей, успешных исполнений и море-море-море энергии!! То, что ты делаешь - невероятно!\n' +
            'Спасибо, что разделил с нами наш праздник!!! 👏👏👏👍🔮🎆🎇🎊🃏🌟',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_127%2Fall'
        },

        {
            id: 5,
            photo: 'photo5.PNG',
            fullName: 'Елена Кондратович',
            text: 'Хотелось бы выразить большую благодарность Жене за его прекрасное выступление на нашем небольшом мероприятии) Благодаря ему, у нас получился отличный праздник, с массой улыбок и положительных эмоций. Наши гости выразили свой восторг и восхищение происходящим. Лазерное шоу – это просто что-то невероятное. Описать словами невозможно, это просто нужно увидеть)  С удовольствием приглашайте его на свои мероприятия! Женя, огромное тебе спасибо! Все были в полном восторге!',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_117%2Fall'
        },
        {
            id: 6,
            photo: 'photo6.PNG',
            fullName: 'Юлия Матюк',
            text: 'Хочу оставить отзыв о шоу. Все было фантастически. То, что ты делаешь - невероятно! Очень ярко и феерично.. Остались только позитивные эмоции. Спасибо вам за яркие воспоминания которые у меня остались.',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_44%2Fall'
        },
        {
            id: 7,
            photo: 'photo7.PNG',
            fullName: 'Милена Минич',
            text: 'Мы безумно рады, что этот талантливый и очень харизматичный молодой человек выступал на нашей свадьбе !! Все было на высшем уровне!! Это было настоящее чудо!!! Еще долго будем вспоминать ваши выступления! Огромное спасибо)',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_61%2Fall'
        },
        {
            id: 8,
            photo: 'photo3.PNG',
            fullName: 'Юлька Садовская',
            text: 'Большое спасибо Евгению за проведенные шоу на нашей свадьбе! Все было супер! Фокусы удивили всех!! Лазерное шоу было 🔥🔥🔥 и сам Евгений был на высоте! Мы желаем тебе таких же ярких выступлений, удивлённой и восторженной публики, новых идей, успешных исполнений и море-море-море энергии!! Заказывайте - не пожалеете! Это будет изюминкой любого мероприятия! Спасибо еще раз!!',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_126%2Fall'
        },
    ];

    let reviewsAllCount = REVIEWS_DATA.length;

    let VISIBLE_REVIEWS_COUNT = 4; //Number of Reviews On Page (default)
    let REVIEWS_INCREMENT     = 4; //Number of Reviews that will be Showed after 'Read more' click

    //Changing comments count for Mobile Version
    let windowWidth = window.innerWidth;
    if(windowWidth < 768){
        VISIBLE_REVIEWS_COUNT = 2;
        REVIEWS_INCREMENT = 2;
    }

    const REVIEWS_LIST_LEFT_COLUMN  = document.getElementById('review-list-left-column');
    const REVIEWS_LIST_RIGHT_COLUMN = document.getElementById('review-list-right-column');
    const SHOW_MORE_BUTTON          = document.getElementById('show-more-button');

    //Printing reviews in 2 columns (params: reviewsList, node1, node2).
    function printReviews(reviews, leftColumnNode, rightColumnNode) {
        reviews.forEach(function (review, key) {
            const isEven = key % 2 === 0;
            const node = isEven ? leftColumnNode : rightColumnNode;
            if (key < VISIBLE_REVIEWS_COUNT) {
                node.innerHTML += `<li class="review-item">
                                        <a class="review-header" href="${review.commentLink}" target="_blank">
                                            <img src="./img/customerPhotos/` + review.photo + `"/>
                                            <span class="full-name">${review.fullName}</span>
                                        </a>
                                        <div class="review-body">${review.text}<br><a class="videoLink" href="${review.videoLink || ''}" target="_blank">${review.videoLink ? 'Смотреть отзыв на YouTube' : ''}</a></div> </div>
                                    </li>`;
            }
        });
    }

    //printReviews(REVIEWS_DATA, REVIEWS_LIST_LEFT_COLUMN, REVIEWS_LIST_RIGHT_COLUMN);

    /* Working with SCROLLING  */
    const SCROLLING_TIME = 1500;

    function getElementY(query) {
        return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top - 100
    }
    function doScrolling(element, duration) {
        let startingY = window.pageYOffset;
        let elementY = getElementY(element);
        let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
        let diff = targetY - startingY + 5;
        let easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 };
        let start;

        if (!diff) return;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            let time = timestamp - start;
            let percent = Math.min(time / duration, 1);
            percent = easing(percent);

            window.scrollTo(0, startingY + diff * percent);

            if (time < duration) {
                window.requestAnimationFrame(step)
            }
        })
    }

    const MENU_LINKS = [
        {node: document.getElementById('salary-link'), navigateToID: '#salary-section'},
        {node: document.getElementById('coach-link'), navigateToID: '#coach-section'},
        {node: document.getElementById('faq-link'), navigateToID: '#faq-section'},
        {node: document.getElementById('process-link'), navigateToID: '#education-section'},
        {node: document.getElementById('enroll-link'), navigateToID: '#enroll-section'},
    ];

    MENU_LINKS.forEach(link => {
        link.node.addEventListener('click', function () {
            doScrolling(link.navigateToID, SCROLLING_TIME)
        });
    });

    /* CallBack Forms sending  */

    $("#enroll-form").submit(function(e) {
        let ths = $(this);
        e.preventDefault;
        $.ajax({
            type: 'POST', url: 'mail.php', data: $(this).serialize()
        }).done(function() {
            alert('Спасибо за заявку!');
            setTimeout(function() {
                ths.trigger("reset");}, 1000);
        });
        return false;
    });

    /* Sliders init */

    // let SLIDES_TO_SHOW = 5;
    // if(windowWidth < 768) SLIDES_TO_SHOW = 2;
    //
    // $('.slider-1').slick({
    //     infinite: true,
    //     arrows:true,
    //     slidesToShow: SLIDES_TO_SHOW,
    //     autoplay:true,
    //     autoplaySpeed:2000
    // });
})();