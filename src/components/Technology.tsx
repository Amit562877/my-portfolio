// components/Technology.js
const technologies = [
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    imageUrl: 'https://via.placeholder.com/800x400', // Replace with actual image URLs
  },
  {
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    imageUrl: 'https://via.placeholder.com/800x400', // Replace with actual image URLs
  },
  {
    name: 'Python',
    description: 'A programming language that lets you work quickly and integrate systems more effectively.',
    imageUrl: 'https://via.placeholder.com/800x400', // Replace with actual image URLs
  },
  {
    name: 'Docker',
    description: 'A platform for developing, shipping, and running applications.',
    imageUrl: 'https://via.placeholder.com/800x400', // Replace with actual image URLs
  },
  {
    name: 'Kubernetes',
    description: 'An open-source system for automating deployment, scaling, and management of containerized applications.',
    imageUrl: 'https://via.placeholder.com/800x400', // Replace with actual image URLs
  },
];

const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Technology</h2>
        <p className="mt-4 text-gray-600">We use cutting-edge technologies to deliver the best solutions.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-64 object-cover object-center" src={tech.imageUrl} alt={tech.name} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{tech.name}</h3>
                <p className="mt-4 text-gray-600">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
