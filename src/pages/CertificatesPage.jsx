import React from 'react';
import { BadgeCheck, FileCheck, Receipt, Eye, Download } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';

const documents = [
  {
    title: 'Udyam Certificate',
    desc: 'Registered under Udyam for MSME compliance.',
    icon: BadgeCheck,
    file: '/gallery/certificates/udyam.jpg',
  },
  {
    title: 'GST Certificate',
    desc: 'Goods and Services Tax registration details.',
    icon: FileCheck,
    file: '/gallery/certificates/gst.jpg',
  },
  {
    title: 'Electricity Bill',
    desc: 'Latest electricity bill for address verification.',
    icon: Receipt,
    file: '/gallery/bill.pdf',
  },
];

export default function CertificatesPage() {
  return (
    <PageTransition>
      <main>
        <Section className="pt-28 pb-20 bg-[#020617] text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold">Certificates</h1>
              <p className="mt-4 text-gray-400">
                Official documents and registrations for Krishna Fast Packers & Movers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {documents.map(({ title, desc, icon: Icon, file }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-md hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="text-lg font-bold">{title}</div>
                      <div className="text-gray-400 text-sm mt-1">{desc}</div>
                    </div>
                  </div>
                  <div className="px-6 pb-6 flex items-center gap-3">
                    <a
                      href={file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white transition-colors"
                    >
                      <Eye size={16} />
                      <span>View</span>
                    </a>
                    <a
                      href={file}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 border border-white/20 transition-colors"
                    >
                      <Download size={16} />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </PageTransition>
  );
}
