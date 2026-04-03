import {
  LayoutDashboard,
  Upload,
  FileSearch,
  Activity,
  Download,
  User,
  Settings,
  LogOut
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Upload, label: 'Upload MRI', path: '/upload' },
    { icon: FileSearch, label: 'My Scan Results', path: '/scan-results' },
    { icon: Activity, label: 'Heatmap Analysis', path: '/heatmap' },
    { icon: Download, label: 'Download Reports', path: '/download-reports' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 h-full bg-gradient-to-b from-[#14b8a6] to-[#0d9488] flex flex-col p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white">Cortex</h1>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              location.pathname === item.path
                ? 'bg-white/25 text-white backdrop-blur-md shadow-lg'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all mb-4">
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>

      <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white">K</span>
          </div>
          <div>
            <div className="text-white">Kajal</div>
            <div className="text-white/70 text-sm">Patient</div>
          </div>
        </div>
      </div>
    </div>
  );
}
