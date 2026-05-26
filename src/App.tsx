import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { HeroSection } from "./components/sections/HeroSection"
import { IntroSection } from "./components/sections/IntroSection"
import { ClassDefinitionSection } from "./components/sections/ClassDefinitionSection"
import { CriteriaSection } from "./components/sections/CriteriaSection"
import { StruggleTheorySection } from "./components/sections/StruggleTheorySection"
import { TraditionalFormsSection } from "./components/sections/TraditionalFormsSection"
import { ModernStruggleSection } from "./components/sections/ModernStruggleSection"

import { GameSection } from "./components/sections/GameSection"
import { AnalysisPlaceholderSection } from "./components/sections/AnalysisPlaceholderSection"
import { CollectiveOfflineSection } from "./components/sections/CollectiveOfflineSection"
import { HistoricalComparisonSection } from "./components/sections/HistoricalComparisonSection"
import { ConclusionSection } from "./components/sections/ConclusionSection"

function App() {
  return (
    <div className="bg-bg-base min-h-screen text-text-ink overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <ClassDefinitionSection />
        <CriteriaSection />
        <StruggleTheorySection />
        <TraditionalFormsSection />
        <ModernStruggleSection />
        <GameSection />
        <AnalysisPlaceholderSection />
        <CollectiveOfflineSection />
        <HistoricalComparisonSection />
        <ConclusionSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
