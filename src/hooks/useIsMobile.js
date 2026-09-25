import { useState, useEffect } from 'react';

// Kiểm tra thiết bị di động bằng 3 cơ chế phần cứng & hệ thống
const checkIsMobileDevice = () => {
  if (typeof window === 'undefined') return false;

  // [4] Client Hints (UA-CH) - Hiện đại nhất cho Chrome, Edge, Android
  if (navigator?.userAgentData?.mobile !== undefined) {
    return navigator.userAgentData.mobile;
  }

  // [2] Regex Pattern Matching (User-Agent) - Dự phòng cho Safari (iOS), Firefox
  const ua = navigator?.userAgent || '';
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  // Xử lý riêng cho iPad chạy iPadOS 13+ (Apple gửi UA là Macintosh)
  const isIPad = navigator?.platform === 'MacIntel' && navigator?.maxTouchPoints > 1;

  if (isMobileUA || isIPad) return true;

  // [3] Interaction Capabilities - Thiết bị thuần cảm ứng, không có chuột rê (hover)
  const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const hasNoHover = window.matchMedia && window.matchMedia('(hover: none)').matches;

  return Boolean(isCoarse && hasNoHover);
};

export default function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    // [1] Viewport Threshold Matching
    const isSmallScreen = window.innerWidth <= breakpoint;
    return isSmallScreen || checkIsMobileDevice();
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // [1] Lắng nghe Viewport Threshold Matching
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const isMobileDev = checkIsMobileDevice();

    const updateState = () => {
      // Kết hợp thông minh: Màn hình nhỏ HOẶC Thiết bị di động thật
      setIsMobile(mediaQuery.matches || isMobileDev);
    };

    updateState();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateState);
      return () => mediaQuery.removeEventListener('change', updateState);
    } else {
      mediaQuery.addListener(updateState);
      return () => mediaQuery.removeListener(updateState);
    }
  }, [breakpoint]);

  return isMobile;
}
