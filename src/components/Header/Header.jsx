import './Header.css'
export default function Header() {
  return (
    <header className="header" style={{ paddingLeft: '0 !important', position: 'relative' }}>
      <div className="logo" style={{ 
        position: 'absolute', 
        left: '0',
        top: '50%', 
        transform: 'translateY(-50%)',
        zIndex: 2
      }}>
        <img 
          src="/logo.png" 
          alt="Логотип" 
          style={{ 
            height: '93px', 
            width: 'auto' 
          }} 
        />
      </div>
      <div style={{ marginLeft: '100px', flex: 1 }}>  {/* Reduced from 140px to 100px */}
        <h1>ИТ 9-10</h1>
        <p>Институт Компьютерных Наук и Технологий</p>
      </div>
    </header>
  )
}
