import { useState } from 'react';

export default function MyHeartbeatForYou() {
  const [showMessage, setShowMessage] = useState(false);

  const dailyBeats = [
    "hatdog",
    "test",
    "cutie",
    "ermmm",
    "testestest",
    "jana mei wag ka sumilip talaga aawayin kita"
  ];

  const getDailyBeat = () => {
    return dailyBeats[Math.floor(Math.random() * dailyBeats.length)];
  };

  const handleHeartClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 4000);
  };

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }
        
        @keyframes heartPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .heart-pulse {
          animation: heartPulse 2.5s ease-in-out infinite;
        }
        
        .message-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div 
        className="w-full h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 font-light"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          padding: '2rem',
          gap: '3rem'
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            paddingRight: '2rem'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 
              className="text-pink-900 font-light tracking-tight leading-tight"
              style={{
                fontSize: 'clamp(3rem, 8vw, 8rem)',
                lineHeight: '0.9'
              }}
            >
              My Heartbeat
            </h1>
            <h2 
              className="text-purple-700 font-light tracking-wide"
              style={{
                fontSize: 'clamp(2rem, 5vw, 5rem)',
                lineHeight: '1'
              }}
            >
              for You
            </h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p 
              className="text-pink-800 font-light leading-relaxed"
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)'
              }}
            >
              A gentle reminder of love with every click
            </p>
            
            <div 
              className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg"
              style={{
                padding: 'clamp(1rem, 2vw, 2rem)'
              }}
            >
              <p 
                className="text-purple-600 font-light"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 2rem)'
                }}
              >
                Click the heart to receive your daily romantic message
              </p>
            </div>
          </div>
        </div>

        {/* emoji nlng muna whahaha */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            paddingLeft: '2rem'
          }}
        >
          <div style={{ position: 'relative' }}>
            <div 
              className="cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 select-none drop-shadow-2xl heart-pulse"
              onClick={handleHeartClick}
              role="button"
              aria-label="Click to see daily romantic message"
              style={{
                fontSize: 'clamp(6rem, 12vw, 12rem)',
                lineHeight: '1'
              }}
            >
              ❤️
            </div>
            
            <div 
              className="absolute opacity-60 float"
              style={{
                top: '-1rem',
                right: '-1rem',
                fontSize: 'clamp(1.5rem, 3vw, 3rem)',
                animationDelay: '0.5s'
              }}
            >
              💕
            </div>
            <div 
              className="absolute opacity-60 float"
              style={{
                bottom: '-1rem',
                left: '-1rem',
                fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
                animationDelay: '1s'
              }}
            >
              ✨
            </div>
          </div>

          {showMessage && (
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl text-pink-900 text-center border border-white/50 font-light leading-relaxed message-fade-in"
              style={{
                padding: 'clamp(1.5rem, 3vw, 3rem)',
                fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)',
                maxWidth: 'clamp(20rem, 40vw, 40rem)'
              }}
            >
              {getDailyBeat()}
            </div>
          )}
        </div>
      </div>
    </>
  );
}