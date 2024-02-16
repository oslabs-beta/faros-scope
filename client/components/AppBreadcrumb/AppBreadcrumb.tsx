import React from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
    const currentLocation = useLocation().pathname

    const getRouteName = (pathname: string, routes: any): string | false => {
        const currentRoute = routes.find((route: any) => route.path === pathname)
        return currentRoute ? currentRoute.name : false
    }

  const getBreadcrumbs = (location: string) => {
    const breadcrumbs: { pathname: string; name: string; active: boolean }[] = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="my-0">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)