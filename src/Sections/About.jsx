import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen flex items-center justify-center py-8 sm:py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 head1">
          About me
        </h1>

        <div className="m-auto flex flex-col justify-center h-full">
          <div className="p-4 sm:p-5 shadow-md border-2 border-gray-600 rounded-xl mx-auto relative bg-gray-800">
            <p className="text-sm sm:text-base leading-relaxed">
              Hey there! I’m a 4th year Computer Science student at McMaster University who loves building things with code and learning how tech can solve real problems. I got my start in high school with Python, where I built a hospital management system from scratch (with plenty of trial and error along the way).
              <br />
              <br />
              Since then, I’ve picked up languages like JavaScript, C++, Java, and Haskell, and tackled courses in everything from algorithms to databases. I’ve built web apps, data pipelines, microservices, managed infrastructure, and even helped automate machine learning with Google Developer Student Clubs. At IBM, I interned as a software engineer, working on features and infrastructure for a learning platform used by millions.
              <br />
              <br />
              I’ve learned a ton from working with different teams and jumping into new challenges. Now, I’m looking for my next adventure as a software or data engineer, ready to build cool things, learn a lot, and hopefully make someone’s life a little easier along the way. I’m particularly interested in data engineering, infrastructure, devops, and cloud related technologies, and I’m always looking for opportunities to learn new tools and frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
