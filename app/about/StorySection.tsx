
'use client';

export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in 2019, we are a collective of experienced freelancers united by a shared vision: to transform ideas into impactful digital experiences. While we operate as an independent group of professionals, we offer the flexibility and expertise of a full-service digital team.
              </p>
              <p>
                Our collective spans a diverse range of disciplines, including branding, web design and development, digital marketing, content creation, and more, allowing us to deliver comprehensive solutions tailored to our clients' needs.
              </p>
              <p>
                What sets us apart is our ability to seamlessly blend strategic insight with imaginative execution. We don't just create beautiful work — we ensure it delivers measurable results.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/images/about1.jpg"
              alt="Our Story"
              className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
            />
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Since 2019</div>
              <div className="text-emerald-100">Transforming Ideas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
