import VisiMisi from "../components/About_VisiMisi"
import Aktivitas from "../components/About_Aktivitas"
import PengurusBGDC from "../components/About_Pengurus"
import MainLayout from "../layouts/MainLayouts"

function About() {
    return (
        <MainLayout title="About Us | BGDC">
            <VisiMisi />
            <Aktivitas />
            <PengurusBGDC />
        </MainLayout>
    )
}

export default About
