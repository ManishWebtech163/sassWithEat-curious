import React from 'react'
import HeaderSection from './headerSection/HeaderSection'
import SecondSection from './seconndSection/SecondSection'
import ThiredSection from './thiredSection/ThiredSection'
export default function Home() {
    return (
        <section className="homePage">
            <HeaderSection />
            <SecondSection />
            <ThiredSection />
        </section>
    )
}
