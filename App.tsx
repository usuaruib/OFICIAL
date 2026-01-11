
import React, { useState } from 'react';
import { 
  Home, 
  Sparkles, 
  History as HistoryIcon, 
  Library, 
  Settings, 
  Video, 
  Smartphone,
  Menu,
  X,
  ChevronRight,
  Image as ImageIcon
} from 'lucide-react';
import Landing from './components/Landing';
import Generator from './components/Generator';
import History from './components/History';
import HookLibrary from './components/HookLibrary';
import { useScripts } from './hooks/useScripts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'create' | 'history' | 'library' | 'settings'>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { entries, saveEntry, deleteEntry, toggleFavorite } = useScripts();

  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Início' },
    { id: 'create', icon: <Sparkles size={20} />, label: 'Criar Roteiro', badge: 'NOVO' },
    { id: 'history', icon: <HistoryIcon size={20} />, label: 'Meus Roteiros' },
    { id: 'library', icon: <Library size={20} />, label: 'Biblioteca' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Configurações' },
  ];

  // URL otimizada para contornar restrições comuns de incorporação do Google Drive
  const logoUrl = "https://lh3.googleusercontent.com/d/1bqCeQi8AuEtEMPkrFtr77y23-LOM7aLm";

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Landing onStart={() => setActiveTab('create')} />;
      case 'create':
        return <Generator onSave={saveEntry} />;
      case 'history':
        return <History entries={entries} onDelete={deleteEntry} onToggleFavorite={toggleFavorite} />;
      case 'library':
        return <HookLibrary />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center p-6">
            <Settings size={64} className="text-brand-orange mb-4 opacity-50" />
            <h2 className="text-2xl font-bold">Em breve</h2>
            <p className="text-brand-textGray mt-2">Esta funcionalidade está sendo preparada para você.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-brand-black text-white font-sans">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-brand-grayDark border-r border-brand-orange/20 sticky top-0 h-screen p-6">
        {/* Branding Area - Logo Image + Text vertically stacked */}
        <button 
          onClick={() => setActiveTab('home')}
          className="flex flex-col items-center gap-2 mb-10 group text-center outline-none"
        >
          {/* Dedicated Image Area for Logo - Increased size and removed border/padding */}
          <div className="w-48 h-48 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-all relative">
            <img 
              src={logoUrl} 
              alt="Logo High Midia" 
              className="w-full h-full object-contain z-10"
              referrerPolicy="no-referrer"
              loading="eager"
              crossOrigin="anonymous"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.opacity = '0';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.logo-fallback')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'logo-fallback absolute inset-0 flex flex-col items-center justify-center text-brand-orange/20';
                  fallback.innerHTML = `
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          
          {/* Logo Text below the image */}
          <div className="mt-2">
            <h1 className="text-2xl font-black tracking-tighter leading-none group-hover:text-brand-orange transition-colors uppercase">
              HIGH MIDIA<br/><span className="text-brand-orange">Scripts</span>
            </h1>
            <p className="text-[10px] font-bold text-brand-textGray/40 mt-2 tracking-widest uppercase">Content AI Platform</p>
          </div>
        </button>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                activeTab === item.id 
                ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' 
                : 'text-brand-textGray hover:bg-brand-grayLight'
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="font-semibold">{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-brand-orange text-brand-black text-[10px] font-black px-1.5 py-0.5 rounded">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-brand-orange/10 text-center">
          <p className="text-[10px] font-bold text-brand-textGray/40 uppercase tracking-widest">
            High Midia © 2024
          </p>
        </div>
      </aside>

      {/* Mobile Top Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-brand-grayDark border-b border-brand-orange/20 z-50 px-4 py-3 flex items-center justify-between">
        <button 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3"
        >
          <div className="w-16 h-16 overflow-hidden flex items-center justify-center relative">
            <img 
              src={logoUrl} 
              alt="Logo" 
              className="w-full h-full object-contain z-10"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.opacity = '0';
              }}
            />
          </div>
          <h1 className="text-base font-black tracking-tighter uppercase leading-tight">
            High Midia <br/><span className="text-brand-orange">Scripts</span>
          </h1>
        </button>
        <button onClick={() => setIsSidebarOpen(true)} className="text-brand-orange p-2">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-brand-black/90 z-[60] flex justify-end">
          <div className="w-4/5 bg-brand-grayDark h-full p-6 animate-in slide-in-from-right duration-300 shadow-2xl overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={() => { setActiveTab('home'); setIsSidebarOpen(false); }}
                className="flex flex-col items-center gap-4 w-full"
              >
                <div className="w-40 h-40 overflow-hidden flex items-center justify-center relative">
                   <img src={logoUrl} alt="Logo" className="w-full h-full object-contain z-10" referrerPolicy="no-referrer" crossOrigin="anonymous" />
                </div>
                <div className="text-center">
                  <span className="text-3xl font-black tracking-tighter uppercase block leading-none">High Midia</span>
                  <span className="text-brand-orange text-3xl font-black tracking-tighter uppercase block">Scripts</span>
                </div>
              </button>
              <button onClick={() => setIsSidebarOpen(false)} className="text-brand-orange bg-brand-grayLight/50 p-2 rounded-xl absolute top-6 right-6">
                <X size={28} />
              </button>
            </div>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as any);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-lg transition-all ${
                    activeTab === item.id 
                    ? 'bg-brand-orange text-brand-black font-bold shadow-lg shadow-brand-orange/20' 
                    : 'text-brand-textGray hover:bg-brand-grayLight'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-24 md:pb-0 md:h-screen pt-20 md:pt-0">
        <div className="max-w-6xl mx-auto w-full">
          {renderContent()}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-brand-orange/20 z-50 flex justify-around p-3">
        {navItems.slice(0, 4).map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === item.id ? 'text-brand-orange' : 'text-brand-textGray'
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
