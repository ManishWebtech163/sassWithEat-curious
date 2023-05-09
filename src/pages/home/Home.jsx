import React from 'react'
import HeaderSection from './headerSection/HeaderSection'
import SecondSection from './seconndSection/SecondSection'
import ThiredSection from './thiredSection/ThiredSection'
import ForthSection from './forthSection/ForthSection'
import FifthSection from './fifthSection/FifthSection'
import Benefits from './benefits_sixthSection/Benefits'
export default function Home() {
    return (
        <section className="homePage">
            <HeaderSection />
            <SecondSection />
            <ThiredSection />
            <ForthSection />
            <FifthSection />
            <Benefits />
        </section>
    )
}
