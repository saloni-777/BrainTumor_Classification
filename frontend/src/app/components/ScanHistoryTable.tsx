import { FileText } from 'lucide-react';

export function ScanHistoryTable() {
  const scans = [
    {
      date: 'April 20, 2024',
      scanId: '#217890',
      tumorType: 'Glioma',
      confidence: '92%',
      status: 'Fresh',
      statusColor: 'bg-green-500'
    },
    {
      date: 'April 18, 2024',
      scanId: '#215623',
      tumorType: 'No Tumor',
      confidence: '98%',
      status: 'Fresh',
      statusColor: 'bg-green-500'
    },
    {
      date: 'April 15, 2024',
      scanId: '#213451',
      tumorType: 'Meningioma',
      confidence: '89%',
      status: 'Completed',
      statusColor: 'bg-teal-500'
    },
    {
      date: 'April 12, 2024',
      scanId: '#211234',
      tumorType: 'Glioma',
      confidence: '94%',
      status: 'Completed',
      statusColor: 'bg-teal-500'
    }
  ];

  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-teal-100">
      <h2 className="text-teal-900 mb-4">Scan History</h2>

      <div className="overflow-hidden rounded-xl border border-teal-100">
        <table className="w-full">
          <thead className="bg-teal-50/80">
            <tr>
              <th className="px-4 py-3 text-left text-teal-900">Date</th>
              <th className="px-4 py-3 text-left text-teal-900">Scan ID</th>
              <th className="px-4 py-3 text-left text-teal-900">Tumor Type</th>
              <th className="px-4 py-3 text-left text-teal-900">Confidence</th>
              <th className="px-4 py-3 text-left text-teal-900">Status</th>
            </tr>
          </thead>
          <tbody>
            {scans.map((scan, index) => (
              <tr
                key={scan.scanId}
                className={`${index % 2 === 0 ? 'bg-white/50' : 'bg-teal-50/30'} hover:bg-teal-50/60 transition-colors`}
              >
                <td className="px-4 py-3 text-teal-700">{scan.date}</td>
                <td className="px-4 py-3 text-teal-700 font-mono">{scan.scanId}</td>
                <td className="px-4 py-3 text-teal-900">{scan.tumorType}</td>
                <td className="px-4 py-3 text-teal-700">{scan.confidence}</td>
                <td className="px-4 py-3">
                  <span className={`${scan.statusColor} text-white px-3 py-1 rounded-full text-sm`}>
                    {scan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
