import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from 'framer-motion'

export default function Benefits() {

    const cardVariants = {
        offscreen: {
            scale: 0
        },
        onscreen: {
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.3,
                // staggerChildren: 0.5,

            }
        }
    };


    return (
        <section className="benefitsSection">
            <div className="contents">
                <h2 className='heading'> <span> FEATURES &  </span> BENEFITS</h2>
                <motion.div className="cards"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ staggerChildren: 0.5 }}
                >

                    <motion.div variants={cardVariants} className="card">
                        <figure>
                            <LazyLoadImage src='./images/benefit1.png' />
                            <figcaption>PLANT BASED - Plant-protein yumminess, suitable for </figcaption>
                        </figure>
                        <div className="info">
                            <h3>PLANT BASED</h3>
                            <p>Plant-protein yumminess, suitable for vegans (and everyone else).</p>
                        </div>
                    </motion.div>
                    <motion.div variants={cardVariants} className="card">
                        <figure>
                            <LazyLoadImage src='./images/benefit2.png' />
                            <figcaption>REAL INGREDIENTS - If we don’t know exactly what an ingredient is, we don’t include it.</figcaption>
                        </figure>
                        <div className="info">
                            <h3>REAL INGREDIENTS</h3>
                            <p>If we don’t know exactly what an ingredient is, we don’t include it.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={cardVariants} className="card">
                        <figure>
                            <LazyLoadImage src='./images/benefit3.png' />
                            <figcaption>UNREAL TEXTURE - It’s not meat. No really, it’s not! </figcaption>
                        </figure>
                        <div className="info">
                            <h3>UNREAL TEXTURE</h3>
                            <p>It’s not meat. No really, it’s not!</p>
                        </div>
                    </motion.div>
                    <motion.div variants={cardVariants} className="card">
                        <figure>
                            <LazyLoadImage src='./images/benefit4.png' />
                            <figcaption>BLAND IS BANNED - Foodies unite, because here flavour rules. </figcaption>
                        </figure>
                        <div className="info">
                            <h3>BLAND IS BANNED</h3>
                            <p>Foodies unite, because here flavour rules</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
