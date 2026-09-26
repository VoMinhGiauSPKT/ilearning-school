import { useState } from 'react';
import videoThumb from '@/assets/VideoShowcase/videoshowcase.png';

export function useVideoProgress(initialProgress = 24) {
  const [progress, setProgress] = useState(initialProgress);

  const handleTrackClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, Math.round((clickX / rect.width) * 100)));
    setProgress(newProgress);
  };

  return {
    progress,
    setProgress,
    handleTrackClick,
    videoThumb,
  };
}

export default useVideoProgress;
