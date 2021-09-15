import React from 'react'
import { GetStaticProps } from 'next'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTechnology from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'
import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'
import SectionLineConcepts from 'components/SectionConcepts'

const Index = ({
  logo,
  header,
  SectionAbout,
  SectionTech,
  SectionConcepts,
  SectioNModels
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject {...SectionAbout} />
    <SectionTechnology {...SectionTech} />
    <SectionLineConcepts {...SectionConcepts} />
    <SectionModules {...SectioNModels} />
    <SectionAgenda />
    <PricingBox />
    <SectionAboutUs />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)
  const { SectioNModels } = landingPage
  console.log(SectioNModels)
  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
