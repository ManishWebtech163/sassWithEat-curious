import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Benefits() {
    return (
        <section className="benefitsSection">
            <div className="contents">
                <h2 className='heading'> <span> FEATURES &  </span> BENEFITS</h2>
                <div className="cards">
                    <div className="card">
                        <figure>
                            <LazyLoadImage src='./images/benefit1.png' />
                            <figcaption>PLANT BASED - Plant-protein yumminess, suitable for </figcaption>
                        </figure>
                        <div className="info">
                            <h3>PLANT BASED</h3>
                            <p>Plant-protein yumminess, suitable for vegans (and everyone else).</p>
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <LazyLoadImage src='./images/benefit2.png' />
                            <figcaption>REAL INGREDIENTS - If we don’t know exactly what an ingredient is, we don’t include it.</figcaption>
                        </figure>
                        <div className="info">
                            <h3>REAL INGREDIENTS</h3>
                            <p>If we don’t know exactly what an ingredient is, we don’t include it.</p>
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <LazyLoadImage src='./images/benefit3.png' />
                            <figcaption>UNREAL TEXTURE - It’s not meat. No really, it’s not! </figcaption>
                        </figure>
                        <div className="info">
                            <h3>UNREAL TEXTURE</h3>
                            <p>It’s not meat. No really, it’s not!</p>
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <LazyLoadImage src='./images/benefit4.png' />
                            <figcaption>BLAND IS BANNED - Foodies unite, because here flavour rules. </figcaption>
                        </figure>
                        <div className="info">
                            <h3>BLAND IS BANNED</h3>
                            <p>Foodies unite, because here flavour rules</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
