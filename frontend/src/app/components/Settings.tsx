import { Bell, Lock, Globe, Eye, Database, Download, HardDrive } from 'lucide-react';

export function Settings() {
  return (
    <div className="flex-1 px-4 md:px-6 pb-6 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-teal-900 text-xl md:text-2xl mb-2">Settings</h1>
        <p className="text-teal-600 text-sm md:text-base">Manage your account settings and preferences</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-teal-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 md:p-3 bg-teal-50/80 rounded-xl">
              <Bell className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-teal-900 text-sm md:text-base">Notifications</h3>
              <p className="text-teal-600 text-xs md:text-sm">Manage your notification preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Email Notifications', description: 'Receive scan results via email', checked: true },
              { label: 'Push Notifications', description: 'Get instant updates on your device', checked: true },
              { label: 'SMS Alerts', description: 'Receive critical alerts via SMS', checked: false },
              { label: 'Weekly Reports', description: 'Get weekly summary of your scans', checked: true }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 md:p-4 bg-teal-50/80 rounded-xl border border-teal-200">
                <div className="flex-1">
                  <p className="text-teal-900 text-sm md:text-base">{item.label}</p>
                  <p className="text-teal-600 text-xs md:text-sm">{item.description}</p>
                </div>
                <label className="relative inline-block w-11 h-6 ml-3 flex-shrink-0">
                  <input type="checkbox" className="sr-only peer" defaultChecked={item.checked} />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-teal-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 md:p-3 bg-teal-50/80 rounded-xl">
              <Lock className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-teal-900 text-sm md:text-base">Security</h3>
              <p className="text-teal-600 text-xs md:text-sm">Manage your account security settings</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-3 md:p-4 bg-teal-50/80 rounded-xl border border-teal-200 hover:bg-teal-50 transition-all text-left">
              <div>
                <p className="text-teal-900 text-sm md:text-base">Change Password</p>
                <p className="text-teal-600 text-xs md:text-sm">Update your account password</p>
              </div>
              <div className="text-teal-600">&gt;</div>
            </button>

            <button className="w-full flex items-center justify-between p-3 md:p-4 bg-teal-50/80 rounded-xl border border-teal-200 hover:bg-teal-50 transition-all text-left">
              <div className="flex-1">
                <p className="text-teal-900 text-sm md:text-base">Two-Factor Authentication</p>
                <p className="text-teal-600 text-xs md:text-sm">Add an extra layer of security</p>
              </div>
              <label className="relative inline-block w-11 h-6 ml-3 flex-shrink-0">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
              </label>
            </button>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-teal-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 md:p-3 bg-teal-50/80 rounded-xl">
              <Eye className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-teal-900 text-sm md:text-base">Privacy</h3>
              <p className="text-teal-600 text-xs md:text-sm">Control your privacy settings</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Data Sharing', description: 'Share anonymized data for research', checked: false },
              { label: 'Profile Visibility', description: 'Make your profile visible to doctors', checked: true },
              { label: 'Analytics', description: 'Help us improve with usage data', checked: true }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 md:p-4 bg-teal-50/80 rounded-xl border border-teal-200">
                <div className="flex-1">
                  <p className="text-teal-900 text-sm md:text-base">{item.label}</p>
                  <p className="text-teal-600 text-xs md:text-sm">{item.description}</p>
                </div>
                <label className="relative inline-block w-11 h-6 ml-3 flex-shrink-0">
                  <input type="checkbox" className="sr-only peer" defaultChecked={item.checked} />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-teal-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 md:p-3 bg-teal-50/80 rounded-xl">
              <Database className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-teal-900 text-sm md:text-base">Data Management</h3>
              <p className="text-teal-600 text-xs md:text-sm">Manage your data and storage</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-3 md:p-4 bg-teal-50/80 rounded-xl border border-teal-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-teal-900 text-sm md:text-base">Storage Used</p>
                <p className="text-teal-600 text-xs md:text-sm">850 MB / 5 GB</p>
              </div>
              <div className="w-full bg-teal-200 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: '17%' }}></div>
              </div>
            </div>

            <button className="w-full flex items-center justify-between p-3 md:p-4 bg-teal-50/80 rounded-xl border border-teal-200 hover:bg-teal-50 transition-all text-left">
              <div className="flex items-center gap-3">
                <Download className="w-4 h-4 md:w-5 md:h-5 text-teal-600 flex-shrink-0" />
                <div>
                  <p className="text-teal-900 text-sm md:text-base">Export Data</p>
                  <p className="text-teal-600 text-xs md:text-sm">Download all your scan data</p>
                </div>
              </div>
              <div className="text-teal-600">&gt;</div>
            </button>

            <button className="w-full flex items-center justify-between p-3 md:p-4 bg-red-50/80 rounded-xl border border-red-200 hover:bg-red-50 transition-all text-left">
              <div className="flex items-center gap-3">
                <HardDrive className="w-4 h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-red-900 text-sm md:text-base">Clear Cache</p>
                  <p className="text-red-600 text-xs md:text-sm">Free up storage space</p>
                </div>
              </div>
              <div className="text-red-600">&gt;</div>
            </button>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-teal-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 md:p-3 bg-teal-50/80 rounded-xl">
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-teal-900 text-sm md:text-base">Preferences</h3>
              <p className="text-teal-600 text-xs md:text-sm">Customize your experience</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-3 md:p-4 bg-teal-50/80 rounded-xl border border-teal-200">
              <label className="text-teal-900 mb-2 block text-sm md:text-base">Language</label>
              <select className="w-full bg-white border border-teal-200 rounded-xl px-3 md:px-4 py-2 text-teal-900 outline-none focus:ring-2 focus:ring-teal-400 text-sm md:text-base">
                <option>English (US)</option>
                <option>हिंदी (Hindi)</option>
                <option>मराठी (Marathi)</option>
                <option>தமிழ் (Tamil)</option>
              </select>
            </div>

            <div className="p-3 md:p-4 bg-teal-50/80 rounded-xl border border-teal-200">
              <label className="text-teal-900 mb-2 block text-sm md:text-base">Time Zone</label>
              <select className="w-full bg-white border border-teal-200 rounded-xl px-3 md:px-4 py-2 text-teal-900 outline-none focus:ring-2 focus:ring-teal-400 text-sm md:text-base">
                <option>India Standard Time (IST)</option>
                <option>Eastern Time (ET)</option>
                <option>Pacific Time (PT)</option>
              </select>
            </div>

            <div className="p-3 md:p-4 bg-teal-50/80 rounded-xl border border-teal-200">
              <label className="text-teal-900 mb-2 block text-sm md:text-base">Theme</label>
              <select className="w-full bg-white border border-teal-200 rounded-xl px-3 md:px-4 py-2 text-teal-900 outline-none focus:ring-2 focus:ring-teal-400 text-sm md:text-base">
                <option>Light Mode</option>
                <option>Dark Mode</option>
                <option>Auto</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
