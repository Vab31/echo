import React from 'react';

export default function SupportHeroSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center">
      {/* NGO Logo */}
      <div className="mb-8 flex justify-center">
        <img
          src="/images/soh_logo.jpeg"
          alt="Support Our Heroes Logo"
          className="h-28 w-auto md:h-36"
        />
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Every Contribution Counts — Fundraiser for Support Our Heroes
      </h2>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Join us in backing the brave individuals who stand at the front lines of change.
        By supporting{' '}
        <a
          href="https://www.theprojectecho.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          The Project Echo
        </a>
        , you’re helping amplify voices, bring critical aid, and create real impact across communities.
      </p>

      {/* Vision and Mission */}
      <div className="bg-gray-100 rounded-xl p-6 md:p-10 max-w-4xl mx-auto text-left shadow-md">
        <h3 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 text-center">
          Their Vision
        </h3>
        <p className="text-md md:text-lg text-gray-700 mb-6">
          We want to create a society where every family of our defence martyrs & veterans
          is self-dependent and can live a healthy life like us.
        </p>

        <h3 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 text-center">
          Their Mission
        </h3>
        <p className="text-md md:text-lg text-gray-700 mb-6">
          To build an ecosystem that provides resettlement to abandoned old veterans,
          ensures continued education for children of martyred soldiers, and trains war
          widows to achieve self-sustainability.
        </p>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 text-center mt-10">
          <div>
            <h4 className="text-2xl font-bold text-blue-600">20</h4>
            <p className="text-gray-700 text-md">States/UTs Active</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-blue-600">8+</h4>
            <p className="text-gray-700 text-md">Years of Operation</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-blue-600">300+</h4>
            <p className="text-gray-700 text-md">Soldiers' Families Helped</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-blue-600">6</h4>
            <p className="text-gray-700 text-md">Projects Across India</p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xl font-semibold text-green-700 mt-6">
              Fundraising Goal: ₹2.5 Lakhs INR
            </h4>
            <p className="text-gray-700 text-md">
              Help us reach our target to continue empowering and supporting veterans and their families.
            </p>
          </div>
        </div>
      </div>

      {/* Donate Button */}
      <div className="mt-10">
        <a
          href="https://supportourheroes.in/donate-now/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Donate Now to the Organization
        </a>
      </div>
    </section>
  );
}
