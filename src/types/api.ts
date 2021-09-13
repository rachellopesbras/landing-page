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

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  SectionAbout: SectionAboutProps
  SectionTech: SectionTechProps
}
