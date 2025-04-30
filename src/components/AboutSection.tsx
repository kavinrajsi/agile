import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in');
    fadeElements?.forEach((el) => observer.observe(el));

    return () => {
      fadeElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">

          <div className="space-y-6">
            <div className="fade-in mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-2 text-left">
                At AgileMadarth, we understand the tempo of sports and entertainment—because we live it.
              </h2>
              <p className="text-lg md:text-xl text-gray-400 text-left">
                Whether it's the roar of a stadium, the build-up to a trailer drop, or the scroll-stopping meme that reflects a fan's true feeling—we know where emotion meets momentum.
              </p>
            </div>
            
            <div className="fade-in grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">We move fast.</h3>
                <p className="text-gray-400">Racing ahead of trends and capturing cultural moments before they fade.</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">Think sharp.</h3>
                <p className="text-gray-400">Strategic insights that cut through noise and reach exactly who matters.</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">Execute bold.</h3>
                <p className="text-gray-400">Creating campaigns that command attention and drive genuine engagement.</p>
              </div>
            </div>

            <p className="fade-in text-xl text-gray-300 text-center">
              Because in this world, buzz is the prize—and fandom is the fuel.
            </p>

            {/* Reference-image-inspired quote block */}
            <div className="fade-in mt-10 mb-6">
              <p
                className="text-center text-2xl md:text-4xl font-extrabold italic leading-tight text-gray-200"
                style={{
                  lineHeight: '1.2',
                  fontFamily: 'Caveat, cursive',
                  fontOpticalSizing: 'auto',
                }}
              >
                We&apos;ve built brands,<br />
                launched leagues,<br />
                broken the internet (more than once),<br />
                and <span className="text-black dark:text-white font-black">earned the trust of names that move millions.</span>
              </p>
            </div>

            <p className="fade-in text-lg text-gray-300 text-center">
              We're here for the moments that matter—before they even happen. From grassroots to global screens, we make stories stick and campaigns click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;