import React from 'react';
import './AboutMe.css';

const AboutMe = () => (
  <main>
    <h1>Про мене</h1>
    <section>
      <h2>Особисто</h2>
      <p>Мене звати Владислав, я почотківець розробник який ще навчається в інституті</p>
    </section>
    <section>
      <h2>Цінності та захоплення</h2>
      <p>Ціную чистий код, люблю вивчати нові технології та працювати в команді.</p>
    </section>
    <section>
      <h2>Мої проєкти</h2>
      <h3>HTML + CSS</h3>
      <ul>
        <li><a href="https://github.com/Vlad-chikara/css-practic" target="_blank" rel="noopener noreferrer">Проєкт 1</a></li>
        <li><a href="https://github.com/Vlad-chikara/htm-css-landing" target="_blank" rel="noopener noreferrer">Проєкт 2</a></li>
      </ul>
      <h3>JavaScript</h3>
      <ul>
        <li><a href="https://github.com/Vlad-chikara/js-DOM1" target="_blank" rel="noopener noreferrer">Проєкт 1</a></li>
        <li><a href="https://github.com/Vlad-chikara/js-DOM2" target="_blank" rel="noopener noreferrer">Проєкт 2</a></li>
      </ul>
      <h3>React</h3>
      <ul>
        <li><a href="https://github.com/Vlad-chikara/react-router-dom" target="_blank" rel="noopener noreferrer">Проєкт 1</a></li>
        <li><a href="https://github.com/Vlad-chikara/gallery-api" target="_blank" rel="noopener noreferrer">Проєкт 2</a></li>
      </ul>
    </section>
  </main>
);

export default AboutMe;
