import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function TwoColumLayout({ extraClass, heading, pera, imgSrc, elementIcon }) {
    return (
        <div className={`twoColumnLayout ${extraClass}`}>
            <div className="first">
                <h2>{heading}</h2>
                <p>{pera}</p>
            </div>
            <div className="second">
                <LazyLoadImage src={imgSrc} />
            </div>
        </div>
    )
}
