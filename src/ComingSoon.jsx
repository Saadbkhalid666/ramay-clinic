
import { useEffect, useState } from "react";
import {
  FiActivity,
  FiHeart,
  FiShield,
  FiInstagram,
} from "react-icons/fi";
import { FaFacebookF, FaStethoscope } from "react-icons/fa";
import "./ComingSoon.css";

// Change this to the clinic's confirmed launch date.
// Format: YYYY-MM-DDTHH:mm:ss+05:00
const LAUNCH_DATE = new Date("2026-11-30T00:00:00+05:00").getTime();

const getTimeLeft = () => {
  const difference = Math.max(0, LAUNCH_DATE - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    finished: difference === 0,
  };
};

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setRotation({
      x: (0.5 - y) * 18,
      y: (x - 0.5) * 18,
    });
  };

  const resetRotation = () => setRotation({ x: 0, y: 0 });

  const countdownItems = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <main className="coming-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="cs-header">
        <a href="/" className="brand">
          <div className="brand-icon">
            <FiHeart />
          </div>
          <div className="brand-text">
            <span className="brand-name">RAMAY</span>
            <span className="brand-sub">CLINIC</span>
          </div>
        </a>

        <div className="header-status">
          <span className="status-dot" />
          SOMETHING GOOD IS COMING
        </div>

        
      </header>

      <section className="cs-hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span /> THE FUTURE OF BETTER HEALTH
          </div>

          <h1>
            Your health.
            <br />
            Our <span>priority.</span>
          </h1>

          <p className="hero-description">
            Something exceptional is taking shape. We're building a
            better healthcare experience centered around you, your
            wellbeing, and your future.
          </p>

          <div className="launch-message">
            <div className="launch-icon">
              <FiActivity />
            </div>
            <div>
              <strong>Something better is on its way</strong>
              <span>A healthier tomorrow starts here.</span>
            </div>
          </div>

          <div className="hero-bottom">
            <span>01 — A NEW CHAPTER IN HEALTHCARE</span>
            <span>EST. WITH CARE</span>
          </div>
        </div>

        <div
          className="hero-visual"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetRotation}
        >
          <div
            className="visual-scene"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="medical-core">
              <div className="core-glow" />
              <div className="core-inner">
                <FiHeart />
                <span>RAMAY CLINIC</span>
              </div>
              <div className="core-ring" />
            </div>

            <div className="float-card card-top">
              <FiShield />
              <div>
                <strong>Patient First</strong>
                <span>Care you can trust</span>
              </div>
            </div>

            <div className="float-card card-bottom">
              <FaStethoscope />
              <div>
                <strong>Expert Care</strong>
                <span>Focused on wellbeing</span>
              </div>
            </div>

            <div className="floating-dot dot-one" />
            <div className="floating-dot dot-two" />
            <div className="floating-dot dot-three" />
          </div>

          <div className="visual-caption">
            <span>HEALTHCARE, REIMAGINED</span>
            <span>RAMAY / 001</span>
          </div>
        </div>
      </section>

      <section className="countdown-section">
        <div className="countdown-heading">
          <span className="countdown-line" />
          <span>THE COUNTDOWN HAS BEGUN</span>
          <span className="countdown-line" />
        </div>

        {timeLeft.finished ? (
          <h2 className="launch-live">We're now live.</h2>
        ) : (
          <div className="countdown">
            {countdownItems.map((item) => (
              <div className="countdown-unit" key={item.label}>
                <div className="countdown-number">
                  {String(item.value).padStart(2, "0")}
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}

        <p className="countdown-note">
          A new standard of care is closer than you think.
        </p>
      </section>

      <section className="feature-strip">
        <div className="feature">
          <FiShield />
          <div>
            <strong>Patient-Centered</strong>
            <span>Your needs come first</span>
          </div>
        </div>

        <div className="feature">
          <FiHeart />
          <div>
            <strong>Compassionate Care</strong>
            <span>Healthcare with a human touch</span>
          </div>
        </div>

        <div className="feature">
          <FaStethoscope />
          <div>
            <strong>Medical Excellence</strong>
            <span>Committed to your wellbeing</span>
          </div>
        </div>
      </section>

      <footer className="cs-footer">
        <span>
          © {new Date().getFullYear()} RAMAY CLINIC. ALL RIGHTS RESERVED.
        </span>

        <div className="footer-socials">
           
          <a href="https://www.instagram.com/ramayclinicofficial/" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a href="https://www.facebook.com/RamayClinicTheCaringSpecialists/" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </div>

        <span>MADE WITH CARE.</span>
      </footer>
    </main>
  );
}
