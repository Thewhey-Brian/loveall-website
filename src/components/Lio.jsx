import { Activity, ArrowRight, FileText, FlaskConical } from 'lucide-react';

const Lio = () => {
  return (
    <div className="pt-24 min-h-screen text-stone-300">
       <div className="max-w-7xl mx-auto px-6">

          {/* Lab Header */}
          <div className="border-b border-stone-700/50 pb-12 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
              <div>
                <div className="text-xs font-mono text-orange-500 mb-4 tracking-widest">RESEARCH DIVISION</div>
                <h1 className="text-6xl md:text-8xl font-sans font-bold text-white tracking-tighter">LIO</h1>
              </div>
              <div className="mt-8 md:mt-0 max-w-sm text-right">
                 <p className="font-mono text-xs text-stone-500 leading-relaxed">
                   EST. 2024 // EXPERIMENTAL BRANCH <br/>
                   FOCUS: BIOMECHANIC GENERATION <br/>
                   STATUS: ACTIVE
                 </p>
              </div>
            </div>
          </div>

          {/* Research Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
             {/* Left: Featured Project */}
             <div className="relative border border-stone-700/50 bg-stone-900/50 p-8 backdrop-blur-sm group hover:border-orange-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-4">
                  <Activity className="text-orange-500 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Project: Kinetic</h3>
                <p className="font-mono text-sm text-orange-500 mb-8">v.0.9.2 // Beta Phase</p>

                <div className="h-64 w-full bg-stone-950 border border-stone-800 relative overflow-hidden mb-6">
                   {/* Grid Background */}
                   <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                   {/* Abstract Data Viz */}
                   <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-around px-8 pb-8">
                      {[40, 70, 50, 90, 60, 80, 40, 60].map((h, i) => (
                        <div key={i} className="w-4 bg-orange-600/20 hover:bg-orange-600 transition-all duration-300" style={{ height: `${h}%` }}></div>
                      ))}
                   </div>
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-4xl font-mono text-white/10 font-bold">RAW DATA</div>
                   </div>
                </div>

                <p className="text-stone-400 leading-relaxed mb-6">
                  We are currently training models on unstructured footage from public courts to democratize stroke analysis. Initial results show 94% accuracy in identifying spin types from low-resolution mobile footage.
                </p>
                <button className="text-orange-500 font-mono text-sm hover:text-white flex items-center space-x-2 transition-colors">
                   <span>VIEW DATASET</span> <ArrowRight size={14} />
                </button>
             </div>

             {/* Right: Paper List */}
             <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-6">
                   <h4 className="font-mono text-sm text-stone-500">LATEST PUBLICATIONS</h4>
                   <FileText size={16} className="text-stone-600" />
                </div>

                {[
                  { title: "Generative Adversarial Networks in Stroke Prediction", date: "OCT 2024", tag: "AI/ML" },
                  { title: "The Geometry of Spin: A Computer Vision Approach", date: "SEP 2024", tag: "PHYSICS" },
                  { title: "Latency Reduction in Real-Time Biomechanics", date: "AUG 2024", tag: "ENGINEERING" }
                ].map((paper, i) => (
                  <div key={i} className="group flex items-start justify-between p-4 hover:bg-stone-800/50 transition-colors cursor-pointer border border-transparent hover:border-stone-700">
                     <div>
                        <h5 className="text-white font-bold mb-1 group-hover:text-orange-500 transition-colors">{paper.title}</h5>
                        <div className="flex space-x-3 text-xs font-mono text-stone-500">
                           <span>{paper.date}</span>
                           <span>//</span>
                           <span>{paper.tag}</span>
                        </div>
                     </div>
                     <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-orange-500" size={18} />
                  </div>
                ))}

                <div className="mt-8 p-6 bg-orange-900/10 border border-orange-500/20 rounded-lg">
                   <div className="flex items-start space-x-4">
                      <FlaskConical className="text-orange-500 shrink-0" />
                      <div>
                         <h5 className="text-white font-bold text-sm mb-1">Open Call for Contributors</h5>
                         <p className="text-xs text-stone-400 leading-relaxed mb-3">
                            LIO is accepting applications for data scientists with a background in sports physics.
                         </p>
                         <span className="text-xs font-mono text-orange-500 underline cursor-pointer">APPLY NOW</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Lio;
