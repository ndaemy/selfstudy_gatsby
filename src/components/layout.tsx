import React from "react"
import { Link } from "gatsby"

interface ListLinkProps {
  to: string
  children: React.ReactNode
}

function ListLink({ to, children }: ListLinkProps) {
  return (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
