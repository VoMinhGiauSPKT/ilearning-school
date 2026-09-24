import { useState } from 'react';
import { Subtitles, Maximize } from 'lucide-react';
import videoThumb from '@/assets/VideoShowcase/videoshowcase.png';
import './_mobileVideoShowcase.scss';

export default function MobileVideoShowcase() {
  const [progress, setProgress] = useState(24);

  const handleTrackClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, Math.round((clickX / rect.width) * 100)));
    setProgress(newProgress);
  };

  return (
    <section className="mobile-video-showcase-section">
      <div className="mobile-video-container">
        <div className="mobile-video-player-frame">
          {/* Video Thumbnail Background */}
          <img
            src={videoThumb}
            alt="Chương trình học thực tế"
            className="mobile-video-main-image"
          />

          {/* Floating Pill Player Bar (Figma: 363px x 26px) */}
          <div className="mobile-video-floating-bar" onClick={(e) => e.stopPropagation()}>
            <span className="mobile-time-text">27:11</span>

            <div className="mobile-player-progress-container" onClick={handleTrackClick}>
              <div className="mobile-player-progress-track">
                <div
                  className="mobile-player-progress-fill"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="mobile-player-progress-thumb"
                  style={{ left: `${progress}%` }}
                />
              </div>
            </div>

            <div className="mobile-player-actions-group">
              <button className="mobile-player-action-btn" aria-label="Phụ đề">
                <Subtitles size={14} />
              </button>
              <button className="mobile-player-action-btn" aria-label="Toàn màn hình">
                <Maximize size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
