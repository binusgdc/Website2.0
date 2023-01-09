import Alamat from "../components/Alamat"
import Connect from "../components/Connect"
import GetTouch from "../components/GetTouch"
import MainLayout from "../layouts/MainLayouts"

function Contact() {
    return (
        <MainLayout title="Contact Us | BGDC">
            <GetTouch />
            <Alamat />
            <Connect />
        </MainLayout>
    )
}

export default Contact
