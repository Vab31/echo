import React from 'react'

export default function Podcast() {
    return (
        <div>
            {/* Podcast 1 */}
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Echoing Forgotten Voices:
                            <br class="hidden lg:inline-block" />A Conversation with Pratishtha Mukerjee</h1>
                            <p class="mb-8 leading-relaxed">In this engaging episode of Project Echo, we dive deep into India’s layered past with Pratishtha Mukerjee. From lesser-known stories to new interpretations of well-known events, this conversation breathes new energy into how we remember our history. Perfect for anyone seeking history that resonates beyond textbooks.</p>
                          
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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
                    </div>
                </div>
            </section>
        </div>
    )
}
