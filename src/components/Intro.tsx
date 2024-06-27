// components/Intro.js
import Image from 'next/image';

const Intro = () => {
  return (
    <section id="intro" className="py-20 bg-white flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 p-6">
        <Image
          src="https://via.placeholder.com/800x400" // Replace with the actual image path
          alt="Your Name"
          width={400}
          height={400}
          className="rounded-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-3xl font-semibold text-gray-800">Your Name</h2>
        <p className="mt-4 text-gray-600">
          {/* Insert details from your resume here */}
          <strong>Professional Summary:</strong> Experienced web developer with a demonstrated history of working in the information technology and services industry. Skilled in various web technologies and frameworks.
        </p>
        <p className="mt-4 text-gray-600">
          <strong>Experience:</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Company Name: Role (Year-Year)</li>
            <li>Company Name: Role (Year-Year)</li>
            <li>Company Name: Role (Year-Year)</li>
          </ul>
        </p>
        <p className="mt-4 text-gray-600">
          <strong>Education:</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Degree, University Name (Year-Year)</li>
            <li>Degree, University Name (Year-Year)</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Intro;
