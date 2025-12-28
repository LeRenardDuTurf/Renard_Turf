import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, ShieldCheck, BookOpen, Zap, 
  ChevronRight, Target, BarChart3, Clock, 
  CheckCircle2, Users, Star, Lock 
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: "ROI Moyen", value: "+51%", icon: <TrendingUp className="w-5 h-5 text-orange-500" /> },
    { label: "Vues YouTube", value: "500k ", icon: <Users className="w-5 h-5 text-orange-500" /> },
    { label: "Taux Réussite", value: "73%", icon: <Target className="w-5 h-5 text-orange-500" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500/30">
      
      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-600/20">
               <Zap className="text-white fill-current w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">RENARD<span className="text-orange-500">TURF</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#analyse" className="hover:text-orange-500 transition-colors">L'Analyse</a>
            <a href="#offres" className="hover:text-orange-500 transition-colors">VIP & Bible</a>
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2.5 rounded-full transition-all transform hover:scale-105 font-bold shadow-lg shadow-orange-600/20">
              Accès VIP
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent -z-10" />
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Opération 2026 : Rentabilité Activée</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 leading-none tracking-tighter">
            DEVIENS UN <span className="text-orange-500">INVESTISSEUR</span>,<br />PLUS UN JOUEUR.
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Arrête de parier au hasard. Utilise la data, la génétique et les 13 piliers du Renard pour battre le PMU sur le long terme.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-orange-600/30 group">
              REJOINDRE LE VIP <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 border border-slate-800 px-10 py-5 rounded-2xl font-black text-lg transition-all">
              LA BIBLE DU RENARD
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-900/40 border border-slate-800/50 p-8 rounded-3xl backdrop-blur-xl hover:border-orange-500/30 transition-colors">
                <div className="flex justify-center mb-5">{stat.icon}</div>
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANALYSE DU JOUR */}
      <section id="analyse" className="py-24 bg-slate-900/20 border-y border-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-3xl border-t-orange-500/20 border-t-2">
            <div className="p-8 md:p-16">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                  <h2 className="text-4xl font-black text-white mb-3 tracking-tighter uppercase">L'Analyse du Jour 🦊</h2>
                  <p className="text-slate-400 font-medium italic">Prix de Bar-le-Duc - Vincennes - Demain</p>
                </div>
                <div className="bg-orange-500/10 text-orange-500 px-5 py-2.5 rounded-xl font-black text-xs border border-orange-500/20 uppercase tracking-widest">
                  Quinté+ International
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <p className="text-slate-300 leading-relaxed text-xl font-medium">
                    "Vincennes nous offre un plateau royal demain. Mon pivot est une évidence statistique, mais attention : la piste est exigeante et plusieurs favoris présentent un 'Hic' génétique majeur..."
                  </p>
                  
                  <div className="relative group">
                    <div className="p-8 bg-slate-950/60 border border-slate-800 rounded-3xl space-y-5 filter blur-md select-none pointer-events-none opacity-40">
                      <p className="text-sm">Le n°5 est mon favori car il a un engagement parfait...</p>
                      <p className="text-sm">Mon outsider caché est le n°12, un fils de Siyouni...</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-slate-900 border border-orange-500/40 p-10 rounded-[2rem] shadow-2xl text-center max-w-sm transform group-hover:scale-105 transition-all">
                        <Lock className="w-14 h-14 text-orange-500 mx-auto mb-6" />
                        <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tight">Analyse Verrouillée</h3>
                        <p className="text-sm text-slate-400 mb-8 font-medium">Accède au ticket complet, au tocard secret et à la sélection VIP du Renard.</p>
                        <button className="w-full bg-orange-600 hover:bg-orange-500 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-orange-600/30 transition-all">
                          Prendre la Fiche (1€)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/50 p-8 rounded-3xl border border-slate-800">
                  <h4 className="font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tighter text-sm">
                    <BarChart3 className="w-5 h-5 text-orange-500" /> Paramètres Course
                  </h4>
                  <ul className="space-y-6 text-[13px]">
                    <li className="flex justify-between border-b border-slate-900 pb-4">
                      <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Piste</span>
                      <span className="text-slate-200 font-bold">Grande Piste</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-900 pb-4">
                      <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Engagement</span>
                      <span className="text-orange-500 font-black">Objectif Visé</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Confiance</span>
                      <span className="text-orange-500 font-black text-lg">85%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section id="offres" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase">Passe au niveau supérieur</h2>
            <p className="text-slate-400 text-lg">Arrête de jouer au hasard, commence à investir.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="group bg-slate-900 border border-slate-800 p-12 rounded-[3rem] hover:border-orange-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 border border-slate-800">
                  <BookOpen className="text-orange-500 w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">La Bible du Renard</h3>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed font-medium">Ma méthode complète, mes 13 piliers de sélection et ma gestion financière.</p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-4 text-sm text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" /> Les 13 piliers de l'analyse data
                  </li>
                  <li className="flex items-center gap-4 text-sm text-slate-300 font-black bg-orange-500/5 p-3 rounded-2xl border border-orange-500/10">
                    <Star className="w-5 h-5 text-orange-500 fill-orange-500" /> + 7 JOURS VIP OFFERTS
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span className="text-4xl font-black">14,90€</span>
                <button className="bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-2xl font-black transition-all border border-slate-700 uppercase text-xs tracking-widest">
                  Commander
                </button>
              </div>
            </div>

            <div className="group bg-orange-600 p-12 rounded-[3rem] transform hover:-translate-y-2 transition-all shadow-2xl shadow-orange-600/30 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                  <Zap className="text-white fill-current w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Pass Hebdo VIP</h3>
                <p className="text-orange-100 mb-10 text-lg leading-relaxed font-medium">Chaque matin avant 9h, reçois mon analyse complète et mon ticket optimisé.</p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-4 text-sm text-white/90 font-black">
                    <CheckCircle2 className="w-5 h-5 text-white" /> Mon outsider secret
                  </li>
                  <li className="flex items-center gap-4 text-sm text-white/90 font-black">
                    <CheckCircle2 className="w-5 h-5 text-white" /> Accès direct au canal privé
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex flex-col text-white">
                   <span className="text-4xl font-black">5€</span>
                   <span className="text-[10px] text-orange-200 font-bold uppercase tracking-widest font-black">par semaine</span>
                </div>
                <button className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-black transition-all hover:bg-slate-100 shadow-xl uppercase text-xs tracking-widest">
                  C'est parti !
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Zap className="text-orange-500 w-8 h-8" />
            <span className="text-2xl font-black tracking-tighter text-white uppercase">RENARD<span className="text-orange-500">TURF</span></span>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto mb-10">
            <p className="text-slate-600 text-[11px] leading-loose font-bold uppercase tracking-widest">
              Jouer comporte des risques : endettement, isolement, dépendance. Appelez le 09 74 75 13 13. Réservé aux majeurs.
            </p>
          </div>
          <p className="text-slate-800 text-[10px] font-black uppercase tracking-[0.5em]">
            © 2026 RENARD TURF - DOMINATION HIPPIQUE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

