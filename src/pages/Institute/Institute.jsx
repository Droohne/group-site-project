import React from "react";
import "./Institute.css";

const Institute = () => {
  return (
    <div className="institute content">
      <header className="institute-header">
        <h1>Институт компьютерных наук и технологий</h1>
        <p className="subtitle">Подразделение Пермского государственного университета</p>
      </header>

      <section className="director-section">
        <h2>Руководство</h2>
        <div className="director-card">
          <img
            src="dederychuk.jpg"
            alt="Дедерчук Людмила Алексеевна"
            className="director-photo"
          />
          <div>
            <h3>Дедерчук Людмила Алексеевна</h3>
            <p>и.о. директора института</p>
            <p>
              <a href="tel:+73422396720">+7 (342) 239-67-20</a> ·{" "}
              <a href="mailto:iknt@psu.ru">iknt@psu.ru</a>
            </p>
            <p>ул. Генкеля, 8, корп. 8, ауд. 412</p>
            <p>
              <a href="https://psu.ru/dekanat/?fakultet=5278">Деканат</a> |{" "}
              <a href="https://psu.ru/departments/?fakultet=5278">Кафедры</a> |{" "}
              <a href="https://psu.ru/fakultety/institut-kompyuternykh-nauk-i-tekhnologiy/#">Лаборатории</a>
            </p>
          </div>
        </div>
      </section>


      <section className="about-section">
        <h2>Об институте</h2>
        <p>
          Институт компьютерных наук и технологий ПГНИУ создан в 2022 году как инструмент
          подготовки кадров для отрасли информационных технологий. Здесь обучаются будущие
          специалисты в области программирования, кибербезопасности, аналитики данных и искусственного интеллекта.
        </p>
      </section>

      <section className="education-section">
        <h2>Образовательные программы</h2>
        <div className="programs-grid">
          <a href="https://psu.ru/programms/infokommunikatsionnye-tekhnologii-i-sistemy-svyazi/">Инфокоммуникационные технологии и системы связи</a>
          <a href="https://psu.ru/programms/informatsionnaya-bezopasnost-avtomatizirovannykh-sistem/">Информационная безопасность автоматизированных систем</a>
          <a href="https://psu.ru/programms/informatsionnye-sistemy-i-tekhnologii/">Информационные системы и технологии</a>
          <a href="https://psu.ru/programms/prikladnaya-informatika/">Прикладная информатика</a>
          <a href="https://psu.ru/programms/kompyuternaya-bezopasnost/">Компьютерная безопасность</a>
          <a href="https://psu.ru/programms/prikladnaya-matematika-i-informatika-iknt/">Прикладная математика и информатика</a>
          <a href="https://psu.ru/programms/fundamentalnaya-informatika-i-informatsionnye-tekhnologii/">Фундаментальная информатика и информационные технологии</a>
        </div>
      </section>

      <section className="faculty-section">
        <h2>Наш факультет</h2>
        <p>
          Программы Института формируются с учётом потребностей ИТ-рынка.
          До 15% учебного процесса студент выбирает сам — индивидуально формируя профиль обучения.
        </p>
        <a
          className="button-link"
          href="https://psu.ru/fakultety/institut-kompyuternykh-nauk-i-tekhnologiy/?show_section=6224"
        >
          Подробнее о факультете
        </a>
      </section>

      <section className="network-section">
        <h2>Сетевые образовательные программы</h2>
        <p>
          Институт сотрудничает с ведущими вузами России, предоставляя студентам возможность осваивать
          образовательные программы в сетевой форме.
        </p>
        <a
          className="button-link"
          href="https://psu.ru/fakultety/institut-kompyuternykh-nauk-i-tekhnologiy/?show_section=6225"
        >
          Узнать подробнее
        </a>
      </section>

      <section className="contacts-section">
        <h2>Контакты</h2>
        <p>
          <strong>Телефон:</strong> <a href="tel:+73422396435">+7 (342) 239-64-35</a><br />
          <strong>Email:</strong> <a href="mailto:info@psu.ru">info@psu.ru</a><br />
          <strong>Адрес:</strong> г. Пермь, ул. Букирева, 15
        </p>
      </section>

      <footer className="institute-footer">
        <p>© Пермский государственный национальный исследовательский университет, 2025</p>
        <p>
          <a href="https://one-touch.ru/">Разработка и продвижение</a>
        </p>
      </footer>
    </div>
  );
};

export default Institute;
