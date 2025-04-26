/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaTwitter, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <main>
      <section id="about" className="py-16 mt-20">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/lightyagami.jpg"
              alt="Profile"
              className="h-40 w-40 rounded-full object-cover shadow-xl"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Hey, I&apos;m Sivateja Matam👋
              </h2>
              <p className="mt-4 text-base md:text-lg text-white">
                I&apos;m a Trained fullstack developer 🚀, graduated in CSE.
              I&apos;m Proficient in Web Dev and building projects.I am 
              Actively seeking new job opportunities in software development. 
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <Button
              variant="outline"
              size="icon"
              className="transition transform duration-200 active:scale-95 hover:scale-125"
              aria-label="GitHub"
              onClick={() => window.open('https://github.com/ShivaTejMatam', '_blank')}
            >
              <FaGithub className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="transition transform duration-200 active:scale-95 hover:scale-125"
              aria-label="Twitter"
              onClick={() => window.open('https://x.com/shivtejMatam', '_blank')}
            >
              <FaTwitter className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="transition transform duration-200 active:scale-95 hover:scale-125"
              aria-label="LinkedIn"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/sivateja-matam-51420b231/',
                  '_blank'
                )
              }
            >
              <FaLinkedin className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="transition transform duration-200 active:scale-95 hover:scale-125"
              aria-label="Resume"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/16Ds2Pe7lK2jhmUutcZ5wDIxLHisDLMwN/view?usp=drive_link'
                )
              }
            >
              <FaFileAlt className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
