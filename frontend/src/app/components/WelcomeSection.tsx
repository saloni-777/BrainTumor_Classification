import { Sparkles } from 'lucide-react';
import DoctorIllustration from '../../imports/undraw_doctors_djoj.svg';

export function WelcomeSection() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-4 md:p-8 shadow-xl border border-teal-200 mb-4 overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-4 md:gap-6">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
            <h1 className="text-white text-xl md:text-3xl">{getGreeting()}, Kajal!</h1>
          </div>
          <p className="text-white/90 text-base md:text-lg mb-2 md:mb-4">
            Welcome to Cortex - Your Advanced Brain Tumor Detection System
          </p>
          <p className="text-white/80 text-sm md:text-base">
            Upload your MRI scans for instant AI-powered analysis with 99% accuracy
          </p>
        </div>

        <div className="w-full md:w-64 h-40 md:h-48 relative flex items-center justify-center">
          <img
            src={DoctorIllustration}
            alt="Medical Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
    </div>
  );
}
