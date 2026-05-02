import { useState } from 'react'

const data = [
    { name: 'ВВП', y2023: '160', y2024: '170', y2025: '178', trend: 'Зростання' },
    { name: 'Інфляція', y2023: '10.5%', y2024: '8.3%', y2025: '7.1%', trend: 'Зниження' },
    { name: 'Безробіття', y2023: '9.1%', y2024: '8.4%', y2025: '7.9%', trend: 'Покращення' },
    { name: 'Населення', y2023: '41.2M', y2024: '40.8M', y2025: '40.5M', trend: 'Скорочення' }
]

export default function StatsTable() {
    const [query, setQuery] = useState('')

    const filtered = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    )


    const highlight = (text: string) => {
        if (!query) return text

        const parts = text.split(new RegExp(`(${query})`, 'gi'))

        return parts.map((part, i) =>
            part.toLowerCase() === query.toLowerCase()
                ? <mark key={i}>{part}</mark>
                : part
        )
    }

    return (
        <section className="section">
            <h2>Статистичні дані</h2>


            <input
                className="search-input"
                type="text"
                placeholder="Пошук показника..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <div className="table-wrapper">
                <table className="stat-table">
                    <thead>
                    <tr>
                        <th>Показник</th>
                        <th>2023</th>
                        <th>2024</th>
                        <th>2025</th>
                        <th>Тренд</th>
                    </tr>
                    </thead>

                    <tbody>
                    {filtered.map((row, index) => (
                        <tr key={index}>
                            <td>{highlight(row.name)}</td>
                            <td>{row.y2023}</td>
                            <td>{row.y2024}</td>
                            <td>{row.y2025}</td>
                            <td className={row.trend === 'Зростання' ? 'up' : 'down'}>
                                {row.trend}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {filtered.length === 0 && (
                <p style={{ marginTop: '10px' }}>
                    Нічого не знайдено
                </p>
            )}
        </section>
    )
}