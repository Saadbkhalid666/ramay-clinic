import { GALLERY } from "../data";
import ImageSlot from "./ImageSlot";
import SectionHeader from "./SectionHeader";

export default function Gallery() {
  return (
    <section id="gallery" className="alt">
      <div className="wrap">
        <SectionHeader title="Inside Ramay Clinic">
          A look at the spaces where we care for you and your family.
        </SectionHeader>
        <div className="gal" id="gal">
          {GALLERY.map(([key, label]) => (
            <ImageSlot key={key} k={key} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
