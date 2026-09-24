import { useState } from 'react';
import { Settings, Subtitles, Maximize } from 'lucide-react';
import videoThumb from '@/assets/VideoShowcase/videoshowcase.png';
import './_desktopVideoShowcase.scss';

export default function DesktopVideoShowcase() {
  const [progress, setProgress] = useState(24);

  const handleTrackClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, Math.round((clickX / rect.width) * 100)));
    setProgress(newProgress);
  };

  return (
    <section className="desktop-video-showcase-section">
      <div className="container video-outer-container">
        <div className="video-player-frame">
          {/* Video Thumbnail Background */}
          <img
            src={videoThumb}
            alt="Chương trình học thực tế"
            className="video-main-image"
          />

          <div className="video-floating-bar" onClick={(e) => e.stopPropagation()}>
            <span className="time-text current-time">27:11</span>

            <div className="player-progress-container" onClick={handleTrackClick}>
              <div className="player-progress-track">
                <div
                  className="player-progress-fill"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="player-progress-thumb"
                  style={{ left: `${progress}%` }}
                />
              </div>
            </div>

            <span className="time-text total-time">1:56:11</span>

            <div className="player-actions-group">
              <button className="player-action-btn" aria-label="Cài đặt">
                <Settings size={18} />
              </button>
              <button className="player-action-btn" aria-label="Phụ đề">
                <Subtitles size={18} />
              </button>
              <button className="player-action-btn" aria-label="Toàn màn hình">
                <Maximize size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
