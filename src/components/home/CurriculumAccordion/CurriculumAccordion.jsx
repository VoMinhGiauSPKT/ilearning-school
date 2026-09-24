import { useState } from 'react';
import Button from '../../common/Button/Button';
import { curriculumStages } from '../../../data/homeData';
import './_curriculumAccordion.scss';

export default function CurriculumAccordion({ stages = curriculumStages }) {
  const [openStages, setOpenStages] = useState({});

  const toggleStage = (id) => {
    setOpenStages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="curriculum-accordion-box">
      <h3 className="curriculum-title">Giáo trình</h3>

      <div className="accordion-list">
        {(stages || []).map((stage) => {
          const isOpen = !!openStages[stage.id];
          return (
            <div
              key={stage.id}
              className="accordion-item"
            >
              <button
                className="accordion-header"
                onClick={() => toggleStage(stage.id)}
                aria-expanded={isOpen}
              >
                <span className="item-title">{stage.title}</span>

                <div className="header-right-controls">
                  <span className="sessions-badge">{stage.sessions}</span>

                  <span className="accordion-toggle-icon" aria-hidden="true">
                    <span className="icon-line line-horizontal" />
                    {!isOpen && <span className="icon-line line-vertical" />}
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="accordion-body">
                  <ul className="lesson-list">
                    {stage.lessons.map((lesson, idx) => (
                      <li key={idx} className="lesson-item">
                        <span className="lesson-dash">-</span>
                        <span className="lesson-text">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="curriculum-action">
        <Button variant="primary" shape="rounded" className="curriculum-register-btn">
          Đăng ký ngay
        </Button>
      </div>
    </div>
  );
}
