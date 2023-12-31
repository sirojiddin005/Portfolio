const hom = document.getElementById('main');

const data = [
    {
       discription: 'Project description',
       topic: 'Developing Blog UI using Css, Sass, Bootsrap, React',
       text1: 'The main goal is to strengthen knowledge about React, improve skills and make mobile friendly',
       href: 'Images/img 1.jpg',
       link: 'https://sirojiddin-blog-react.netlify.app'
    },
    {
        discription: 'Project description',
        topic: 'Developing Blog UI using Css, Sass, Bootsrap',
        text1: 'The main goal of the project is converting figma design into html code using Css, Sass, Bootsrap, and make mobile friendly',
        href: 'Images/img 2.jpg',
        link: 'https://sirojiddin-blog-sass.netlify.app'
     },
     {
        discription: 'Project description',
        topic: 'A dictionary built using the api at dictionaryapi.dev',
        text1: 'Building a dictionary using the api at dictionaryapi.dev and strengthening knowledge of the REST API using JavaScript',
        href: 'Images/img 4.jpg',
        link: 'https://sirojiddin-block-dictionaryapi.netlify.app'
     },
     {
        discription: 'Project description',
        topic: 'Simple Blog UI using React Js',
        text1: 'The main goal of the project is to strengthen basic knowledge of React',
        href: 'Images/img 5.jpg',
        link: 'https://sirojiddin-blog-react-wix04.netlify.app'
     },
     {
        discription: 'Project description',
        topic: 'Simple Blog UI using pure Html and Css only',
        text1: 'The main goal of the project is converting figma design into pure Html and Css and make mobile friendly',
        href: 'Images/img 6.jpg',
        link: 'https://sirojiddin-blog-music.netlify.app'
     },
     {
        discription: 'Project description',
        topic: 'Simple Blog UI using Html, Css, JavaScript, Sass',
        text1: 'The main goal of the project is to strengthen knowledge of Html, Css, Sacss, JavaScript',
        href: 'Images/img 7.jpg',
        link: 'https://sirojiddin-blog-5slov.netlify.app'
     },
];

data.map((v) => {
    const div = document.createElement('div');
    div.className = 'd-flex justify-content-between works mt-5 mb-5'

    div.innerHTML = `
    <div class="mt-4 me-3 anima2 text">
    <h5 class='mb-5'>${v.topic}</h5>
    <h6 class='mt-5'>${v.discription}</h6>
    <p class='pe-4'>${v.text1}</p>
    </div>
    <a href="${v.link}" target="_blank" class="shadow card anima1"><img src="${v.href}" alt="" class="rounded"></a>
    `
    hom.appendChild(div)
})