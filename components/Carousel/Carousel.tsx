import * as React from 'react';
import './Carousel.css'; //will be added later

const Carousel = (props) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [length, setLength] = React.useState(children.length);
  const [touchPosition, setTouchPosition] = React.useState(null);

  // Set the length to match current children from props
  React.useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - 1 && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
