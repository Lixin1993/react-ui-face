import React from 'react'
import { useRouter } from 'next/router'

const ActiveLink = ({ text, href }) => {
    const router = useRouter()
    const style = {
      marginRight: 10,
      color: router.asPath === href ? 'red' : 'black',
    }
  
    return (
      <a href={href} style={style}>
        {text}
      </a>
    )
  }

const Index = () => {
    return (
        <>
            <ActiveLink text={'button'} href={'/button'} />
        </>
    )

}

export default Index