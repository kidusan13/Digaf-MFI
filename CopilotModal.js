import React, { useState, useEffect } from 'react';

export default function Header({ activeOfficer = "Kidusyared Liku" }) {
  const [isBound, setIsBound] = useState(false);
  const [terminalId, setTerminalId] = useState("");

  useEffect(() => {
    // በኮምፒውተርህ ላይ ብቻ የሚቀመጥ ቋሚ መለያ (Device Fingerprint) መፍጠር
    let savedTerminalId = localStorage.getItem('terminal_identity');
    if (!savedTerminalId) {
      savedTerminalId = "TERM-" + Math.random().toString(36).substring(2, 9).toUpperCase();
      localStorage.setItem('terminal_identity', savedTerminalId);
    }
    setTerminalId(savedTerminalId);

    // ይህ ኮምፒውተር በአንተ የተፈቀደለት መሆኑን ማረጋገጥ
    const boundStatus = localStorage.getItem('is_terminal_bound') === 'true';
    setIsBound(boundStatus);
  }, []);

  const handleBindTerminal = () => {
    const secret = prompt("እባክህ ይህንን ኮምፒውተር ለመቆለፍ የአድሚን ምስጢራዊ ቁልፍ (Secret Token) አስገባ፦");
    // ይህ ቁልፍ በ .env.local ላይ ካስቀመጥከው 'kidus_secure_system_2026' ጋር ይነጻጸራል
    if (secret === "kidus_secure_system_2026") { 
      localStorage.setItem('is_terminal_bound', 'true');
      setIsBound(true);
      alert("ኮምፒውተሩ በተሳካ ሁኔታ ተቆልፏል (Terminal Bound Successfully!)");
    } else {
      alert("የተሳሳተ ቁልፍ! መቆለፍ አልተቻለም።");
    }
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      {/* ርዕስ */}
      <div className="flex items-center space-x-4">
        <h1 className="text-sm font-bold tracking-wider text-slate-700 bg-purple-50 px-3 py-1 rounded border border-purple-100">
          SECOND ROUND TRACKER
        </h1>
        <div className="flex items-center space-x-1 text-xs text-emerald-600 font-medium">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span>Synced Listener Active</span>
        </div>
      </div>

      {/* የደህንነት እና የኦፊሰር መቆጣጠሪያ */}
      <div className="flex items-center space-x-4">
        {/* Terminal Identity Binding */}
        <div className="flex items-center space-x-2">
          <span className="text-xs text-slate-400">Terminal ID: <span className="font-mono text-slate-600">{terminalId}</span></span>
          {isBound ? (
            <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold border border-emerald-200">
              {activeOfficer} BOUND
            </span>
          ) : (
            <button 
              onClick={handleBindTerminal}
              className="bg-amber-50 text-amber-800 text-xs px-2.5 py-1 rounded-full font-bold border border-amber-200 hover:bg-amber-100 transition-all"
            >
              UNBOUND (Click to Secure)
            </button>
          )}
        </div>

        {/* Active Officer */}
        <div className="bg-slate-100 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 border border-slate-200">
          Active Officer: <span className="text-purple-700">{activeOfficer}</span>
        </div>

        <button className="text-xs font-bold text-rose-600 hover:text-rose-700 transition-all">
          LOG OUT
        </button>
      </div>
    </header>
  );
}