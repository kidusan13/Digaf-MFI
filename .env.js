{/* ASK DIGAF AI Floating Button */}
<button 
  onClick={() => setIsCopilotOpen(true)}
  className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-4 py-3 rounded-xl shadow-lg transition-all flex items-center space-x-2 z-40"
>
  <span>✨</span>
  <span>Ask Digaf AI</span>
</button>

{/* AI Copilot Modal */}
<CopilotModal isOpen={isCopilotOpen} onClose={() => setIsCopilotOpen(false)} />