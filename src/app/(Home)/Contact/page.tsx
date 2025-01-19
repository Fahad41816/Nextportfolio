"use client";

import {
  Send,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <a
    href="#"
    className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300"
  >
    {children}
  </a>
);

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div data-aos="fade-down" className="max-w-7xl p-8 mb-20">
      {/* Background text */}
      <div className="relative">
        <h1 className="text-[60px] md:text-[120px] font-bold text-gray-800/20 absolute md:-top-8 left-0 select-none">
          CONTACT
        </h1>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold relative mb-16 pt-12">
          GET IN <span className="text-amber-500">TOUCH</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-[1fr,2fr] gap-12">
        {/* Left Column - Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-6">DON&apos;T BE SHY !</h3>
          <p className="default:text-white mb-12">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-gray-400 mb-1">ADDRESS POINT</h4>
                <p className="text-black dark:text-white">
                  Agrabad Chittagong Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-gray-400 mb-1">MAIL ME</h4>
                <p className="text-black dark:text-white">
                  nahidulislamfahad6@mail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-gray-400 mb-1">CALL ME</h4>
                <p className="text-black dark:text-white">+01731321879</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <SocialIcon>
              <Facebook className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon>
              <Twitter className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon>
              <Youtube className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon>
              <Linkedin className="w-5 h-5" />
            </SocialIcon>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full bg-slate-100 dark:bg-gray-900 rounded-lg px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-slate-100 dark:bg-gray-900 rounded-lg px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <input
            type="text"
            placeholder="YOUR SUBJECT"
            className="w-full bg-slate-100 dark:bg-gray-900 rounded-lg px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500"
          />

          <textarea
            placeholder="YOUR MESSAGE"
            rows={6}
            className="w-full bg-slate-100 dark:bg-gray-900 rounded-lg px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          />

          <button
            type="submit"
            className="group flex items-center gap-2 bg-transparent  dark:text-white border-2 border-amber-500 rounded-full px-8 py-4 hover:bg-amber-500 transition-colors duration-300"
          >
            <span>SEND MESSAGE</span>
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </div>
  );
}
