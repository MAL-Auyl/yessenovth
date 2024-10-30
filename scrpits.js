const translations = {
    en: {
        phone: "Phone: +7 (123) 456-78-90",
        header: {
            home: "Home",
            about: "About Technopark",
            services: "Services",
            residents: "Residents",
            partners: "Partners",
            news: "News",
            contact: "Contact",
            faq: "FAQ",
        },
        hero: {
            title: "Yessenov Technopark - where ideas become reality!",
        },
        news: {
            title: "News",
            cards: [
                {
                    title: "New Laboratory Opened!",
                    description: "Our technopark has opened a new laboratory for biotech startups. Research and development will take place here.",
                },
                {
                    title: "Innovation Seminar",
                    description: "Join us for a seminar where experts will discuss new trends in technology and entrepreneurship.",
                },
                {
                    title: "Startup Competition",
                    description: "Launching a competition for startups! Winners will receive funding and support for their projects.",
                },
            ],
        },
        // Add more translations as needed
    },
    ru: {
        phone: "Телефон: +7 (123) 456-78-90",
        header: {
            home: "Главная",
            about: "О технопарке",
            services: "Услуги",
            residents: "Резиденты",
            partners: "Партнеры",
            news: "Новости",
            contact: "Контакты",
            faq: "FAQ",
        },
        hero: {
            title: "Yessenov Technopark - место, где идеи становятся реальностью!",
        },
        news: {
            title: "Новости",
            cards: [
                {
                    title: "Новая лаборатория открыта!",
                    description: "В нашем технопарке открыта новая лаборатория для стартапов в области биотехнологий. Здесь будут проводиться исследования и разработки.",
                },
                {
                    title: "Семинар по инновациям",
                    description: "Приглашаем вас на семинар, где эксперты расскажут о новых тенденциях в области технологий и предпринимательства.",
                },
                {
                    title: "Конкурс стартапов",
                    description: "Запускаем конкурс для стартапов! Победители получат финансирование и поддержку в развитии своего проекта.",
                },
            ],
        },
        // Add more translations as needed
    },
};
let currentLanguage = 'ru'; // Задайте язык по умолчанию

function changeLanguage(language) {
    currentLanguage = language;
    updateContent();
}

function updateContent() {
    document.querySelector('.contact-info p').textContent = translations[currentLanguage].phone;
    
    // Обновите текст заголовков навигации
    document.querySelectorAll('nav a').forEach((link, index) => {
        const key = Object.keys(translations[currentLanguage].header)[index];
        link.textContent = translations[currentLanguage].header[key];
    });

    // Обновите заголовок главного раздела
    document.querySelector('.hero-content h1').textContent = translations[currentLanguage].hero.title;

    // Обновите блок новостей
    document.querySelector('.news-block h2').textContent = translations[currentLanguage].news.title;
    const newsCards = document.querySelectorAll('.card');
    newsCards.forEach((card, index) => {
        card.querySelector('h3').textContent = translations[currentLanguage].news.cards[index].title;
        card.querySelector('p').textContent = translations[currentLanguage].news.cards[index].description;
    });

    // Обновите другие секции аналогично
}

// Вызовите функцию обновления контента при загрузке страницы
document.addEventListener('DOMContentLoaded', updateContent);
