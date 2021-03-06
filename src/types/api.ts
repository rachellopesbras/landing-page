export type LogoProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProps = {
  titleAbout: string
  descriptionAbout: string
  imageAbout: ImageProps
}

export type IconTechProps = {
  icon: {
    url: string
  }
  titleIcon: string
}

export type SectionTechProps = {
  titleTech: string
  iconTech: IconTechProps[]
}

export type Concepts = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

export type Module = {
  title: string
  subTitle: string
  description: string
}

export type SectioNModulsProps = {
  title: string
  module: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type SectionPricingProps = {
  totalPrice: number
  qtdParcelas: number
  benefits: string
  precoPorParcela: number
  buttonPricing: {
    label: string
    url: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  SectionAbout: SectionAboutProps
  SectionTech: SectionTechProps
  SectionConcepts: SectionConceptsProps
  SectioNModels: SectioNModulsProps
  SectionAgenda: SectionAgendaProps
  SectionPricing: SectionPricingProps
}
