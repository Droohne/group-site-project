import { useState } from 'react'
import './Schedule.css'
export default function Schedule() {
  const [activeWeek, setActiveWeek] = useState(1)

  const week1 = [
    { day: "Понедельник", pair: 1, time: "8:00", teacher: "Шилина А. В.", subject: "Математический анализ (практ)", room: "233/8" },
    { day: "Понедельник", pair: 2, time: "9:45", teacher: "Карпов М. Ю.", subject: "Основы информационной безопасности (лек)", room: "202/8" },
    { day: "Понедельник", pair: 3, time: "11:30", teacher: "Гурьянов Д. П.", subject: "Код-ревью (практ)", room: "427/1" },
    { day: "Вторник", pair: 1, time: "8:00", teacher: "Бузмакова М. М.", subject: "Параллельные вычислительные системы (лек)", room: "104/7" },
    { day: "Вторник", pair: 2, time: "9:45", teacher: "Зотина Г. В.", subject: "Математический анализ (лек)", room: "313/1" },
    { day: "Вторник", pair: 3, time: "11:30", teacher: "Панкова Н. И.", subject: "Гибкие методологии разработки (лек)", room: "138б/1" },
    { day: "Четверг", pair: 1, time: "8:00", teacher: "Шилина А. В.", subject: "Математический анализ (практ)", room: "328/12" },
    { day: "Четверг", pair: 2, time: "9:45", teacher: "Оглезнева А. Н.", subject: "Теория вероятностей и мат. статистика (практ)", room: "328/12" },
    { day: "Четверг", pair: 3, time: "11:30", teacher: "Лукиных Н. Н.", subject: "Гибкие методологии разработки (практ)", room: "138а/1" },
    { day: "Пятница", pair: 2, time: "9:45", teacher: "Раевский В. Н.", subject: "Вычислительные системы, сети (лек)", room: "202/8" },
    { day: "Пятница", pair: 3, time: "11:30", teacher: "Раевский В. Н.", subject: "Вычислительные системы, сети (практ)", room: "520/2" },
    { day: "Пятница", pair: 4, time: "13:30", teacher: "Чупин А. В.", subject: "Параллельные вычислительные системы (практ)", room: "522/2" },
    { day: "Суббота", pair: 5, time: "15:15", teacher: "Кетова В. Д.", subject: "Проектная практика программирования (лек)", room: "313/1" }
  ]

  const week2 = [
    { day: "Понедельник", pair: 2, time: "9:45", teacher: "Карпов М. Ю.", subject: "Основы информационной безопасности (лек)", room: "202/8" },
    { day: "Понедельник", pair: 3, time: "11:30", teacher: "Гурьянов Д. П.", subject: "Код-ревью (практ)", room: "427/1" },
    { day: "Вторник", pair: 1, time: "8:00", teacher: "Шилина А. В.", subject: "Математический анализ (практ)", room: "238/8" },
    { day: "Вторник", pair: 2, time: "9:45", teacher: "Зотина Г. В.", subject: "Математический анализ (лек)", room: "313/1" },
    { day: "Среда", pair: 2, time: "9:45", teacher: "Гоберман Н. Х.", subject: "Физическая культура (практ)", room: "Дистанционно" },
    { day: "Четверг", pair: 1, time: "8:00", teacher: "Жданов П. В.", subject: "Основы информационной безопасности (практ)", room: "138б/1" },
    { day: "Четверг", pair: 2, time: "9:45", teacher: "Оглезнева А. Н.", subject: "Теория вероятностей и мат. статистика (практ)", room: "328/12" },
    { day: "Четверг", pair: 3, time: "11:30", teacher: "Лукиных Н. Н.", subject: "Гибкие методологии разработки (практ)", room: "138а/1" },
    { day: "Пятница", pair: 2, time: "9:45", teacher: "Балюкина Л. А.", subject: "Теория вероятностей и мат. статистика (лек)", room: "202/8" },
    { day: "Пятница", pair: 3, time: "11:30", teacher: "Раевский В. Н.", subject: "Вычислительные системы, сети (практ)", room: "520/2" },
    { day: "Пятница", pair: 4, time: "13:30", teacher: "Чупин А. В.", subject: "Параллельные вычислительные системы (практ)", room: "522/2" },
    { day: "Пятница", pair: 5, time: "15:15", teacher: "Оглезнева А. Н.", subject: "Консультация", room: "" }
  ]

  const currentWeek = activeWeek === 1 ? week1 : week2
  const daysOrder = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]

  const groupedByDay = daysOrder.reduce((acc, day) => {
    acc[day] = currentWeek.filter(lesson => lesson.day === day)
    return acc
  }, {})

  return (
    <div className="schedule">
      <h2>Расписание занятий (2 недели)</h2>

      <div className="week-tabs">
        <button
          className={`tab ${activeWeek === 1 ? 'active' : ''}`}
          onClick={() => setActiveWeek(1)}
        >
          Неделя 1 (23–28 марта)
        </button>
        <button
          className={`tab ${activeWeek === 2 ? 'active' : ''}`}
          onClick={() => setActiveWeek(2)}
        >
          Неделя 2 (30 марта – 4 апреля)
        </button>
      </div>

      {daysOrder.map((day, i) => (
        <div key={day} className="day-section" style={{ marginBottom: '2rem', borderBottom: '2px solid #ccc', paddingBottom: '1rem' }}>
          <h3 style={{ textAlign: 'left', marginBottom: '0.5rem', color: '#333' }}>{day}</h3>

          {groupedByDay[day].length > 0 ? (
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Пара</th>
                  <th>Время</th>
                  <th>Предмет</th>
                  <th>Преподаватель</th>
                  <th>Аудитория</th>
                </tr>
              </thead>
              <tbody>
                {groupedByDay[day].map((lesson, index) => (
                  <tr key={index}>
                    <td>{lesson.pair}</td>
                    <td>{lesson.time}</td>
                    <td>{lesson.subject}</td>
                    <td>{lesson.teacher}</td>
                    <td>{lesson.room || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-lessons" style={{ color: '#777', fontStyle: 'italic' }}>Пар нет</p>
          )}
        </div>
      ))}
    </div>
  )
}
