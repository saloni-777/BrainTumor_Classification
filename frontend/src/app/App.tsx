import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { UploadSection } from './components/UploadSection';
import { MyScanResults } from './components/MyScanResults';
import { HeatmapAnalysis } from './components/HeatmapAnalysis';
import { DownloadReport } from './components/DownloadReport';
import { Profile } from './components/Profile';
import { Settings } from './components/Settings';
import { RightSidebar } from './components/RightSidebar';

export default function App() {
  return (
    <Router>
      <div className="h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 flex overflow-hidden">
        <Sidebar />

        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="p-6">
            <Header />
          </div>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/upload"
              element={
                <div className="flex-1 flex gap-6 px-6 pb-6 overflow-hidden">
                  <div className="flex-1 overflow-y-auto pr-2">
                    <UploadSection />
                  </div>
                  <div className="overflow-y-auto">
                    <RightSidebar />
                  </div>
                </div>
              }
            />
            <Route path="/scan-results" element={<MyScanResults />} />
            <Route path="/heatmap" element={<HeatmapAnalysis />} />
            <Route path="/download-reports" element={<DownloadReport />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}