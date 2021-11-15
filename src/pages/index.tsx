import React from 'react'
import { GetStaticProps } from 'next'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTechnology from 'components/SectionTech'
import SectionModules from 'components/SectionModules'
import SectionAgendaLD from 'components/SectionAgenda'
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
  SectioNModels,
  SectionAgenda,
  SectionPricing
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject {...SectionAbout} />
    <SectionTechnology {...SectionTech} />
    <SectionLineConcepts {...SectionConcepts} />
    <SectionModules {...SectioNModels} />
    <SectionAgendaLD {...SectionAgenda} />
    <PricingBox {...SectionPricing} />
    <SectionAboutUs />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  console.log(landingPage, 'gsggsgsg')
  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
