import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import Button from '../../common/Button/Button';
import fptLogo from '../../../assets/PartnersSection/fpt.png';
import pharmacityLogo from '../../../assets/PartnersSection/pharmacity.png';
import kmsLogo from '../../../assets/PartnersSection/KMS.png';
import tmaLogo from '../../../assets/PartnersSection/TMA.png';
import sendoLogo from '../../../assets/PartnersSection/sendo.png';
import './_partnersSection.scss';

const initialPartners = [
  { id: 'fpt', name: 'FPT Play', logo: fptLogo, height: 46 },
  { id: 'pharmacity', name: 'Pharmacity', logo: pharmacityLogo, height: 60 },
  { id: 'kms', name: 'KMS Technology', logo: kmsLogo, height: 55 },
  { id: 'tma', name: 'TMA Solutions', logo: tmaLogo, height: 62 },
  { id: 'sendo', name: 'Sendo', logo: sendoLogo, height: 44 },
];

export default function PartnersSection() {
  const [partners, setPartners] = useState(initialPartners);

  const handlePrev = () => {
    setPartners((prev) => {
      const next = [...prev];
      const last = next.pop();
      if (last) next.unshift(last);
      return next;
    });
  };

  const handleNext = () => {
    setPartners((prev) => {
      const next = [...prev];
      const first = next.shift();
      if (first) next.push(first);
      return next;
    });
  };

  return (
    <section className="partners-section">
      <div className="container partners-container">
        <SectionHeading
          subtitle="Khách hàng và"
          title="Đối tác của UI8"
          align="center"
        />

        {/* Partners Banner */}
        <div className="partners-card-banner">
          {/* Navigation Left Button */}
          <Button
            type="button"
            variant="primary"
            shape="circle"
            className="nav-btn nav-btn-left"
            onClick={handlePrev}
            aria-label="Previous partners"
            icon={<ArrowLeft size={24} color="#FFFFFF" strokeWidth={2.5} />}
          />

          {/* Logos Row */}
          <div className="partners-logos-wrap">
            {partners.map((partner) => (
              <div key={partner.id} className={`partner-item partner-${partner.id}`}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo-img"
                  style={{ maxHeight: `${partner.height}px` }}
                />
              </div>
            ))}
          </div>

          {/* Navigation Right Button */}
          <Button
            type="button"
            variant="primary"
            shape="circle"
            className="nav-btn nav-btn-right"
            onClick={handleNext}
            aria-label="Next partners"
            icon={<ArrowRight size={24} color="#FFFFFF" strokeWidth={2.5} />}
          />
        </div>
      </div>
    </section>
  );
}
