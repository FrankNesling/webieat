import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
    <Layout navbarTitle="I am sorry.">
        <div className="main-text">
            <h1>404: Not Found</h1>
            <p>Remove yourself</p>
        </div>
    </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
