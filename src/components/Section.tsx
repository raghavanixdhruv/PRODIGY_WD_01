import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  background?: 'light' | 'dark' | 'soft' | 'cream';
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  className = '', 
  background = 'light' 
}) => {
  const backgroundClasses = {
    light: 'bg-white',
    dark: 'bg-black text-white',
    soft: 'bg-gray-50',
    cream: 'bg-gray-100'
  };

  const titleColorClasses = {
    light: 'text-black',
    dark: 'text-white',
    soft: 'text-black',
    cream: 'text-black'
  };

  return (
    <section 
      id={id} 
      className={`min-h-screen flex items-center justify-center py-24 ${backgroundClasses[background]} ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-light mb-12 tracking-wide animate-fade-in-up ${titleColorClasses[background]}`}>
          {title}
        </h2>
        <div className="text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;