import React from "react";
export const LangContext = React.createContext();

export const ruLang = {
    lang: 'ru',

    mainPhoto: 'https://img.hhcdn.ru/photo/671149383.jpeg?t=1659447179&h=Uvz8hdMVES0GBeFxpJ36zw',

    //header
    headerName: 'Дворянинов Павел',

    //about
    aboutTitle: 'Добро пожаловать',
    aboutName: `Привет! Я Павел,`,
    aboutText: 'Меня зовут Павел. Я являюсь FrontEnd разработчиком и работаю более года в данном направлении в университете МТУСИ. В работе использую стек технологий ReactJS, Redux и связанные с ним библиотеки. Хорошо знаю нативный JavaScript и последние функции ES. Также учусь и занимаюсь постоянным самообразованием. ',

    //skills
    skillsTitle: 'Навыки',
    skillsText: 'Я являюсь целеустремлённым, трудолюбивым и ответственным молодым человеком. Выполняю работу качественно. Регулярно изучаю документацию, просматриваю видеоуроки, слежу за развитием IT. Нравится FrontEnd разработка, есть стимул и желание работать и развиваться. Далее представлены мои hard и soft навыки.',
    skillsButtonOn: 'Посмотреть все навыки',
    skillsButtonOff: 'Закрыть окно',

    //experience
    experienceTitle: 'Опыт работы',

    experienceWork1Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg.png',
    experienceWork1Company: 'Московский технический университет связи и информатики',
    experienceWork1CompanyAbout: 'Москва, mtuci.ru. Образовательные учреждения Вуз, ссуз колледж, ПТУ',
    experienceWork1Profession: 'Техник-программист',
    experienceWork1ProfessionAbout:
        <div>
            <p>Прошел стажировку под наставничеством ментора. Занимаюсь разработкой и поддержкой web-приложений.</p>
            <h4>1. Разработка пользовательских элементов интерфейса для сайта университета</h4>
            <p>Сайт университета, позволяет обращаться к учебным репозиториям и вести аккаунт студента.</p>
            <p>Достижения:</p>
            <ul>
                <li>Поправил ряд визуальных и логических ошибок элементов сайта</li>
                <li>Разработал коллекцию визуальных элементов интерфейса</li>
                <li>Сверстал и создал web-страницы на основе макетов</li>
            </ul>
            <p>Технологии:</p>
            <p>HTML5/CSS3, JavaScript, PHP, адаптивная вёрстка</p>

            <h4>2. Разработка интерфейса системы управления обучением</h4>
            <p>Система управления обучением, приложение для администрирования учебных курсов в рамках дистанционного обучения. Позволяет вести аккаунт студента и обращаться к учебной библиотеке.</p>
            <p>Достижения:</p>
            <ul>
                <li>Разработал коллекцию визуальных элементов интерфейса приложения</li>
                <li>Провёл рефакторинг кода существующего интерфейса</li>
                <li>Реализовал ряд других web-страниц приложения</li>
            </ul>
            <p>Технологии:</p>
            <p>HTML5/CSS3, JavaScript, адаптивная вёрстка</p>

            <h4>3. Разработал и предложил web-приложение для проведения тестирования студентов</h4>
            <p>SPA приложение разработанное с использованием ReactJS, Redux. Программное обеспечение позволяет проводить тестирование студентов. Реализованы функции добавления, удаления, сортировки и поиска вопросов. Есть возможность создавать коллекции вопросов.</p>
            <p>Достижения:</p>
            <ul>
                <li>Спроектировал и разработал основу приложения</li>
                <li>Реализовал адаптивный интерфейс</li>
                <li>Разработал коллекцию пользовательских форм Formik для работы с Redux Store и API</li>
                <li>Создал Business Logic Layer для работы с Redux Store</li>
                <li>Настроил навигацию приложения с использованием react-router-dom</li>
            </ul>
            <p>Технологии:</p>
            <p>HTML5/CSS3, StyledComponents, ReactJS, Redux, Git, react-router-dom, REST API, formik, функциональные компоненты, React Hooks, JavaScript</p>
            <p><a href="https://pavilius.github.io/questions/">https://pavilius.github.io/questions/</a> </p>
        </div>
    ,
    experienceWork1Period: 'Август 2021 — по настоящее время, 1 год 1 месяц',

    experienceWork2Image: 'https://yt3.ggpht.com/ytc/AMLnZu9j-Hr0yrDdwGk91pgNCiXHKDBX-YA3uvmjCVbezg=s176-c-k-c0x00ffffff-no-rj',
    experienceWork2Company: 'IT-Kamasutra - Курс по программированию React JS',
    experienceWork2CompanyAbout: 'Минск, IT-Kamasutra. ЮТУБ канал, блогер',
    experienceWork2Profession: 'Студент',
    experienceWork2ProfessionAbout:
        <div>
            <p>Прошёл видео-курс от Димыча. Выполнил проектную работу с использованием ReactJS, Redux.</p>
            <h4>1. Разработал социальную сеть для учебного проекта</h4>
            <p>SPA приложение разработанное с использованием ReactJS, Redux. Программное обеспечение позволяет вести личный кибинет и осуществлять follow и unfollow пользователей. Также доступна настройка личных данных пользователя.</p>
            <p>Достижения:</p>
            <ul>
                <li>Спроектировал и разработал основу приложения</li>
                <li>Реализовал адаптивный интерфейс</li>
                <li>Настроил навигацию приложения с использованием react-router-dom</li>
                <li>Реализовал запросы к серверному API приложения при помощи асинхронных функций</li>
                <li>Создал Business Logic Layer и Data Access Layer для работы с Redux Store и серверным API</li>
                <li>Организовал постраничный вывод с автоматической подгрузкой записей с сервера</li>
            </ul>
            <p>Технологии:</p>
            <p>HTML5/CSS3, StyledComponents, ReactJS, Redux, Git, react-router-dom, REST API, formik, функциональные компоненты, React Hooks, JavaScript, асинхронность, redux-thunk, HOC, redux-form</p>
            <p><a href="https://pavilius.github.io/react-app/">https://pavilius.github.io/react-app/</a></p>
            <p><a href="https://pavilius.github.io/social-network/">https://pavilius.github.io/social-network/</a></p>
        </div>
    ,
    experienceWork2Period: 'Декабрь 2021 — Февраль 2022, 3 месяца',

    //projects
    projectsTitle: 'Проекты',
    projectsText: 'Здесь представлены мои проекты, которые я разрабатываю в свободное от учёбы и работы время. Также данные проекты можно посмотреть на Git. Кликай по карточке :)',
    projectsButtonOn: 'Посмотреть все проекты',
    projectsButtonOff: 'Закрыть окно',

    projectsWork1Text: 'Адаптивный сайт портфолио',
    projectsWork2Text: 'Сайт визитка для интернет магазина',
    projectsWork3Text: 'Социальной сеть по курсу IT-KAMASUTRA',
    projectsWork4Text: 'Рефакторинг учебной социальной сети',
    projectsWork5Text: 'Приложение для тестирования студентов',
    projectsWork6Text: 'Приложение портфолио ReactJS',
    projectsWork1Link: 'https://pavilius.github.io/project-1/',
    projectsWork2Link: 'https://pavilius.github.io/project-2-gp/',
    projectsWork3Link: 'https://pavilius.github.io/react-app/',
    projectsWork4Link: 'https://pavilius.github.io/social-network/',
    projectsWork5Link: 'https://pavilius.github.io/questions/',
    projectsWork6Link: 'https://pavilius.github.io/portfolio/',  

    //education
    educationTitle: 'Образование',
    educationUniversity1Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg.png',
    educationUniversity1Title: 'Московский технический университет связи и информатики',
    educationUniversity1Direction: 'ИТ, Информатика и вычислительная техника (09.03.01)',
    educationUniversity1Rank: '2018-2022 БАКАЛАВРИАТ, ДИПЛОМ С ОТЛИЧИЕМ',

    educationUniversity2Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg.png',
    educationUniversity2Title: 'Московский технический университет связи и информатики',
    educationUniversity2Direction: 'ИТ, Информатика и вычислительная техника (09.04.01)',
    educationUniversity2Rank: '2022-2024 МАГИСТРАТУРА',

    educationSpacer: 'Курсы',

    educationCourse1Title: 'JavaScript Основы',
    educationCourse1Author: 'Владилен Минин',

    educationCourse2Title: 'React JS фундаментальный курс от А до Я',
    educationCourse2Author: 'Ulbi TV',

    educationCourse3Title: 'Курс "React JS - путь самурая 1.0"',
    educationCourse3Author: 'IT-KAMASUTRA',

    educationCourse4Title: 'Курсы английского языка - уровень B1-B2',
    educationCourse4Author: 'Онлайн школа EnglishToYou',

    //footer
    footerLearnMore: 'УЗНАЙТЕ БОЛЬШЕ',
    footerCreatedBy: 'Created by Pavel Dvoryaninov 2022',
    footerResume: 'https://hh.ru/resume/2988055fff086fad150039ed1f6e683776704a',

    //navbar
    navbarName: 'Дворянинов Павел',
    navbarWork: 'FrontEnd разработчик',
    navbarLocation: 'Москва, 22 года',

    about: 'Обо мне',
    contacts: 'Контакты',
    experience: 'Опыт работы',
    education: 'Образование',
    projects: 'Проекты',
    skills: 'Навыки',
};

