import React from 'react'
import styled from 'styled-components'

const Texto=styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato',sans-serif;
    font-weight: 700;
    text-align: center;
`
export default function Error({children}) {
  return (
    <Texto>{children}</Texto>
  )
}
