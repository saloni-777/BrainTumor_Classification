import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeatmapVisualization() {
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-teal-100 mb-4">
      <h2 className="text-teal-900 mb-4">Tumor Heatmap Visualization</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <p className="text-teal-700 text-sm">Original MRI Scan</p>
          <div className="bg-gray-900 rounded-xl overflow-hidden aspect-square">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop"
              alt="Original MRI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-teal-700 text-sm">Heatmap Overlay</p>
          <div className="bg-gray-900 rounded-xl overflow-hidden aspect-square relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop"
              alt="Heatmap"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-radial from-red-500/60 via-orange-500/40 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between bg-teal-50/80 rounded-xl p-4 border border-teal-200">
        <p className="text-teal-700 text-sm">Tumor Region Highlighted</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-xs text-teal-700">High</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span className="text-xs text-teal-700">Medium</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-xs text-teal-700">Low</span>
          </div>
        </div>
      </div>
    </div>
  );
}
