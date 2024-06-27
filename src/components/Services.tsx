// components/Services.js
const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and functional websites using the latest technologies.',
    imageUrl: 'https://via.placeholder.com/800x400', // Replace with actual image URLs
  },
  {
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications for both Android and iOS platforms.',
    imageUrl: 'https://via.placeholder.com/800x400', // Replace with actual image URLs
  },
  {
    title: 'Database Design',
    description: 'Designing efficient and scalable database solutions tailored to your needs.',
    imageUrl: 'https://via.placeholder.com/800x400', // Replace with actual image URLs
  },
  {
    title: 'Web Scraping',
    description: 'Extracting data from websites quickly and accurately.',
    imageUrl: 'https://via.placeholder.com/800x400', // Replace with actual image URLs
  },
  {
    title: 'API Development',
    description: 'Developing robust and secure APIs for seamless integration with your applications.',
    imageUrl: 'https://via.placeholder.com/800x400', // Replace with actual image URLs
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
        <p className="mt-4 text-gray-600">Explore the range of services we offer to help your business grow.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-64 object-cover object-center" src={service.imageUrl} alt={service.title} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
