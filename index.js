// burger

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');

function burgerToggleClass() {
    burger.classList.toggle('header__burger-active');
    nav.classList.toggle('nav-active');
}

burger.addEventListener('click', burgerToggleClass);

// categories

const categoriesLink = document.querySelector('.categories__link');
const categoriesList = document.querySelector('.categories__wrapper');

function categoriesVisible() {
    categoriesList.style.display = 'block';
}

function categoriesHidden() {
    categoriesList.style.display = 'none';
}

categoriesLink.addEventListener('mouseover', categoriesVisible);
categoriesLink.addEventListener('mouseout', categoriesHidden);
categoriesList.addEventListener('mouseover', categoriesVisible);

// create card

const content = document.querySelector('.content');

function createCard(element) {
    const card = document.createElement('div');
    card.classList.add('news__card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('news__img');
    card.append(cardImage);

    const imageLink = document.createElement('a');
    imageLink.href = '#';
    cardImage.append(imageLink);

    const image = document.createElement('img');
    image.src = element.fields.thumbnail;
    image.alt = '';
    imageLink.append(image);

    const cardContent = document.createElement('div');
    cardContent.classList.add('news__content');
    card.append(cardContent);

    const contentText = document.createElement('div');
    contentText.classList.add('content__text');
    cardContent.append(contentText);

    const cardTitle = document.createElement('a');
    cardTitle.classList.add('news__title');
    cardTitle.href = '#';
    cardTitle.innerText = element.fields.headline;
    contentText.append(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('news__text');
    cardText.innerText = element.fields.bodyText;
    contentText.append(cardText);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('news__info');
    cardContent.append(cardInfo);

    const cardDate = document.createElement('span');
    cardDate.classList.add('news__date');
    cardDate.innerText = element.webPublicationDate.match(/\d\d\d\d-\d\d-\d\d/g);
    cardInfo.append(cardDate);

    const cardLink = document.createElement('a');
    cardLink.classList.add('news__link');
    cardLink.href = '#';
    cardLink.innerText = 'Read more';
    cardInfo.append(cardLink);

    content.append(card);
}

function createMainCard(element) {
    const card = document.createElement('div');
    card.classList.add('news__card');
    card.classList.add('main__news');

    const cardImage = document.createElement('div');
    cardImage.classList.add('news__img');
    card.append(cardImage);

    const imageLink = document.createElement('a');
    imageLink.href = '#';
    cardImage.append(imageLink);

    const image = document.createElement('img');
    image.src = element.fields.thumbnail;
    image.alt = '';
    imageLink.append(image);

    const cardContent = document.createElement('div');
    cardContent.classList.add('news__content');
    card.append(cardContent);

    const cardTitle = document.createElement('a');
    cardTitle.classList.add('news__title');
    cardTitle.href = '#';
    cardTitle.innerText = element.fields.headline;
    cardContent.append(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('news__text');
    cardText.innerText = element.fields.bodyText;
    cardContent.append(cardText);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('news__info');
    cardContent.append(cardInfo);

    const cardDate = document.createElement('span');
    cardDate.classList.add('news__date');
    cardDate.innerText = element.webPublicationDate.match(/\d\d\d\d-\d\d-\d\d/g);
    cardInfo.append(cardDate);

    const cardLink = document.createElement('a');
    cardLink.classList.add('news__link');
    cardLink.href = '#';
    cardLink.innerText = 'Read more';
    cardInfo.append(cardLink);

    content.append(card);
}

// API

const url = 'https://content.guardianapis.com/search?q=trending&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c';

async function getNews() {
    let response = await fetch(url);
    let data = await response.json();
    let { results } = data.response;
    console.log(results[0]);

    createMainCard(results[0]);

    results.forEach(element => {
        createCard(element);
    });
}

getNews();
