import { Settings, Subtitles, Maximize } from 'lucide-react';
import './_desktopVideoShowcase.scss';

export default function DesktopVideoShowcase({ progress = 24, handleTrackClick, videoThumb }) {
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
