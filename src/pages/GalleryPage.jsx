import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800',
    title: 'Movers Packing Furniture',
    category: 'Packing'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=800',
    title: 'Workers Carrying Boxes',
    category: 'Moving'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    title: 'Loading Goods into Trucks',
    category: 'Loading'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
    title: 'Transportation Trucks on Highway',
    category: 'Transport'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1530124560676-587cad321376?auto=format&fit=crop&q=80&w=800',
    title: 'Packing Fragile Items',
    category: 'Packing'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    title: 'Office Relocation Process',
    category: 'Office'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&q=80&w=800',
    title: 'Warehouse Storage',
    category: 'Storage'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800',
    title: 'Professional Team',
    category: 'Team'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80&w=800',
    title: 'Safe Delivery',
    category: 'Delivery'
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

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
          <span className="text-indigo-400">Gallery</span>
        </nav>

        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Take a look at our professional relocation process and successful moves across the country.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">
                  {image.category}
                </span>
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Maximize2 size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <span className="text-indigo-400 text-sm font-bold uppercase tracking-widest mb-2 block">
                  {selectedImage.category}
                </span>
                <h2 className="text-white text-3xl font-bold">{selectedImage.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </PageTransition>
  );
}
