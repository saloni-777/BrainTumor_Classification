import { ImageWithFallback } from './figma/ImageWithFallback';
import { AlertCircle } from 'lucide-react';

export function MRIPreview() {
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-teal-100 mb-4">
      <h2 className="text-teal-900 mb-4">Uploaded MRI Preview</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-xl overflow-hidden aspect-square flex items-center justify-center">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop"
            alt="MRI Brain Scan"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-6 h-6 mt-1" />
              <div>
                <h3 className="mb-1">Detection Result</h3>
                <p className="text-2xl">Glioma</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <p className="text-sm mb-1">Confidence Level</p>
              <p className="text-3xl">92%</p>
            </div>
          </div>

          <div className="bg-teal-50/80 rounded-xl p-4 border border-teal-200">
            <h4 className="text-teal-900 mb-2">About Glioma</h4>
            <p className="text-teal-700 text-sm leading-relaxed">
              Gliomas are tumors that develop from glial cells in the brain and spinal cord.
              They are the most common type of primary brain tumor. Early detection is crucial
              for effective treatment planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
