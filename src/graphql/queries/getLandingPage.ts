const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    SectionAbout {
      titleAbout
      descriptionAbout
      imageAbout {
        alternativeText
        url
      }
    }
  }

  fragment sectionTech on LandingPage {
    SectionTech {
      titleTech
      iconTech {
        icon {
          url
          alternativeText
        }
        titleIcon
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    SectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModuls on LandingPage {
    SectioNModels {
      title
      module {
        title
        subTitle
        description
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModuls
    }
  }
`

export default GET_LANDING_PAGE
