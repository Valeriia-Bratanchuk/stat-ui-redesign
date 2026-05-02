import Breadcrumbs from '../components/layout/Breadcrumbs'
import Cards from '../components/sections/Cards'
import InfoCards from '../components/sections/InfoCards'
import StatsTable from '../components/sections/StatsTable'
import Publications from '../components/sections/Publications'
import News from '../components/sections/News'

export default function Home() {
    return (
        <>
            <Breadcrumbs />

            <Cards />
            <InfoCards />
            <StatsTable />
            <Publications />
            <News />
        </>
    )
}