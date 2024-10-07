export interface NavItem {
  title: string
  icon?: string
  subItems?: {
    title: string
    to: string
  }[]
  to: string
}

export interface NavSection {
  title: string
  navItems: NavItem[]
}

export interface Navigation {
  navItems?: NavItem[]
  navSections?: NavSection[]
}