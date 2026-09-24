import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import fptLogo from '@/assets/PartnersSection/fpt.png';
import pharmacityLogo from '@/assets/PartnersSection/pharmacity.png';
import kmsLogo from '@/assets/PartnersSection/KMS.png';
import tmaLogo from '@/assets/PartnersSection/TMA.png';
import sendoLogo from '@/assets/PartnersSection/sendo.png';
import './_mobilePartnersSection.scss';

const partners = [
  { id: 'fpt', name: 'FPT Play', logo: fptLogo, height: 38 },
  { id: 'pharmacity', name: 'Pharmacity', logo: pharmacityLogo, height: 38 },
  { id: 'kms', name: 'KMS Technology', logo: kmsLogo, height: 38 },
  { id: 'tma', name: 'TMA Solutions', logo: tmaLogo, height: 38 },
  { id: 'sendo', name: 'Sendo', logo: sendoLogo, height: 38 },
];

export default function MobilePartnersSection() {
  return (
    <section className="mobile-partners-section">
      <div className="mobile-partners-container">
        <SectionHeading
          subtitle="Khách hàng và"
          title="Đối tác của UI8"
          align="center"
        />

        <div className="mobile-partners-card-banner">
          <div className="mobile-partners-logos-wrap">
            {partners.map((partner) => (
              <div key={partner.id} className={`mobile-partner-item partner-${partner.id}`}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="mobile-partner-logo-img"
                  style={{ maxHeight: `${partner.height}px` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
