import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
            
        </div>
        <img className="headerImg" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/06/lenguaje-programacion.jpg" alt="" />
    </div>
  )
}
