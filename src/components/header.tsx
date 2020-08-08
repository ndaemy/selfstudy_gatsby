import React from "react"

interface Props {
  headerText: string
}

function Header({ headerText }: Props) {
  return <h1>{headerText}</h1>
}

export default Header
