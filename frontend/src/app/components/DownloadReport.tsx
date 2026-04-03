import { Download, FileText, Calendar, TrendingUp } from 'lucide-react';

export function DownloadReport() {
  const reports = [
    {
      id: 1,
      title: 'Complete Scan Analysis Report',
      date: 'April 20, 2024',
      description: 'Comprehensive analysis of all MRI scans including tumor detection results',
      format: 'PDF',
      size: '2.4 MB',
      scans: 4
    },
    {
      id: 2,
      title: 'Heatmap Visualization Report',
      date: 'April 20, 2024',
      description: 'Detailed heatmap analysis with tumor region highlighting',
      format: 'PDF',
      size: '3.1 MB',
      scans: 3
    },
    {
      id: 3,
      title: 'Medical History Summary',
      date: 'April 1-20, 2024',
      description: 'Complete medical history and scan progression over time',
      format: 'PDF',
      size: '1.8 MB',
      scans: 24
    },
    {
      id: 4,
      title: 'Individual Scan Report - #217890',
      date: 'April 20, 2024',
      description: 'Detailed analysis report for Glioma detection (92% confidence)',
      format: 'PDF',
      size: '845 KB',
      scans: 1
    }
  ];

  const handleDownload = (reportTitle: string) => {
    // Simulate download
    console.log(`Downloading: ${reportTitle}`);
    // In a real app, this would trigger an actual file download
  };

  return (
    <div className="flex-1 px-4 md:px-6 pb-6 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-teal-900 text-xl md:text-2xl mb-2">Download Reports</h1>
        <p className="text-teal-600 text-sm md:text-base">Download your medical reports and scan analysis</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-4 md:p-6 text-white hover:shadow-2xl transition-all text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 md:p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Download className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 md:mb-2 text-sm md:text-base">Download All</h3>
              <p className="text-white/90 text-xs md:text-sm">Get all reports in one ZIP file</p>
            </div>
          </div>
        </button>

        <button className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 md:p-6 text-white hover:shadow-2xl transition-all text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 md:p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Calendar className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 md:mb-2 text-sm md:text-base">Monthly Report</h3>
              <p className="text-white/90 text-xs md:text-sm">Download this month's summary</p>
            </div>
          </div>
        </button>

        <button className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-4 md:p-6 text-white hover:shadow-2xl transition-all text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 md:p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 md:mb-2 text-sm md:text-base">Progress Report</h3>
              <p className="text-white/90 text-xs md:text-sm">Track your scan history</p>
            </div>
          </div>
        </button>
      </div>

      {/* Available Reports */}
      <div className="space-y-4">
        <h2 className="text-teal-900 text-lg md:text-xl mb-4">Available Reports</h2>

        {reports.map((report) => (
          <div key={report.id} className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-teal-100 hover:shadow-2xl transition-all">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="p-3 md:p-4 bg-teal-50/80 rounded-xl border border-teal-200 flex-shrink-0">
                <FileText className="w-8 h-8 md:w-10 md:h-10 text-teal-600" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-teal-900 text-base md:text-lg">{report.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs md:text-sm">
                      {report.format}
                    </span>
                    <span className="text-teal-600 text-xs md:text-sm">{report.size}</span>
                  </div>
                </div>

                <p className="text-teal-700 text-xs md:text-sm mb-3">{report.description}</p>

                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-teal-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{report.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{report.scans} scan{report.scans > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDownload(report.title)}
                className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Export Options */}
      <div className="mt-6 bg-white/70 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-teal-100">
        <h3 className="text-teal-900 mb-4 text-base md:text-lg">Custom Export</h3>
        <p className="text-teal-600 text-xs md:text-sm mb-4">Generate a custom report with specific date range and scans</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-teal-700 text-xs md:text-sm mb-2 block">From Date</label>
            <input
              type="date"
              className="w-full bg-white border border-teal-200 rounded-xl px-3 md:px-4 py-2 text-teal-900 outline-none focus:ring-2 focus:ring-teal-400 text-sm md:text-base"
            />
          </div>
          <div>
            <label className="text-teal-700 text-xs md:text-sm mb-2 block">To Date</label>
            <input
              type="date"
              className="w-full bg-white border border-teal-200 rounded-xl px-3 md:px-4 py-2 text-teal-900 outline-none focus:ring-2 focus:ring-teal-400 text-sm md:text-base"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="text-teal-700 text-xs md:text-sm mb-2 block">Report Format</label>
          <select className="w-full bg-white border border-teal-200 rounded-xl px-3 md:px-4 py-2 text-teal-900 outline-none focus:ring-2 focus:ring-teal-400 text-sm md:text-base">
            <option>PDF Document</option>
            <option>Excel Spreadsheet</option>
            <option>CSV Data</option>
            <option>JSON Format</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-teal-700 text-xs md:text-sm mb-2 block">Include</label>
          <div className="space-y-2">
            {['Scan Images', 'Heatmaps', 'AI Analysis', 'Medical Notes', 'Patient Information'].map((option) => (
              <label key={option} className="flex items-center gap-2 text-teal-700 text-sm md:text-base">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="w-4 h-4 text-teal-600 rounded focus:ring-teal-400"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="w-full px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
          <Download className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-base">Generate Custom Report</span>
        </button>
      </div>
    </div>
  );
}
