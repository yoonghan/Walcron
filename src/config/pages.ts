enum FilterOption {
  NOT_MENU,
  NOT_FOOTER,
  NOT_SITE_MAP,
}

export type PageConfig = {
  path: string
  display: string
  filterOptions?: FilterOption[]
  order: number
}

const pages: PageConfig[] = [
  {
    path: "/",
    display: "Home",
    filterOptions: [FilterOption.NOT_MENU],
    order: 1,
  },
  {
    path: "/about",
    display: "About Us",
    order: 2,
  },
  {
    path: "/history",
    display: "History",
    order: 4,
  },
  {
    path: "/projects",
    display: "Projects",
    order: 3,
  },
  {
    path: "/projects/lessons",
    display: "Lessons",
    order: 3,
  },
  {
    path: "/projects/checklist",
    display: "Checklist of links",
    filterOptions: [FilterOption.NOT_FOOTER],
    order: 3,
  },
  {
    path: "/projects/messenger",
    display: "Chat/Messenger",
    order: 3,
  },
  {
    path: "/projects/snake",
    display: "Snake Game",
    order: 3,
  },
  {
    path: "/experiments",
    display: "Experiments",
    filterOptions: [FilterOption.NOT_FOOTER],
    order: 4,
  },
  {
    path: "/experiments/amp",
    display: "Accelerated Mobile Pages",
    order: 4,
  },
  {
    path: "/experiments/storybook",
    display: "Storybook",
    order: 4,
  },
  {
    path: "/experiments/performance",
    display: "Performance",
    order: 4,
  },
  {
    path: "/sitemap",
    display: "Site Map",
    filterOptions: [
      FilterOption.NOT_MENU,
      FilterOption.NOT_FOOTER,
      FilterOption.NOT_SITE_MAP,
    ],
    order: 5,
  },
]

export const findPageByPath = (path: string) =>
  pages.find((page) => page.path === path)

export const findAllChildByPath = (path: string) => {
  const parentPath = isSubMenu(path) ? "/" + path.split("/")[1] : path
  return pages.filter((page) => page.path.startsWith(parentPath + "/"))
}

export const sortPagesByPath = (pageConfigs: PageConfig[]) => {
  const pathOrder = ({ order, path }: { order: number; path: string }) => {
    const isPathRoot = path.split("/").length == 2
    return isPathRoot ? `${order}-${path}` : `99-${order}-${path}`
  }
  return pageConfigs.sort((a: PageConfig, b: PageConfig) => {
    const aPathWithOrder = pathOrder(a)
    const bPathWithOrder = pathOrder(b)
    return aPathWithOrder.localeCompare(bPathWithOrder)
  })
}

export const sortedPages = sortPagesByPath(pages)

const isSubMenu = (path: string) => path.split("/").length !== 2

export const sortedMenuPagesWithFilteredHomeAndSubMenu = sortedPages.filter(
  (page) =>
    !page.filterOptions?.includes(FilterOption.NOT_MENU) &&
    !isSubMenu(page.path)
)

export const sortedSiteMapPages = sortedPages.filter(
  (page) => !page.filterOptions?.includes(FilterOption.NOT_SITE_MAP)
)

export const sortedFooterPages = sortedPages.filter(
  (page) => !page.filterOptions?.includes(FilterOption.NOT_FOOTER)
)
