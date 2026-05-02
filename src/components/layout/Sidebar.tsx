export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-title">
                🇺🇦 Держстат
            </div>

            <nav className="sidebar-nav">
                <a className="active">Головна</a>
                <a>Економіка</a>
                <a>Населення</a>
                <a>Бізнес</a>
                <a>Регіони</a>
                <a>Звіти</a>
            </nav>
        </aside>
    )
}