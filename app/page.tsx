'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading && progress < 100) {
      const timer = setTimeout(() => setProgress(prev => prev + 1), 60);
      return () => clearTimeout(timer);
    }
  }, [loading, progress]);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center p-6 text-slate-900 font-sans">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1755005450092810" crossOrigin="anonymous"></script>

      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-8 mt-10 border border-pink-50 text-center">
        <h1 className="text-3xl font-black text-slate-800 tracking-tighter mb-1">BioCheck Pro</h1>
        <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-10">Sensorial Thermal Lab</p>

        <div className="flex justify-center mb-10 relative">
          <div className={`absolute inset-0 bg-pink-100 rounded-full blur-2xl opacity-30 ${loading ? 'animate-pulse' : ''}`}></div>
          <button 
            onClick={() => setLoading(true)}
            className={`relative z-10 w-44 h-44 rounded-full border-8 border-slate-50 shadow-inner flex items-center justify-center transition-all bg-gradient-to-br from-white to-pink-50 ${loading ? 'scale-95' : 'hover:scale-105 active:scale-95'}`}
          >
            <span className="text-[11px] font-black text-pink-500 uppercase tracking-widest leading-tight">
              {loading ? `Scanning...\n${progress}%` : "Place Finger\nTo Start"}
            </span>
          </button>
        </div>

        {loading && (
          <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden border border-slate-50">
            <div className="bg-pink-500 h-full transition-all duration-300 shadow-[0_0_10px_rgba(236,72,153,0.5)]" style={{ width: `${progress}%` }}></div>
          </div>
        )}

        <div className="bg-slate-900 rounded-[2rem] py-6 px-4 mb-6 shadow-xl">
          <p className="text-white text-4xl font-black italic tracking-tighter">€4.99</p>
          <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest mt-1">Unlock Full Clinical Report</p>
        </div>

        <a 
          href="https://www.paypal.com/checkoutnow?token=AYuCohLKaabwimk_5Rngf6Dglx8sOJBmFxsj91wUUNIzrntGnVFyJIjY_uSEP5cUaGSZ868QGkyFwNt-"
          className="block w-full bg-[#ffc439] hover:bg-[#f4bb31] text-[#003087] font-black py-5 rounded-full shadow-lg transition-all text-xl"
        >
          PayPal Checkout
        </a>
        
        <p className="mt-6 text-[8px] text-slate-300 uppercase font-black tracking-widest">Global Encryption Secured</p>
      </div>
    </main>
  );
}
