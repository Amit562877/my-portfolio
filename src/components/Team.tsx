// components/Team.js
const teamMembers = [
    {
      name: 'John Doe',
      role: 'Frontend Developer',
      description: 'John has over 5 years of experience in frontend development, specializing in React and Vue.',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      name: 'Jane Smith',
      role: 'Backend Developer',
      description: 'Jane is an expert in backend technologies with a focus on Node.js and Python.',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      name: 'Mike Johnson',
      role: 'Full Stack Developer',
      description: 'Mike is proficient in both frontend and backend development, working with MERN stack.',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      description: 'Emily designs intuitive and user-friendly interfaces with a focus on user experience.',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      name: 'David Wilson',
      role: 'Project Manager',
      description: 'David ensures that projects are delivered on time and meet client expectations.',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
  ];
  
  const Team = () => {
    return (
      <section id="team" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-gray-800">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;
  