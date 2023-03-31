import * as React from 'react';
import Carousel from './components/Carousel/Carousel';
import './style.css';

export default function App() {
  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 64,
      }}
    >
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <Carousel show={4} infiniteLoop={true}>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
