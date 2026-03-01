import React from "react";
import "./University.css";

const University = () => {
  return (
    <div className="university content">

      <header className="university-hero">
        <div className="hero-text">
          <h1>Пермский государственный национальный исследовательский университет</h1>
          <p>Один из старейших классических университетов России, сочетающий традиции и инновации в образовании и науке.</p>
          <a href="https://psu.ru/for-applicants/" className="button-link">Поступить в университет</a>
        </div>
      </header>

      <section className="mission-section">
        <h2>Миссия университета</h2>
        <p>
          Университет стремится к созданию и распространению знаний, формированию лидеров, способных внести вклад
          в развитие науки, культуры и общества. Мы объединяем научные исследования, инновации и качественное образование.
        </p>
      </section>

      <section className="education-section">
        <h2>Образование</h2>
        <p>
          ПГНИУ предлагает широкий выбор образовательных программ бакалавриата, магистратуры и аспирантуры,
          охватывающих естественные, гуманитарные, технические и социально-экономические науки.
        </p>
        <a href="https://psu.ru/for-applicants/" className="button-link">
          Программы обучения
        </a>
      </section>

      <section className="science-section">
        <h2>Наука и исследования</h2>
        <p>
          Университет является ведущим центром научных исследований в области физики, биологии, химии,
          гуманитарных и ИТ-наук. Академическое сообщество ПГНИУ активно участвует в международных проектах
          и внедрении инновационных технологий.
        </p>
        <a href="https://psu.ru/nauka/" className="button-link">
          Подробнее о науке
        </a>
      </section>

      <section className="news-section">
        <h2>Новости университета</h2>
        <div className="news-grid">
          <a href="https://psu.ru/news/" className="news-card">
            <img src="/public/news.png" alt="Новости ПГНИУ" />
            <h3>Последние события и достижения ПГНИУ</h3>
            <p>Читайте о научных открытиях, студенческих проектах и культурных инициативах университета.</p>
          </a>
          <a href="https://psu.ru/events/" className="news-card">
            <img src="/public/events.png" alt="События ПГНИУ" />
            <h3>События и мероприятия</h3>
            <p>Конференции, выставки, фестивали и олимпиады — узнайте о жизни ПГНИУ.</p>
          </a>
        </div>
      </section>

      <section className="contacts-section">
        <h2>Контакты</h2>
        <p>
          <strong>Адрес:</strong> г. Пермь, ул. Букирева, 15<br />
          <strong>Телефон:</strong> <a href="tel:+73422396435">+7 (342) 239‑64‑35</a><br />
          <strong>Email:</strong> <a href="mailto:info@psu.ru">info@psu.ru</a>
        </p>
        <div className="contact-links">
          <a href="https://vk.com/permuniversity">VK</a> ·{" "}
          <a href="https://t.me/permuniversity">Telegram</a> ·{" "}
          <a href="https://rutube.ru/channel/23634985/">Rutube</a>
        </div>
      </section>

      <footer className="university-footer">
        <p>© Пермский государственный национальный исследовательский университет, 2025</p>
        <a href="https://one-touch.ru/">Разработка и продвижение</a>
      </footer>

    </div>
  );
};

export default University;
