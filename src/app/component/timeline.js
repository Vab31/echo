'use client';
import { motion } from 'framer-motion';

const timelineData = [
{ label: '1', description: 'Read "Kargil: From Surprise to Victory" in Summer 2024'},
{ label: '2', description: 'Started Project Echo to unravel history' },
{ label: '3', description: 'Operation Sindoor made me explore the lives of the Indian Army, their stories, and & their families.' },
{ label: '4', description: 'Interview with Elias Forneris: Bridging History | PhD at Cambridge, MP Candidate 2024' },
{ label: '5', description: 'Interview with Army Veteran Lt. Col. Tarun Bhasin in Summer 2025' },
{ label: '6', description: 'Interview with Army Veteran Brigadier Satish Sawhney ' },
{ label: '7', description: 'Interview with Support Our Heroes; an NGO supporting the Indian Army ' },
];

export default function Timeline() {
  return (
    <div className="relative py-16 bg-gradient-to-br from-blue-50 to-white">
     
      <div className="overflow-x-auto">
      
        <div className="relative flex space-x-20 min-w-max px-10 pb-10 pt-10">
          
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 transform -translate-y-1/2 z-0" />

          {timelineData.map((item, index) => {
            const isTop = (index + 1) % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col z-10 items-center flex-shrink-0 ${isTop ? '' : 'flex-col-reverse'}`}
              >
                {/* Info Card */}
                <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 rounded-xl w-52 text-center my-5 border border-blue-100">
                  <p className="text-sm text-gray-700 font-medium">{item.description}</p>
                </div>

                {/* Dot */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg border-4 border-white z-20 text-sm font-semibold">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

