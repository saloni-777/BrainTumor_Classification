import { Search, Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/60 backdrop-blur-lg border border-teal-100 px-4 md:px-6 py-3 md:py-4 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-teal-900 text-lg md:text-xl">My Dashboard</h1>
          <p className="text-teal-600 text-xs md:text-sm mt-1">Welcome, Kajal</p>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden md:block">
            <Search className="w-5 h-5 text-teal-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-white/80 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 w-64"
            />
          </div>
          <button className="md:hidden p-2 bg-white/80 rounded-xl hover:bg-white transition-all border border-teal-100">
            <Search className="w-5 h-5 text-teal-600" />
          </button>
          <button className="relative p-2 bg-white/80 rounded-xl hover:bg-white transition-all border border-teal-100">
            <Bell className="w-5 h-5 text-teal-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
