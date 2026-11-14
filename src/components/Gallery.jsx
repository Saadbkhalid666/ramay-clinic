import { GALLERY } from "../data";
import ImageSlot from "./ImageSlot";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Gallery() {
  return (
    <Section id="gallery" alt>
      <SectionHeader title="Inside Ramay Clinic">
        A look at the spaces where we care for you and your family.
      </SectionHeader>
      <div className="grid grid-cols-4 gap-4 m900:grid-cols-2">
        {GALLERY.map(([key, label]) => (
          <ImageSlot
            key={key}
            k={key}
            label={label}
            className="aspect-[4/5] rounded-[20px]"
          />
        ))}
      </div>
    </Section>
  );
}
