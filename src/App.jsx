import { useEffect, useRef } from "react";
import { DOCS } from "./data";
import { BookingProvider } from "./hooks/BookingContext";
import useHashRoute from "./hooks/useHashRoute";

import BookingModal from "./components/BookingModal";
import Departments from "./components/Departments";
import DoctorProfile from "./components/DoctorProfile";
import Doctors from "./components/Doctors";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import MobileDock from "./components/MobileDock";
import Navbar from "./components/Navbar";
import Pharmacy from "./components/Pharmacy";
import Testimonials from "./components/Testimonials";
import ComingSoon from "./ComingSoon";

const HOME_TITLE = "Ramay Clinic – The Caring Specialists";

export default function App() {
  const hash = useHashRoute();
  const pathname = window.location.pathname;

  const isComingSoon = pathname === "/";
  const isHome = pathname === "/home";

  const profileIndex = DOCS.findIndex(
    (d) => "doctor-" + d.id === hash
  );

  const isProfile = profileIndex >= 0;
  const wasProfile = useRef(false);

  useEffect(() => {
    if (isComingSoon) {
      document.title = "Coming Soon – Ramay Clinic";
      return;
    }

    if (isProfile) {
      document.title = DOCS[profileIndex].n + " – Ramay Clinic";
      window.scrollTo(0, 0);
    } else {
      document.title = HOME_TITLE;

      const el = hash && document.getElementById(hash);

      if (el) el.scrollIntoView();
      else if (wasProfile.current) window.scrollTo(0, 0);
    }

    wasProfile.current = isProfile;
  }, [hash, pathname, isProfile, profileIndex, isComingSoon]);

  // Root URL: Coming Soon
  if (isComingSoon) {
    return <ComingSoon />;
  }

  // Unknown URL
  if (!isHome) {
    window.history.replaceState(null, "", "/");
    return <ComingSoon />;
  }

  // /home: Complete website
  return (
    <BookingProvider>
      <div className="m700:pb-[84px]">
        <Navbar />

        <div id="home" hidden={isProfile}>
          <Hero />
          <Metrics />
          <Departments />
          <Doctors />
          <Pharmacy />
          <Gallery />
          <Testimonials />
          <Faq />
        </div>

        <main id="profile" hidden={!isProfile}>
          {isProfile && <DoctorProfile index={profileIndex} />}
        </main>

        <Footer />
        <MobileDock />
        <BookingModal />
      </div>
    </BookingProvider>
  );
}