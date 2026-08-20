import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/PageTransition.css';

function PageTransition({ children }) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 0);

    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 50);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
    };
  }, [location.pathname]);

  return (
    <div className={`page-transition ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default PageTransition;