import { useState } from 'react';

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
  };
}

export default useVideoProgress;
