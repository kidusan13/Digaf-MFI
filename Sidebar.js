import React from 'react';

export default function Sidebar({ currentTab, setCurrentTab, counts }) {
  const menus = [
    { id: 'dashboard', label: 'Executive Dashboard', category: 'OVERVIEW' },
    { id: 'followup', label: 'Follow Up Today', category: 'OVERVIEW' },
    { id: 'processing', label: 'Renewal Processing', category: 'CORE OPERATIONS', count: counts.processing },
    { id: 'waiting', label: 'Paid Waiting Close', category: 'CORE OPERATIONS', count: counts.waiting },
    { id: 'no_response', label: 'No Response', category: 'CORE OPERATIONS', count: counts.no_response },
    { id: 'completed', label: 'Completed', category: 'CORE OPERATIONS', count: counts.completed },
    { id: 'rejected', label: 'Rejected', category: 'CORE OPERATIONS', count: counts.rejected },
    { id: 'attendance', label: 'Attendance Desk', category: 'ATTENDANCE' },
  ];

  return (
    <div className="w-64 h-screen bg-slate-50 border-r border-slate-200 p-4 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-8 px-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
          <span className="text-xl font-bold text-slate-800">Digaf <span className="text-xs text-purple-600">MFI</span></span>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-6">
          {['OVERVIEW', 'CORE OPERATIONS', 'ATTENDANCE'].map((cat) => (
            <div key={cat}>
              <p className="text-xs font-semibold text-slate-400 tracking-wider mb-2 px-2">{cat}</p>
              <div className="space-y-1">
                {menus.filter(m => m.category === cat).map((menu) => (
                  <button
                    key={menu.id}
                    onClick={() => setCurrentTab(menu.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      currentTab === menu.id 
                        ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-600' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>{menu.label}</span>
                    {menu.count !== undefined && (
                      <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-bold">
                        {menu.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
      
      <div className="text-xs text-slate-400 px-2">
        Powered by Kidus • Control Panel
      </div>
    </div>
  );
}