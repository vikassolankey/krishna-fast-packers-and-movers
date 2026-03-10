import React from 'react';
import { motion } from 'framer-motion';
import { Play, Home, ChevronRight, Clock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const videos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800',
    title: 'Professional Packing Process',
    duration: '2:45',
    views: '1.2k',
    category: 'Process'
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=800',
    title: 'Furniture Loading Techniques',
    duration: '3:15',
    views: '850',
    category: 'Loading'
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    title: 'Our Relocation Team in Action',
    duration: '4:20',
    views: '2.1k',
    category: 'Team'
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
    title: 'Long Distance Transport Process',
    duration: '5:10',
    views: '1.5k',
    category: 'Transport'
  },
  {
    id: 5,
    thumbnail: 'https://images.unsplash.com/photo-1530124560676-587cad321376?auto=format&fit=crop&q=80&w=800',
    title: 'Customer Success Stories',
    duration: '3:50',
    views: '3.4k',
    category: 'Reviews'
  },
  {
    id: 6,
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    title: 'Office Relocation Highlights',
    duration: '2:55',
    views: '920',
    category: 'Office'
  }
];

export default function VideosPage() {
  return (
    <PageTransition>
      <div className="pt-32 md:pt-40 bg-[#0f0f0f] min-h-screen text-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home size={14} />
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-indigo-400">Videos</span>
        </nav>

        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Videos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Watch our team in action and learn more about our professional relocation and packing services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-indigo-600/50 group-hover:bg-indigo-500 transition-colors"
                  >
                    <Play size={28} fill="currentColor" className="ml-1" />
                  </motion.div>
                </div>

                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-xs font-medium flex items-center gap-1">
                  <Clock size={12} />
                  {video.duration}
                </div>

                <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-600/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {video.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 line-clamp-1 group-hover:text-indigo-400 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    {video.views} views
                  </div>
                  <button className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                    Watch Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
