import * as React from 'react'
import { Link,useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  pageNavLinks,
  pageNavItem,
  pageNavLinkText,
  siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container} id="top">
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={pageNavLinks} id="pageNav">
          <li className={pageNavItem}>
            <Link to="#work" className={pageNavLinkText}>
              work
            </Link>
          </li>
          <li className={pageNavItem}>
            <Link to="#education" className={pageNavLinkText}>
              education
            </Link>
          </li>
          <li className={pageNavItem}>
            <Link to="#about" className={pageNavLinkText}>
              about
            </Link>
          </li>
        </ul>
      </nav>
      <main>
{/*        <h1 className={heading}>{pageTitle}</h1>
*/}        {children}
      </main>
    </div>
  )
}
export default Layout