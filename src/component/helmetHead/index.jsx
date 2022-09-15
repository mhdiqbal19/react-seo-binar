import React from 'react'
import { Helmet } from 'react-helmet-async'

const HelmetHead = (props) => {
  return (
    <Helmet>
        <title>{props.title}</title>
        <meta
            name={props.title}
            content={props.description}
        />
    </Helmet>
  )
}

export default HelmetHead