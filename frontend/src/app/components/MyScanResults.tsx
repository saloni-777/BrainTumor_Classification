import { Calendar, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MyScanResults() {
  const scans = [
    {
      id: '#217890',
      date: 'April 20, 2024',
      time: '10:30 AM',
      tumorType: 'Glioma',
      confidence: 92,
      status: 'Fresh',
      statusColor: 'bg-green-500',
      icon: AlertCircle,
      description: 'High-grade malignant tumor detected in the frontal lobe region.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop'
    },
    {
      id: '#215623',
      date: 'April 18, 2024',
      time: '02:15 PM',
      tumorType: 'No Tumor',
      confidence: 98,
      status: 'Fresh',
      statusColor: 'bg-green-500',
      icon: CheckCircle,
      description: 'No abnormalities detected. Brain tissue appears healthy.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop'
    },
    {
      id: '#213451',
      date: 'April 15, 2024',
      time: '09:45 AM',
      tumorType: 'Meningioma',
      confidence: 89,
      status: 'Completed',
      statusColor: 'bg-teal-500',
      icon: AlertCircle,
      description: 'Benign tumor detected in the meninges surrounding the brain.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop'
    },
    {
      id: '#211234',
      date: 'April 12, 2024',
      time: '11:20 AM',
      tumorType: 'Pituitary Tumor',
      confidence: 91,
      status: 'Completed',
      statusColor: 'bg-teal-500',
      icon: AlertCircle,
      description: 'Tumor detected in the pituitary gland region.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="flex-1 px-4 md:px-6 pb-6 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-teal-900 text-xl md:text-2xl mb-2">My Scan Results</h1>
        <p className="text-teal-600 text-sm md:text-base">View all your MRI scan results and analysis history</p>
      </div>

      <div className="space-y-4">
        {scans.map((scan) => (
          <div key={scan.id} className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-teal-100 hover:shadow-2xl transition-all">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="w-full md:w-32 h-32 bg-gray-900 rounded-xl overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={scan.image}
                  alt="MRI Scan"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row items-start justify-between mb-3 gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                      <h3 className="text-teal-900 font-mono text-sm md:text-base">{scan.id}</h3>
                      <span className={`${scan.statusColor} text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm`}>
                        {scan.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-teal-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{scan.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{scan.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`p-2 md:p-3 rounded-xl ${scan.tumorType === 'No Tumor' ? 'bg-green-100' : 'bg-red-100'}`}>
                    <scan.icon className={`w-5 h-5 md:w-6 md:h-6 ${scan.tumorType === 'No Tumor' ? 'text-green-600' : 'text-red-600'}`} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3">
                  <div className="bg-teal-50/80 rounded-xl p-3 md:p-4 border border-teal-200">
                    <p className="text-teal-600 text-xs md:text-sm mb-1">Diagnosis</p>
                    <p className="text-teal-900 text-sm md:text-base">{scan.tumorType}</p>
                  </div>
                  <div className="bg-teal-50/80 rounded-xl p-3 md:p-4 border border-teal-200">
                    <p className="text-teal-600 text-xs md:text-sm mb-1">Confidence Level</p>
                    <p className="text-teal-900 text-sm md:text-base">{scan.confidence}%</p>
                  </div>
                </div>

                <p className="text-teal-700 text-xs md:text-sm">{scan.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
