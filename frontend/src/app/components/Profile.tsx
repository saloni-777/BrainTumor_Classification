import { User, Mail, Phone, MapPin, Calendar, Edit } from 'lucide-react';

export function Profile() {
  return (
    <div className="flex-1 px-4 md:px-6 pb-6 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-teal-900 text-xl md:text-2xl mb-2">Profile</h1>
        <p className="text-teal-600 text-sm md:text-base">Manage your personal information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-teal-100 text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
            <h2 className="text-teal-900 text-lg md:text-xl mb-1">Kajal Sharma</h2>
            <p className="text-teal-600 mb-4">Patient</p>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-teal-100 mt-6">
            <h3 className="text-teal-900 mb-4">Account Statistics</h3>
            <div className="space-y-4">
              <div className="bg-teal-50/80 rounded-xl p-4 border border-teal-200">
                <p className="text-teal-600 text-sm mb-1">Total Scans</p>
                <p className="text-teal-900 text-2xl">24</p>
              </div>
              <div className="bg-teal-50/80 rounded-xl p-4 border border-teal-200">
                <p className="text-teal-600 text-sm mb-1">Completed Analysis</p>
                <p className="text-teal-900 text-2xl">22</p>
              </div>
              <div className="bg-teal-50/80 rounded-xl p-4 border border-teal-200">
                <p className="text-teal-600 text-sm mb-1">Member Since</p>
                <p className="text-teal-900">Mar 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 space-y-6">
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-teal-100">
            <h3 className="text-teal-900 mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-teal-700 text-sm mb-2 block">Full Name</label>
                <div className="flex items-center gap-3 bg-teal-50/80 rounded-xl p-4 border border-teal-200">
                  <User className="w-5 h-5 text-teal-600" />
                  <input
                    type="text"
                    value="Kajal Sharma"
                    className="flex-1 bg-transparent outline-none text-teal-900"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="text-teal-700 text-sm mb-2 block">Email Address</label>
                <div className="flex items-center gap-3 bg-teal-50/80 rounded-xl p-4 border border-teal-200">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <input
                    type="email"
                    value="kajal.sharma@email.com"
                    className="flex-1 bg-transparent outline-none text-teal-900"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="text-teal-700 text-sm mb-2 block">Phone Number</label>
                <div className="flex items-center gap-3 bg-teal-50/80 rounded-xl p-4 border border-teal-200">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <input
                    type="tel"
                    value="+91 98765 43210"
                    className="flex-1 bg-transparent outline-none text-teal-900"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="text-teal-700 text-sm mb-2 block">Date of Birth</label>
                <div className="flex items-center gap-3 bg-teal-50/80 rounded-xl p-4 border border-teal-200">
                  <Calendar className="w-5 h-5 text-teal-600" />
                  <input
                    type="text"
                    value="15 March 1995"
                    className="flex-1 bg-transparent outline-none text-teal-900"
                    readOnly
                  />
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="text-teal-700 text-sm mb-2 block">Address</label>
                <div className="flex items-center gap-3 bg-teal-50/80 rounded-xl p-4 border border-teal-200">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <input
                    type="text"
                    value="456 Park Avenue, Mumbai, Maharashtra 400001"
                    className="flex-1 bg-transparent outline-none text-teal-900"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-teal-100">
            <h3 className="text-teal-900 mb-6">Medical Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-teal-700 text-sm mb-2 block">Patient ID</label>
                <div className="bg-teal-50/80 rounded-xl p-4 border border-teal-200">
                  <p className="text-teal-900 font-mono">PT-2024-001258</p>
                </div>
              </div>

              <div>
                <label className="text-teal-700 text-sm mb-2 block">Blood Group</label>
                <div className="bg-teal-50/80 rounded-xl p-4 border border-teal-200">
                  <p className="text-teal-900">O Positive</p>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="text-teal-700 text-sm mb-2 block">Emergency Contact</label>
                <div className="bg-teal-50/80 rounded-xl p-4 border border-teal-200">
                  <p className="text-teal-900">Rajesh Sharma (Father) - +91 98765 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-teal-100">
            <h3 className="text-teal-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { action: 'Uploaded MRI scan #217890', time: '2 hours ago' },
                { action: 'Received analysis results for scan #215623', time: '5 hours ago' },
                { action: 'Generated heatmap for scan #213451', time: '1 day ago' },
                { action: 'Updated profile information', time: '3 days ago' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-teal-50/80 rounded-xl border border-teal-200">
                  <p className="text-teal-900 text-sm">{activity.action}</p>
                  <p className="text-teal-600 text-xs">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
