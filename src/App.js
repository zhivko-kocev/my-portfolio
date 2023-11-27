import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

const App = () => {
    const [activeSection, setActiveSection] = useState('Home');

    const sectionRefs = {
        Home: useRef(null),
        About: useRef(null),
        Services: useRef(null),
        Resume: useRef(null),
        Portfolio: useRef(null),
        Blog: useRef(null),
        Contact: useRef(null),
    };

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [sectionRefs]);

    return (
        <div>
            <Sidebar activeSection={activeSection} />

            <main>
                <div
                    id="Home"
                    ref={sectionRefs.Home}
                    className={activeSection === 'Home' ? 'active-section' : 'inactive-section'}
                >
                    <Home />
                </div>

                <div
                    id="About"
                    ref={sectionRefs.About}
                    className={activeSection === 'About' ? 'active-section' : 'inactive-section'}
                >
                    <About />
                </div>

                <div
                    id="Services"
                    ref={sectionRefs.Services}
                    className={activeSection === 'Services' ? 'active-section' : 'inactive-section'}
                >
                    <Services />
                </div>

                <div
                    id="Resume"
                    ref={sectionRefs.Resume}
                    className={activeSection === 'Resume' ? 'active-section' : 'inactive-section'}
                >
                    <Resume />
                </div>

                <div
                    id="Portfolio"
                    ref={sectionRefs.Portfolio}
                    className={activeSection === 'Portfolio' ? 'active-section' : 'inactive-section'}
                >
                    <Portfolio />
                </div>

                <div
                    id="Blog"
                    ref={sectionRefs.Blog}
                    className={activeSection === 'Blog' ? 'active-section' : 'inactive-section'}
                >
                    <Blog />
                </div>

                <div
                    id="Contact"
                    ref={sectionRefs.Contact}
                    className={activeSection === 'Contact' ? 'active-section' : 'inactive-section'}
                >
                    <Contact />
                </div>
            </main>
        </div>
    );
};

export default App;