export const enLang = {
    lang: 'en',

    mainPhoto: 'https://img.hhcdn.ru/photo/671149383.jpeg?t=1659447179&h=Uvz8hdMVES0GBeFxpJ36zw',

    //header
    headerName: 'Pavel Dvoryaninov',

    //about
    aboutTitle: 'Welcome to my Profile',
    aboutName: `Hi! I'm Pavel,`,
    aboutText:'My name is Pavel. I am a FrontEnd developer and have been working in this field for over a year at MTUCI University. In my work I use the ReactJS technology stack, Redux and related libraries. Good knowledge of native JavaScript and the latest ES features. I also study and am engaged in constant self-education.',

    //skills
    skillsTitle: 'Skills',
    //
    skillsText: 'I am a purposeful, hardworking and responsible young man. I do quality work. I regularly study the documentation, watch video tutorials, follow the development of IT. I like FrontEnd development, I have an incentive and a desire to work and develop. Below are my hard and soft skills. ',
    //
    skillsButtonOn: 'Watch all Skills',
    skillsButtonOff: 'Close Skills',

    //experience
    experienceTitle: 'Experince',

    experienceWork1Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg.png',
    experienceWork1Company: 'Moscow Technical University of Communications and Informatics',
    experienceWork1CompanyAbout: 'Educational Institutions - Higher Education Institution, Secondary Specialized College, College, Vocational School',
    experienceWork1Profession: 'Software engineer',
    experienceWork1ProfessionAbout:
        <div>
            <p>Completed an internship under the guidance of a mentor. I develop and support the web applications.</p>
            <h4>1. User interface elements for the university website development</h4>
            <p>The website of the university allows you to access educational repositories and maintain a student account.</p>
            <p>Achievements:</p>
            <ul>
                <li>Fixed a number of visual and logical errors of site elements</li>
                <li>Developed a collection of visual interface elements</li>
                <li>Designed and created web pages based on layouts</li>
            </ul>
            <p>Technologies:</p>
            <p>HTML5/CSS3, JavaScript, PHP, Adaptive layout</p>

            <h4>2. The learning management system interface development</h4>
            <p>Learning Management System, an application for the training courses administration within the framework of distance learning. Allows you to maintain a student account and access the educational library.</p>
            <p>Achievements:</p>
            <ul>
                <li>Developed a collection of visual elements of the application interface</li>
                <li>Refactored the code of the existing interface</li>
                <li>Developed a number of other web pages of the application</li>
            </ul>
            <p>Technologies:</p>
            <p>HTML5/CSS3, JavaScript, Adaptive layout</p>

            <h4>3.Developed and offered a web application for testing students</h4>
            <p>SPA application has been developed using ReactJS, Redux. The software allows testing students. Functions for adding, deleting, sorting and searching for questions was developed. It is possible to create collections of questions.</p>
            <p>Achievements:</p>
            <ul>
                <li>Designed and developed the basis of the application</li>
                <li>Created a responsive interface</li>
                <li>Developed a collection of Formik custom forms to work with the Redux Store and API</li>
                <li>Created Business Logic Layer to work with Redux Store</li>
                <li>Set up app navigation using react-router-dom</li>
            </ul>
            <p>Technologies:</p>
            <p>HTML5/CSS3, StyledComponents, ReactJS, Redux, Git, react-router-dom, REST API, formik, functional components, React Hooks, JavaScript</p>
            <p><a href="https://pavilius.github.io/questions/">https://pavilius.github.io/questions/</a> </p>
        </div>
    ,
    experienceWork1Period: 'August 2021 — currently, 1 year 1 month',

    experienceWork2Image: 'https://yt3.ggpht.com/ytc/AMLnZu9j-Hr0yrDdwGk91pgNCiXHKDBX-YA3uvmjCVbezg=s176-c-k-c0x00ffffff-no-rj',
    experienceWork2Company: 'IT-Kamasutra - Programming course React JS',
    experienceWork2CompanyAbout: 'Minsk, IT-Kamasutra. YouTube channel, blogger',
    experienceWork2Profession: 'Student',
    experienceWork2ProfessionAbout:
        <div>
            <p>Passed a video course from Dimych. Did design work using ReactJS, Redux.</p>
            <h4>1. Developed a social network for an educational project</h4>
            <p>SPA application has been developed using ReactJS, Redux. The software allows you to maintain a personal cabinet and follow and unfollow users. It is also possible to set the user's personal data.</p>
            <p>Achievements:</p>
            <ul>
                <li>Designed and developed the basis of the application</li>
                <li>Created a responsive interface</li>
                <li>Set up app navigation using react-router-dom</li>
                <li>Developed requests to the server API of the application using asynchronous functions</li>
                <li>Created Business Logic Layer and Data Access Layer to work with Redux Store and Server API</li>
                <li>Organized pagination with automatic loading of records from the server</li>
            </ul>
            <p>Technologies:</p>
            <p>HTML5/CSS3, StyledComponents, ReactJS, Redux, Git, react-router-dom, REST API, formik, functional components, React Hooks, JavaScript, асинхронность, redux-thunk, HOC, redux-form</p>
            <p><a href="https://pavilius.github.io/react-app/">https://pavilius.github.io/react-app/</a></p>
            <p><a href="https://pavilius.github.io/social-network/">https://pavilius.github.io/social-network/</a></p>
        </div>
    ,
    experienceWork2Period: 'December 2021 — February 2022, 3 month',

    //projects
    projectsTitle: 'Projects',
    projectsText: 'There are my projects that I develop in my free time from study and work. Also, these projects can be viewed on Git. Click on the card :)',
    projectsButtonOn: 'Watch all Projects',
    projectsButtonOff: 'Close Projects',

    projectsWork1Text: 'Responsive portfolio website',
    projectsWork2Text: 'Website business card for an online store',
    projectsWork3Text: 'Social network, IT-KAMASUTRA course',
    projectsWork4Text: 'Social network refactoring',
    projectsWork5Text: 'Application for testing students',
    projectsWork6Text: 'ReactJS portfolio app',
    projectsWork1Link: 'https://pavilius.github.io/project-1/',
    projectsWork2Link: 'https://pavilius.github.io/project-2-gp/',
    projectsWork3Link: 'https://pavilius.github.io/react-app/',
    projectsWork4Link: 'https://pavilius.github.io/social-network/',
    projectsWork5Link: 'https://pavilius.github.io/questions/',
    projectsWork6Link: 'https://pavilius.github.io/portfolio/', 

    //education
    educationTitle: 'Education',

    educationUniversity1Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg.png',
    educationUniversity1Title: 'Moscow Technical University of Communications and Informatics',
    educationUniversity1Direction: 'IT, Informatics and computer engineering (09.03.01)',
    educationUniversity1Rank: '2018-2022 BACHELOR, DIPLOMA WITH HONORS',

    educationUniversity2Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg.png',
    educationUniversity2Title: 'Moscow Technical University of Communications and Informatics',
    educationUniversity2Direction: 'IT, Informatics and computer engineering (09.04.01)',
    educationUniversity2Rank: '2022-2024 MAGISTRACY',

    educationSpacer: 'Courses',

    educationCourse1Title: 'JavaScript Fundamentals',
    educationCourse1Author: 'Vladilen Minin',

    educationCourse2Title: 'React JS fundamental course from A to Z',
    educationCourse2Author: 'Ulbi TV',

    educationCourse3Title: 'Course "React JS - the way of the samurai 1.0"',
    educationCourse3Author: 'IT-KAMASUTRA',

    educationCourse4Title: 'English courses - Level B1-B2',
    educationCourse4Author: 'Online school EnglishToYou',

    //footer
    footerLearnMore: 'LEARN MORE',
    footerCreatedBy: 'Created by Pavel Dvoryaninov 2022',
    footerResume: 'https://hh.ru/resume/2988055fff086fad150039ed1f6e683776704a',

    //navbar
    navbarName: 'Pavel Dvoryaninov',
    navbarWork: 'FrontEnd developer',
    navbarLocation: 'Moscow, 22 years',

    about: 'About me',
    contacts: 'Contacts',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    skills: 'Skills',
};