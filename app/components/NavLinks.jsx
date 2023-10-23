import Link from 'next/link'
import React from 'react'

const NavLinks = ({href, name}) => {
  return (
    <>
      <Link href={href}>{name}</Link>
    </>
  )
}

export default NavLinks
