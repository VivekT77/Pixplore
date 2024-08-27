import Footer from "./Footer";


const About = () => {
  return (
    
    <section className="bg-stone-200 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-8">
          About Us
        </h2>
        <p className="text-lg text-zinc-800 text-center mb-6">
          Welcome to our Pinterest clone, where creativity knows no bounds. We aim to inspire and connect people through the power of visuals. Explore, discover, and share your favorite ideas with our vibrant community.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
          <div className="md:w-1/3 bg-gray-800 p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300">
              Our mission is to empower individuals to explore their passions and share their creativity with the world. We believe in the power of visuals to bring people together and inspire new ideas.
            </p>
          </div>
          <div className="md:w-1/3 bg-gray-800 p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300">
              We envision a world where creativity is accessible to everyone, where ideas flow freely, and where people can connect through their shared interests. Our platform is a place to dream, discover, and create.
            </p>
          </div>
          <div className="md:w-1/3 bg-gray-800 p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">
              Our Community
            </h3>
            <p className="text-gray-300">
              Our community is at the heart of everything we do. We are proud to host a diverse group of creators, thinkers, and doers who use our platform to share their unique perspectives and connect with others.
            </p>
          </div>
        </div>
      </div>
    
    </section>
     

  );
};

export default About;
