import React from 'react';
import Lottie from 'lottie-react';

export function OceanBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Underwater background animation */}
      <div className="absolute inset-0">
        <Lottie
          animationData={{
            v: "5.9.0",
            fr: 30,
            ip: 0,
            op: 180,
            w: 1920,
            h: 1080,
            assets: [],
            layers: [
              {
                ddd: 0,
                ind: 1,
                ty: 4,
                nm: "Bubbles",
                sr: 1,
                ks: {
                  o: { a: 0, k: 100 },
                  p: { a: 0, k: [960, 540, 0] },
                  a: { a: 0, k: [0, 0, 0] },
                  s: { a: 0, k: [100, 100, 100] }
                },
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ty: "el",
                        p: { a: 0, k: [0, 0] },
                        s: { a: 0, k: [40, 40] }
                      },
                      {
                        ty: "fl",
                        c: { a: 0, k: [0.529, 0.808, 0.922, 0.3] }
                      }
                    ]
                  }
                ],
                op: 180
              }
            ]
          }}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Floating bubbles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-20px',
            animationDelay: `${i * 2}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          <div 
            className="rounded-full bg-blue-200/20 backdrop-blur-sm"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
            }}
          />
        </div>
      ))}

      {/* Swimming fish */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-swim"
          style={{
            top: `${20 + i * 30}%`,
            animationDelay: `${i * -3}s`,
            animationDuration: '15s',
          }}
        >
          <div 
            className="text-blue-400"
            style={{
              transform: 'scale(0.5)',
            }}
          >
            🐠
          </div>
        </div>
      ))}
    </div>
  );
}