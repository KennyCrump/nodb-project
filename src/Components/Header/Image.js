import React from 'react'

const Image = (props) => {
    return(
        <img className={props.imageClassName} src={props.source} alt="image"/>
    )
}
export default Image