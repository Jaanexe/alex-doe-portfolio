import React from 'react';
import aboutData from "../src/data/about.json";

const TimelineItem: React.FC<{ year: string; title: string; children: React.ReactNode; isLast?: boolean }> = ({ year, title, children, isLast = false }) => (
    <div className="relative pl-8 sm:pl-12">
        {!isLast && <div className="absolute left-3 sm:left-5 top-5 h-full w-0.5 bg-slate-700"></div>}
        <div className="absolute left-0 sm:left-2 top-2 flex items-center justify-center w-6 h-6 rounded-full bg-slate-700">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
        </div>
        <div className="mb-10">
            <div className="font-bold text-cyan-400 mb-1">{year}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{children}</p>
        </div>
    </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-[#0d1117]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{aboutData.title}</h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  {aboutData.description}
                </p>
                <div className="max-w-md">
                    <TimelineItem year="2018" title="Igniting the Spark">
                        Dived into digital art, learning the fundamentals of Photoshop and illustration. This was the beginning of my obsession with creating worlds from scratch.
                    </TimelineItem>
                    <TimelineItem year="2020" title="Expanding Horizons">
                        Began exploring photography and 3D modeling with Blender. Started live streaming my creative process, building a community around shared passions.
                    </TimelineItem>
                    <TimelineItem year="Present" title="Full-Time Creator" isLast>
                        Working as a freelance artist and content creator. I collaborate with brands, create commissioned art, and continue to share my journey with an amazing online community.
                    </TimelineItem>
                </div>
            </div>
             <div className="hidden lg:block">
                <img
                  src={aboutData.image}
                  alt={aboutData.title || 'About image'}
                  className="rounded-lg shadow-2xl object-cover w-full h-full aspect-[4/5] shadow-cyan-500/10"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;