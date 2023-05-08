import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function HeaderSection() {
    return (
        <header>
            <div className="mainDiv">
                <h1>meat-free</h1>
                <LazyLoadImage src='./images/burgerImg.png' />
                <h1>your mind</h1>
            </div>
        </header>
    )
}
