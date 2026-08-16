import { useState } from 'react';
import { processSteps } from '@/lib/studio-data';

const Experience = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-28 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <span className="font-poppins text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.1em] uppercase text-accent font-medium block">
            the journey
          </span>
          <h2 className="text-section-title text-[#F3EFE7]">
            How we tell <br />
            <span className="italic text-accent font-normal">your visual story.</span>
          </h2>
          <div className="w-12 h-px bg-accent/30 mx-auto mt-6" />
        </div>

        {/* Timeline Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Step List */}
          <div className="lg:col-span-6 space-y-8">
            {processSteps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`group cursor-pointer border-l-2 pl-6 py-4 transition-all duration-500 select-none ${
                    isActive ? 'border-accent bg-white/5' : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex gap-4 items-baseline">
                    <span className={`font-playfair text-2xl sm:text-3xl font-normal tracking-wide ${isActive ? 'text-accent' : 'text-white/50 group-hover:text-white/70'}`}>
                      {step.number}
                    </span>
                    <h3 className={`font-playfair text-xl font-normal tracking-wide ${isActive ? 'text-[#FAF8F5]' : 'text-white/80 group-hover:text-white'}`}>
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Expand Description smoothly */}
                  <div
                    className={`text-body-editorial text-white/80 mt-3 overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {step.description}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Display based on Active Step */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full aspect-[4/3] bg-white/5 overflow-hidden">
              {/* Overlay with Step Number */}
              <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center">
                <span className="font-playfair text-8xl md:text-[12rem] font-light text-white/10 select-none">
                  {processSteps[activeStep].number}
                </span>
              </div>
              
              {/* Curated Background matching the stage */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-[1000ms]"
                style={{
                  backgroundImage: `url(${
                    activeStep === 0 ? "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800" : // couple talk
                    activeStep === 1 ? "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" : // planning decor
                    activeStep === 2 ? "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800" : // shooting couple
                    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800" // post-prod camera
                  })`
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
