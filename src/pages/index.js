import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Landing from "../components/landing"
import Collage from "../components/about_img"
import About from "../components/about"
import Works from "../components/works"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <Collage />
    <About />
    <Works />
    <Contact />
  </Layout>
)

export default IndexPage
