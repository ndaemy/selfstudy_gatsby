import React from "react"
import containerStyles from "./container.module.css"

interface Props {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return <div className={containerStyles.container}>{children}</div>
}

export default Container
