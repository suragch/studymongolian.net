import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Study Mongolian Online"
      description="StudyMongolian.net is dedicated to teaching Mongolian as it is written and spoken by the Mongolian people of Inner Mongolia, China.">
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col col--8">
                <div className="hero-content">
                  <h1 className="hero-title">Study Mongolian Online</h1>
                  <p className="hero-subtitle">{siteConfig.tagline}</p>
                  <p className="hero-description">
                    StudyMongolian.net is dedicated to teaching Mongolian as it is written and spoken by the Mongolian people of Inner Mongolia, China. Share your comments, questions, and expertise as we learn together.
                  </p>
                  <div className="hero-cta">
                    <Link
                      className="button button--primary button--lg"
                      to="/lessons/lesson-1">
                      Start Studying
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="hero-image">
                  <img 
                    src="/img/logo.jpg" 
                    alt="Study Mongolian Logo"
                    className="hero-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar Widgets Section */}
        <section className="widgets-section">
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="widget-wrapper">
                  <h4 className="widget-title">Recent Posts</h4>
                  <div className="widget-content">
                    <p>Latest blog posts and articles will appear here.</p>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="widget-wrapper">
                  <h4 className="widget-title">Quick Links</h4>
                  <div className="widget-content">
                    <ul className="quick-links">
                      <li><a href="/apps" target="_blank">Chimee App (English)</a></li>
                      <li><a href="/apps" target="_blank">Chimee App (Chinese)</a></li>
                      <li><a href="/apps" target="_blank">Chimee Help (English)</a></li>
                      <li><a href="/apps" target="_blank">Chimee Help (Chinese)</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="widget-wrapper">
                  <h4 className="widget-title">Resources</h4>
                  <div className="widget-content">
                    <ul className="resource-links">
                      <li><Link to="/dictionary">Dictionary</Link></li>
                      <li><Link to="/resources/grammar">Grammar Reference</Link></li>
                      <li><Link to="/resources/books">Books</Link></li>
                      <li><Link to="/resources/anki-flashcards">Flashcards</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}