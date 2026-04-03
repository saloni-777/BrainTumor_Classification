import { Upload, Brain, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function UploadSection() {
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-teal-100 mb-4">
      <h2 className="text-teal-900 mb-4 text-lg md:text-xl">Upload MRI Scan</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="border-2 border-dashed border-teal-300 rounded-2xl p-6 md:p-8 bg-teal-50/50 hover:bg-teal-50 transition-all cursor-pointer flex flex-col items-center justify-center min-h-[200px]">
          <Upload className="w-10 h-10 md:w-12 md:h-12 text-teal-500 mb-3" />
          <p className="text-teal-700 mb-2 text-center text-sm md:text-base">Drag & drop your MRI scan here</p>
          <p className="text-teal-500 text-xs md:text-sm mb-4">or</p>
          <button className="px-4 md:px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all text-sm md:text-base">
            Browse Files
          </button>
        </div>

        <div className="bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center min-h-[200px]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop"
            alt="MRI Brain Scan Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="group bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-4 md:p-6 text-white hover:shadow-2xl hover:scale-105 transition-all text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 md:p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Brain className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 md:mb-2 text-sm md:text-base">Detect Tumor Type</h3>
              <p className="text-white/90 text-xs md:text-sm">Identify type of tumor using AI model</p>
            </div>
          </div>
        </button>

        <button className="group bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl p-4 md:p-6 text-white hover:shadow-2xl hover:scale-105 transition-all text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 md:p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 md:mb-2 text-sm md:text-base">Generate Heatmap</h3>
              <p className="text-white/90 text-xs md:text-sm">Show heatmap highlighting tumor regions</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
