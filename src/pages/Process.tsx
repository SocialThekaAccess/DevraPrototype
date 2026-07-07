import { useState } from "react";
import { PROCESS_STEPS } from "../data";
import { CornerDownRight, Milestone, HelpCircle, ChevronRight, Check } from "lucide-react";
import SEOMeta from "../components/SEOMeta";

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div id="process-page" className="bg-stone-50 text-stone-900 min-h-screen pt-28 pb-20">
      <SEOMeta
        title="Our 8-Step Architecture & Construction Process | DEVRA Architects"
        description="Understand how we build. From briefing, climatic solar analysis, and working blueprints to regular on-site construction audits, we ensure complete accuracy in every line of brick and concrete."
        keywords={[
          "home construction process india",
          "architectural site supervision chandigarh",
          "how to design a house punjab",
          "devra architects blueprint planning",
          "residential design steps tricity",
        ]}
        path="process"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header section */}
        <div className="border-b border-stone-200 pb-10 mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold mb-3">
            DEVRA ARCHITECTS // WORKFLOW
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">
            Our Execution Process
          </h1>
          <p className="text-stone-600 text-xs md:text-sm mt-3 max-w-2xl font-light leading-relaxed">
            Constructing a custom-designed residence requires thousands of micro-decisions. We organize our workflow into 8 clean, disciplined steps to protect quality and timeline.
          </p>
        </div>

        {/* Interactive process explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left panel: Quick steps links (Span 5) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-mono font-bold block mb-4">
              8-STEP ROADMAP
            </span>
            <div className="flex flex-col space-y-2">
              {PROCESS_STEPS.map((step) => {
                const isActive = step.step === activeStep;
                return (
                  <button
                    key={step.step}
                    id={`process-step-tab-${step.step}`}
                    onClick={() => setActiveStep(step.step)}
                    className={`flex items-center justify-between p-4 border text-left cursor-pointer transition-all ${
                      isActive
                        ? "bg-stone-900 border-stone-900 text-stone-50 pl-6"
                        : "bg-stone-100 hover:bg-stone-200/60 border-stone-200 text-stone-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs ${isActive ? "text-stone-300" : "text-stone-400"}`}>
                        0{step.step}
                      </span>
                      <span className="font-serif text-sm font-medium">
                        {step.title}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "translate-x-1" : "text-stone-400"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right panel: Active step details display (Span 7) */}
          <div className="lg:col-span-7 bg-stone-100 p-8 md:p-12 border border-stone-200 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-300 pb-4">
              <span className="text-stone-400 font-mono text-xs uppercase tracking-widest font-semibold">
                PHASE 0{activeStep} OF 08
              </span>
              <Milestone className="w-5 h-5 text-stone-500" />
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-stone-900 font-medium">
                {PROCESS_STEPS[activeStep - 1].title}
              </h2>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-light">
                {PROCESS_STEPS[activeStep - 1].description}
              </p>
            </div>

            {/* Structured checklist/outcome block for this step */}
            <div className="pt-6 border-t border-stone-300/60 space-y-3">
              <h4 className="text-[11px] uppercase tracking-widest text-stone-900 font-semibold font-mono">
                Key Deliverables & Outcomes
              </h4>
              <ul className="space-y-2 text-xs text-stone-600 font-light">
                {activeStep === 1 && (
                  <>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Program of Spatial Requirements & Bedrooms count</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Complete Budget Matrix & Deadline guidelines</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Visual Mood Board & Aesthetic reference approval</li>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Detailed sun-angle shadows study</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Local municipal bylaws check & building restrictions check</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Prevailing wind maps & site contour mapping</li>
                  </>
                )}
                {activeStep === 3 && (
                  <>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> 2-3 Architectural sketch layout schemes</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Volumetric 3D massing diagram studies</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Central circulation flow approval</li>
                  </>
                )}
                {activeStep === 4 && (
                  <>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> High-fidelity 3D structural visualizers</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Dimensioned plans, elevations & sections package</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Exterior material combination freeze</li>
                  </>
                )}
                {activeStep === 5 && (
                  <>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Custom washroom, wardrobe, & kitchen layouts</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Stone, wood, and paneling material codes list</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Refined 3D interior renders</li>
                  </>
                )}
                {activeStep === 6 && (
                  <>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Structural column-beam layout blueprints</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Comprehensive electrical conduits, switchboards, & HVAC maps</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Master plumbing diagrams & rain drainage package</li>
                  </>
                )}
                {activeStep === 7 && (
                  <>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Frequent site inspections by senior architects</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Structural alignment checks before concrete cast</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Direct instruction to on-site masons & carpenters</li>
                  </>
                )}
                {activeStep === 8 && (
                  <>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Complete joinery adjustments & paint snag checks</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Pressure testing for plumbing lines & load testing for electrical panels</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-stone-500" /> Handover of all warranties, keys, & 'as-built' drawing folder</li>
                  </>
                )}
              </ul>
            </div>
          </div>

        </div>

        {/* Why this structural control is necessary */}
        <div className="bg-stone-900 p-8 md:p-12 text-stone-100 flex flex-col md:flex-row items-center gap-8 justify-between border border-stone-800">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-xl font-medium text-stone-50 flex items-center justify-center md:justify-start gap-2">
              <HelpCircle className="w-5 h-5 text-stone-400" />
              Do I have to purchase all 8 steps?
            </h4>
            <p className="text-stone-400 text-xs font-light max-w-xl leading-relaxed">
              For premium residential houses, we highly recommend our complete package (Steps 1 to 8) to secure visual control. However, for remote clients outside of Chandigarh/Punjab, we offer custom packages omitting direct site supervision, replacing it with rigorous digital video reviews.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-stone-50 text-stone-950 font-semibold uppercase text-xs tracking-widest py-3 px-6 cursor-pointer shrink-0"
          >
            Ask a Question
          </a>
        </div>

      </div>
    </div>
  );
}
