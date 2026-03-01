// import './Contacts.css'

export default function Contacts() {
  return (
    <div className="contacts">
      <h2>Контакты</h2>
      <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <img 
          src="/logo.png" 
          alt="Логотип ИКНТ" 
          style={{ height: '250px', width: 'auto' }} 
        />
        <p><strong>Институт компьютерных наук и технологий</strong></p>
        <p><strong>Телефон:</strong> +7 (342) 239-67-20</p>
        <p><strong>Email:</strong> <a href="mailto:iknt@psu.ru">iknt@psu.ru</a></p>
        <p><strong>Адрес:</strong> ул. Генкеля, 8, корп. 8, ауд. 412, г. Пермь</p>
      </div>
    </div>
  )
}
