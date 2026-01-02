import { useState, useEffect } from 'react';
import svgPaths from "./imports/svg-n0tmhwffvo";
import imgImage17 from "figma:asset/ff90103dbcd4d855294602cde88bc3407371f5e0.png";
import imgGitIcon from "figma:asset/ff00c08760983e0e037aaf6ab4e004f4d147276a.png";
import imgImage18 from "figma:asset/5408fc9b192b9d9de925e2e534ab527f45c9240f.png";
import imgImage19 from "figma:asset/840296fac39cabf8cd0e45c5d21e9e49f444067f.png";
import imgImage20 from "figma:asset/62ee2924b8a3437b0a5f8c51f55ddb0ad204c631.png";
import imgImage21 from "figma:asset/348780418fb3df8c102fbeb4a112cda82b96502b.png";
import imgProject from "figma:asset/b94d335a046e5369005ac18361ab9b5210acd780.png";
import imgProject1 from "figma:asset/2607de40f99a1e1e1db55c7901116b1422152deb.png";
import imgRectangle17 from "figma:asset/6d993f37bde04f4d87234d7b9ba6e69fd20c3765.png";
import imgImage12 from "figma:asset/c1c55d921f5a03b3143311f18310baf8a186dbec.png";

function Logo() {
  return (
    <div className="size-[50px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.3347 50">
        <g id="Group">
          <path d={svgPaths.p246cea80} fill="black" />
          <path d={svgPaths.p135de800} fill="black" />
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo, so the form is not actually sent.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const skills = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'SASS', icon: '💅' },
    { name: 'JAVASCRIPT', icon: '⚡' },
    { name: 'REACT', icon: '⚛️' },
    { name: 'BOOTSTRAP', icon: '🅱️' },
    { name: 'GIT', icon: '📦' },
    { name: 'FIGMA', icon: '🎯' }
  ];

  const learningSkills = [
    { name: 'NODEJS', icon: '🟢' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'MONGODB', icon: '🍃' },
    { name: 'TYPESCRIPT', icon: '💙' }
  ];

  const otherSkills = [
    { name: 'ANGIELSKI C1/C2', icon: '🇬🇧' },
    { name: 'HISZPAŃSKI B1/B2', icon: '🇪🇸' },
    { name: 'C', icon: '©️' },
    { name: 'C++', icon: '©️➕' }
  ];

  const projects = [
    {
      title: 'eatsome.',
      description: 'Restaurant browsing in React.js (Using Yelp API)',
      tags: 'coded, designed',
      image: imgProject
    },
    {
      title: 'Project 2',
      description: 'E-commerce platform with modern UI',
      tags: 'coded',
      image: imgProject1
    },
    {
      title: 'Project 3',
      description: 'Portfolio website with animations',
      tags: 'designed',
      image: imgRectangle17
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
          </div>
          
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`font-['Montserrat'] font-bold text-[17px] transition-colors ${
                activeSection === 'about' ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`font-['Montserrat'] font-bold text-[17px] transition-colors ${
                activeSection === 'skills' ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`font-['Montserrat'] font-bold text-[17px] transition-colors ${
                activeSection === 'portfolio' ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black font-['Montserrat'] font-bold text-[15px] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
        {/* Rotated Black Rectangle Background */}
        <div className="absolute top-[-10%] right-[-15%] w-[1000px] h-[1200px] bg-black rotate-[10deg] pointer-events-none" />
        
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-left space-y-6">
              <p className="font-['Raleway'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">Hi, I am</p>
              <h1 className="font-['Raleway'] font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-black">
                Blessing Isah
              </h1>
              <p className="font-['Raleway'] font-extrabold text-[25px] text-gray-600">
                Virtual Assistant
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-6 mt-8">
                <button className="bg-gray-400 hover:bg-gray-500 transition-colors size-[56px] shadow-lg flex items-center justify-center">
                  <svg className="size-[35px]" fill="black" viewBox="0 0 35 34">
                    <path d={svgPaths.p3d208300} />
                  </svg>
                </button>
                <button className="bg-gray-400 hover:bg-gray-500 transition-colors size-[56px] shadow-lg flex items-center justify-center">
                  <svg className="size-[37px]" fill="black" viewBox="0 0 37 35.5">
                    <path d={svgPaths.p37b6c00} />
                  </svg>
                </button>
                <button className="bg-gray-400 hover:bg-gray-500 transition-colors size-[56px] shadow-lg flex items-center justify-center">
                  <svg className="size-[35px]" fill="black" viewBox="0 0 35 34">
                    <path d={svgPaths.pc875180} />
                  </svg>
                </button>
              </div>
              
              <p className="text-[15px] text-black mt-4 max-w-md">
                this is not my photo, but I dearly hope to get one just like this
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="w-full max-w-[600px] h-[700px] bg-gray-300 rounded-lg shadow-2xl flex items-center justify-center border-4 border-dashed border-gray-400">
                <div className="text-center p-8">
                  <svg className="w-32 h-32 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 font-['Montserrat'] font-semibold text-lg">
                    Your Image Here
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    600 x 700 recommended
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Berries Section */}
      <section className="bg-[#1d1d1d] py-20">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Decorative IT Logo */}
            <div className="absolute right-0 top-[-100px] opacity-20">
              <div className="relative w-[400px] h-[400px] rotate-[24deg]">
                <div className="absolute inset-0 border-[18px] border-black" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-['Varela'] text-[280px] text-black tracking-wider rotate-[24deg]">IT</span>
                </div>
              </div>
            </div>

            <h2 className="font-['Montserrat'] font-bold text-[30px] text-white tracking-[5.5px] mb-6">
              IT BERRIES
            </h2>
            <p className="font-['Open_Sans'] text-[15px] text-white text-justify max-w-[1148px] leading-relaxed mb-8">
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros.
            </p>
            <button className="font-['Montserrat'] font-semibold text-[15px] text-white hover:text-gray-300 transition-colors flex items-center gap-2">
              READ MORE
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border-8 border-black p-8 mb-12 inline-block">
              <h2 className="font-['Montserrat'] font-bold text-[30px] text-black tracking-[10px]">
                ABOUT ME
              </h2>
            </div>
            
            <p className="font-['Open_Sans'] text-[15px] text-black text-center max-w-[763px] mx-auto mb-12">
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
            </p>

            <div className="w-[170px] h-[12px] bg-black mx-auto mb-12" />

            {/* Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-10">🎨</div>
                <h3 className="font-['Montserrat'] font-bold text-[22px] text-black tracking-[4px] mb-4">
                  DESIGN
                </h3>
                <p className="font-['Open_Sans'] text-[14px] text-black text-justify">
                  I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4 opacity-10">⚙️</div>
                <h3 className="font-['Montserrat'] font-bold text-[22px] text-black tracking-[4px] mb-4">
                  DEVELOPMENT
                </h3>
                <p className="font-['Open_Sans'] text-[14px] text-black text-justify">
                  I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4 opacity-10">🔧</div>
                <h3 className="font-['Montserrat'] font-bold text-[22px] text-black tracking-[4px] mb-4">
                  MAINTENANCE
                </h3>
                <p className="font-['Open_Sans'] text-[14px] text-black text-justify">
                  I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="border-8 border-black p-8 mb-12 inline-block">
              <h2 className="font-['Montserrat'] font-bold text-[30px] text-black tracking-[10px]">
                SKILLS
              </h2>
            </div>

            <div className="w-[170px] h-[12px] bg-black mx-auto mb-12" />

            {/* Using Now */}
            <div className="mb-16">
              <h3 className="font-['Montserrat'] font-bold text-[30px] text-black tracking-[5.5px] mb-8">
                USING NOW:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-4 p-6 hover:bg-gray-100 rounded-lg transition-all hover:scale-105"
                  >
                    <div className="text-6xl">{skill.icon}</div>
                    <span className="font-['Montserrat'] text-[24px] text-black tracking-[3px]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning */}
            <div className="mb-16">
              <h3 className="font-['Montserrat'] font-bold text-[30px] text-black tracking-[5.5px] mb-8">
                LEARNING:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {learningSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-4 p-6 hover:bg-gray-100 rounded-lg transition-all hover:scale-105"
                  >
                    <div className="text-6xl">{skill.icon}</div>
                    <span className="font-['Montserrat'] text-[24px] text-black tracking-[3px]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div>
              <h3 className="font-['Montserrat'] font-bold text-[30px] text-black tracking-[5.5px] mb-8">
                OTHER SKILLS:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {otherSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-4 p-6 hover:bg-gray-100 rounded-lg transition-all hover:scale-105"
                  >
                    <div className="text-6xl">{skill.icon}</div>
                    <span className="font-['Montserrat'] text-[24px] text-black tracking-[3px] text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Icons from Import */}
            <div className="mt-12 flex justify-center gap-8 flex-wrap">
              <img src={imgImage18} alt="C" className="size-[100px] object-contain hover:scale-110 transition-transform" />
              <img src={imgImage19} alt="English" className="size-[100px] object-contain hover:scale-110 transition-transform" />
              <img src={imgImage20} alt="Spanish" className="size-[100px] object-contain hover:scale-110 transition-transform rounded-full" />
              <img src={imgImage21} alt="C++" className="size-[100px] object-contain hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-[#1a1a1a] py-20 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <img src={imgImage12} alt="" className="w-full h-full object-cover opacity-40" />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="border-8 border-black p-8 mb-12 inline-block">
            <h2 className="font-['Montserrat'] font-bold text-[30px] text-black tracking-[13px]">
              PORTFOLIO
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-8 mb-12">
            <button className="font-['Montserrat'] font-semibold text-[14px] text-white pb-2 border-b-2 border-white">
              ALL
            </button>
            <button className="font-['Montserrat'] font-semibold text-[14px] text-gray-500 hover:text-white transition-colors pb-2">
              CODED
            </button>
            <button className="font-['Montserrat'] font-semibold text-[14px] text-gray-500 hover:text-white transition-colors pb-2">
              DESIGNED
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 p-8">
                  <h3 className="font-['Montserrat'] font-bold text-[25px] text-white tracking-[5px]">
                    {project.title}
                  </h3>
                  <p className="font-['Montserrat'] font-semibold italic text-[10px] text-white tracking-wider">
                    {project.tags}
                  </p>
                  <p className="font-['Montserrat'] font-medium text-[10px] text-white text-center">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <button className="font-['Montserrat'] font-semibold text-[12px] text-white tracking-wider hover:underline">
                      DEMO
                    </button>
                    <button className="font-['Montserrat'] font-semibold text-[12px] text-white tracking-wider hover:underline">
                      MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="font-['Montserrat'] font-semibold text-[20px] text-white text-center mt-12">
            And many more to come!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="border-8 border-black p-8 mb-8 inline-block">
              <h2 className="font-['Montserrat'] font-bold text-[30px] text-black tracking-[10px]">
                CONTACT
              </h2>
            </div>

            <p className="font-['Open_Sans'] text-[15px] text-black text-center mb-12">
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="font-['Montserrat'] font-bold text-[14px] text-gray-500 tracking-wider mb-2 block">
                  ENTER YOUR NAME*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b-[5px] border-black bg-transparent py-3 focus:outline-none focus:border-gray-700 transition-colors"
                />
              </div>

              <div>
                <label className="font-['Montserrat'] font-bold text-[14px] text-gray-500 tracking-wider mb-2 block">
                  ENTER YOUR EMAIL*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b-[5px] border-black bg-transparent py-3 focus:outline-none focus:border-gray-700 transition-colors"
                />
              </div>

              <div>
                <label className="font-['Montserrat'] font-bold text-[14px] text-gray-500 tracking-wider mb-2 block">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b-[5px] border-black bg-transparent py-3 focus:outline-none focus:border-gray-700 transition-colors"
                />
              </div>

              <div>
                <label className="font-['Montserrat'] font-bold text-[14px] text-gray-500 tracking-wider mb-2 block">
                  YOUR MESSAGE*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-b-[5px] border-black bg-transparent py-3 focus:outline-none focus:border-gray-700 transition-colors resize-none"
                />
              </div>

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="font-['Montserrat'] font-bold text-[16px] text-black tracking-wider px-12 py-4 hover:bg-gray-100 transition-colors flex items-center gap-4"
                >
                  SUBMIT
                  <span className="text-2xl">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <button
              onClick={() => scrollToSection('home')}
              className="group flex flex-col items-center gap-4 mx-auto hover:scale-110 transition-transform"
            >
              <svg className="size-[15px] rotate-[-90deg]" fill="white" viewBox="0 0 15 15">
                <path d={svgPaths.p56cf9b0} />
                <path d={svgPaths.p206fc480} />
              </svg>
              <span className="font-['Montserrat'] font-bold text-[15px] text-white tracking-[2.7px]">
                BACK TO TOP
              </span>
            </button>

            {/* Social Icons */}
            <div className="flex justify-center gap-8">
              <button className="hover:scale-110 transition-transform">
                <svg className="size-[30px]" fill="white" fillOpacity="0.9" viewBox="0 0 30 30">
                  <path d={svgPaths.p7492e00} />
                </svg>
              </button>
              <button className="hover:scale-110 transition-transform">
                <svg className="size-[30px]" fill="white" fillOpacity="0.9" viewBox="0 0 30 30">
                  <path d={svgPaths.p212c1ec0} />
                </svg>
              </button>
              <button className="hover:scale-110 transition-transform">
                <svg className="size-[30px]" fill="white" fillOpacity="0.9" viewBox="0 0 30 30">
                  <path d={svgPaths.p148f00} />
                </svg>
              </button>
              <button className="hover:scale-110 transition-transform">
                <svg className="size-[30px]" fill="white" viewBox="0 0 30 28">
                  <path d={svgPaths.p31377c00} />
                </svg>
              </button>
            </div>

            <p className="font-['Nunito'] text-[18px] text-white">
              <span className="font-bold">@2020 Blessing Isah </span>
              <span className="font-normal">All Rights Reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}