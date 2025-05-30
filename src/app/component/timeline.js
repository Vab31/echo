'use client';
import { motion } from 'framer-motion';

const timelineData = [
  { label: '1', description: 'Read a Book "Kargil: From Surprise to Victory" by Gen. V.P. Malik on Indian history' },
  { label: '2', description: 'Started Podcast to connect with people and discuss history' },
  { label: '3', description: 'Operation Sindoor made me explore Indian Army lives, stories, and families.' },
  { label: '4', description: 'Two interviews with Army Veterans' },
  { label: '5', description: 'Interview with Support Our Heros.' },
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

