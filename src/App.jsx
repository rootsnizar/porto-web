import React, { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-extrabold tracking-tight">IVANNIZAR</div>
            
            <nav className="hidden md:flex space-x-10 text-l font-semibold absolute left-1/2 transform -translate-x-1/2">
              <a href="#home" className="px-5 py-2 rounded-xl hover:bg-neutral-200 hover:dark:bg-gray-700 transition"
              >Tentang</a
              >
              <a href="#projects" className="px-5 py-2 rounded-xl hover:bg-neutral-200 hover:dark:bg-gray-700 transition"
              >Proyek</a
              >
              <a href="#contact" className="px-5 py-2 rounded-xl hover:bg-neutral-200 hover:dark:bg-gray-700 transition"
              >Kontak</a
              >
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                // Icon Bulan (Moon) untuk Dark Mode Aktif
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-9" fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
              ) : (
                // Icon Matahari (Sun) untuk Light Mode Aktif
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              )}
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {menuOpen && 
          <nav className="md:hidden block text-center font-semibold bg-gray-100 dark:bg-gray-800 shadow-md">
            <a href="#home" className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700"
            >Tentang</a
            >
            <a href="#projects" className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700"
            >Proyek</a
            >
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700"
            >Kontak</a
            >
          </nav>
        }
      </header>

      <section
        id="home"
        className="h-screen flex items-center justify-center text-center bg-cover bg-center py-20 pt-20"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div data-aos="fade-up">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 text-yellow-500 drop-shadow">Hallo Semua.</h2>
          <p className="text-lg md:text-2xl mb-6 text-white drop-shadow">Selamat Datang di Website Saya</p>
        </div>
      </section>

      <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-6">Tentang Saya</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Saya adalah developer yang fokus di frontend development, suka bikin UI yang bersih dan user-friendly.
            Pengalaman 5 tahun lebih di dunia pengembangan web, apps, dan lain sebagainya dari startup sampai proyek pribadi.
          </p>
        </div>
      </section>

          <section id="projects" className="py-20 bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Beberapa Proyek Saya</h3>
        <div className="grid md:grid-cols-3 gap-x-5 gap-y-4">
          {[
            {
              title: "Web Apps SIJALA",
              desc: "KKP Raja Ampat",
              link: "https:/kkprajaampat.com", // Ganti sesuai URL asli
            },
            {
              title: "Dashboard Aplikasi Survey123",
              desc: "KKP Raja Ampat",
              link: "https://kkprajaampat.com/patroli-jaga-laut/", // Placeholder
            },
            {
              title: "Website Loka Spasial Nusantara",
              desc: "Static HTML + CSS",
              link: "https://lokaspasial.com", // Ganti sesuai URL asli
            },
            {
              title: "Dashboard Dinas Perikanan",
              desc: "Arcgis Dashboard Builder",
              link: "https://lokaspasial.com", // Ganti sesuai URL asli
            },
            {
              title: "Web Apps KKP Kaimana",
              desc: "Wordpress + Nodejs",
              link: "https://lokaspasial.com", // Ganti sesuai URL asli
            },
            {
              title: "Coming Soon",
              desc: "Static HTML + CSS",
              link: "https://lokaspasial.com", // Ganti sesuai URL asli
            },
            {
              title: "Coming Soon",
              desc: "-",
              link: "https://lokaspasial.com", // Ganti sesuai URL asli
            },
            {
              title: "Coming Soon",
              desc: "-",
              link: "https://lokaspasial.com", // Ganti sesuai URL asli
            },
            {
              title: "Coming Soon",
              desc: "-",
              link: "https://lokaspasial.com", // Ganti sesuai URL asli
            },
          ].map((project, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow" data-aos="zoom-in" data-aos-delay={i * 100}>
              <h4 className="text-xl font-semibold mb-2 text-center">{project.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4 text-center">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 block text-center hover:underline"
              >
                Lihat Proyek
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section
        id="contact"
        className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300"
      >
        <div className="max-w-2xl mx-auto px-4 text-center" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-8">Temukan Saya di</h3>
          <div className="mt-2 flex justify-center space-x-5">
            {[
              {
                href: "mailto:muhammadivan171@gmail.com",
                label: "Email",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                ),
              },
              {
                href: "https://instagram.com/username",
                label: "Instagram",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  class="w-9 h-9" 
                  fill="none" stroke="currentColor" stroke-width="2" 
                  viewBox="0 0 24 24"
                  >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37a4 4 0 11-4.73-4.73 4 4 0 014.73 4.73z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                ),
              },
              {
                href: "https://linkedin.com/in/username",
                label: "LinkedIn",
                icon: <svg xmlns="http://www.w3.org/2000/svg" 
                class="w-9 h-9" 
                fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z"/>
              </svg>
              },
              {
                href: "https://twitter.com/username",
                label: "Twitter",
                icon: <svg xmlns="http://www.w3.org/2000/svg" 
                class="w-10 h-10 inline-block" 
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.52A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.635 4.117 4.117 0 001.804-2.27 8.224 8.224 0 01-2.605.978 4.1 4.1 0 00-7.025 3.738A11.65 11.65 0 013 4.795a4.093 4.093 0 001.27 5.47 4.073 4.073 0 01-1.858-.51v.05a4.1 4.1 0 003.292 4.02 4.095 4.095 0 01-1.852.07 4.1 4.1 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer data-aos="fade-up" className="bg-blue-900 dark:bg-gray-800 text-center py-3 text-gray-50 text-sm font-semibold transition-colors duration-300">
        <p>Copyright by Ivan Nizar - All rights reserved</p>
      </footer>
    </div>
  );
}
