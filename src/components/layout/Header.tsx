export default function Header() {
    return (
        <>
            {/* GOV BAR */}
            <div className="gov-bar">
                <div className="gov-left">
                    <img
                        src="src/assets/gerb.png"
                        alt="Герб України"
                        className="gerb"
                    />
                    <span>Державна служба статистики України</span>
                </div>

                <div className="gov-actions">
                    <span>01 травня 2026</span>
                    <a>UA</a> | <a>EN</a>
                </div>
            </div>


            <header className="main-header">
                <h1>Статистичний портал</h1>
                <p>Офіційні дані та аналітика</p>
            </header>


            <nav className="top-nav">
                <a className="active">Головна</a>
                <a>Публікації</a>
                <a>Бази даних</a>
                <a>Показники</a>
                <a>Регіони</a>
                <a>Про нас</a>
            </nav>
        </>
    )
}