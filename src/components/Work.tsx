// components/Work.js
import Slider from 'react-slick';
import Image from 'next/image';

const workSamples = [
  {
    title: 'Project One',
    description: 'Description for project one.',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Project Three',
    description: 'Description for project three.',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Project Four',
    description: 'Description for project four.',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
];

const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="work" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Recent Work</h2>
        <p className="mt-4 text-gray-600">Check out some of our recent projects.</p>
        <div className="mt-10">
          <Slider {...settings}>
            {workSamples.map((work, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    className="w-full h-56 object-cover object-center"
                    src={work.imageUrl}
                    alt={work.title}
                    width={800}
                    height={400}
                  />
                  <div className="px-6 py-4">
                    <h3 className="text-xl font-semibold text-gray-800">{work.title}</h3>
                    <p className="mt-2 text-gray-600">{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Work;
