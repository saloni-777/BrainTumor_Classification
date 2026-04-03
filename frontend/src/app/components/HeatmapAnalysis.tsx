import { ImageWithFallback } from './figma/ImageWithFallback';
import { Layers, Info } from 'lucide-react';

export function HeatmapAnalysis() {
  const scans = [
    {
      id: '#217890',
      date: 'April 20, 2024',
      tumorType: 'Glioma',
      confidence: 92,
      original: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop',
      heatmap: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop'
    },
    {
      id: '#213451',
      date: 'April 15, 2024',
      tumorType: 'Meningioma',
      confidence: 89,
      original: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop',
      heatmap: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop'
    },
    {
      id: '#211234',
      date: 'April 12, 2024',
      tumorType: 'Pituitary Tumor',
      confidence: 91,
      original: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop',
      heatmap: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="flex-1 px-4 md:px-6 pb-6 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-teal-900 text-xl md:text-2xl mb-2">Heatmap Analysis</h1>
        <p className="text-teal-600 text-sm md:text-base">Visual representation of tumor regions with AI-generated heatmaps</p>
      </div>

      <div className="bg-teal-50/80 rounded-xl p-4 border border-teal-200 mb-6 flex items-start gap-3">
        <Info className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="text-teal-900 mb-1 text-sm md:text-base">Heatmap Color Guide</h3>
          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-teal-700">High probability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-teal-700">Medium probability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-teal-700">Low probability</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {scans.map((scan) => (
          <div key={scan.id} className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-teal-100">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-3">
              <div>
                <h3 className="text-teal-900 font-mono mb-1 text-sm md:text-base">{scan.id}</h3>
                <p className="text-teal-600 text-xs md:text-sm">{scan.date}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <div className="bg-teal-50/80 rounded-xl px-3 md:px-4 py-2 border border-teal-200">
                  <p className="text-teal-600 text-xs md:text-sm">Tumor Type</p>
                  <p className="text-teal-900 text-sm md:text-base">{scan.tumorType}</p>
                </div>
                <div className="bg-teal-50/80 rounded-xl px-3 md:px-4 py-2 border border-teal-200">
                  <p className="text-teal-600 text-xs md:text-sm">Confidence</p>
                  <p className="text-teal-900 text-sm md:text-base">{scan.confidence}%</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-teal-600" />
                  <p className="text-teal-700 text-xs md:text-sm">Original MRI Scan</p>
                </div>
                <div className="bg-gray-900 rounded-xl overflow-hidden aspect-square">
                  <ImageWithFallback
                    src={scan.original}
                    alt="Original MRI"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-teal-600" />
                  <p className="text-teal-700 text-xs md:text-sm">Heatmap Overlay</p>
                </div>
                <div className="bg-gray-900 rounded-xl overflow-hidden aspect-square relative">
                  <ImageWithFallback
                    src={scan.heatmap}
                    alt="Heatmap"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-radial from-red-500/60 via-orange-500/40 to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <p className="text-red-600 text-xs md:text-sm">Tumor Region</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
