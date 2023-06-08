interface Contact {
  name: string
  bgImg: string
  links: Link[]
}

interface Link {
  icon: JSX.Element
  link: string
}