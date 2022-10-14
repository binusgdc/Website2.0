import type { NextPage } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BlogComp from "../components/BlogComp"
function Blog() {
    return (
        <>
            <Header />
            <BlogComp />
            <Footer />
        </>
    )
}

const BlogPage: NextPage = () => {
    return <div></div>
}
export default Blog
