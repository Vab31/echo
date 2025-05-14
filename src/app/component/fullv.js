import React from "react";

export default function Fullv() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex flex-col px-4 sm:px-6 lg:px-8 py-12 items-center">
          {/* Video Section */}
          <div className="w-full aspect-video max-w-3xl mb-6">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1080761363?h=926c0fac86&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                title="Interview with Ms. Pratishtha Mukerjee"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center">
            <h1 className="title-font text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Echoing Forgotten Voices: A Conversation with Pratishtha Mukerjee
            </h1>
            <p className="mb-8 text-base sm:text-lg leading-relaxed">
              In this engaging episode of Project Echo, we dive deep into India’s layered past with Pratishtha Mukerjee. From lesser-known stories to new interpretations of well-known events, this conversation breathes new energy into how we remember our history. Perfect for anyone seeking history that resonates beyond textbooks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
