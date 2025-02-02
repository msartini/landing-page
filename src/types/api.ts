export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}


export type LandingPageProps = {
  data: {
    attributes: {
      logo: {
        data: {
          attributes: LogoProps
        }
      }
      header: HeaderProps
      sectionAboutProject: SectionAboutProjectProps
    }
  }
}