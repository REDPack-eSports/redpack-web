import React from 'react'

import { BsArrowDownShort } from "react-icons/bs"

const SectionHeader = (props) => {
  return (
    <div className="flex text-4xl font-black pb-3
                    xs:text-5xl
                    lg:text-6xl
                    xl:text-7xl">
      <h1 id={props.anchor}>{props.name}</h1>
      <BsArrowDownShort className="mt-2 -ml-1"/>
    </div>
  )
}

export default SectionHeader