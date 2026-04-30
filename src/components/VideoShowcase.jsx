import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  // Keep fullscreen state in sync — handles Escape key exit too
  useEffect(() => {
    const onFsChange = () => {
      const isFs = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement
      );
      setFullscreen(isFs);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    document.addEventListener("mozfullscreenchange", onFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
      document.removeEventListener("mozfullscreenchange", onFsChange);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    const el = containerRef.current;
    if (!el) return;
    if (!fullscreen) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    }
  };

  return (
    <section className="relative bg-[#08060F] py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-[#7C2FC0]/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[25vw] h-[25vw] rounded-full bg-[#D4187A]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-0.5 bg-[#FF6D00]" />
              <span className="text-[10px] text-[#FF6D00] tracking-[0.26em] uppercase">Watch Us Work</span>
            </div>
            <h2 className="text-white uppercase font-bold leading-none tracking-wide text-[clamp(2rem,4vw,3.5rem)]">
              See The Results<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00] italic">
                For Yourself
              </span>
            </h2>
          </div>

          <p className="text-[#B8C0CC] text-sm md:text-base leading-relaxed max-w-sm md:text-right">
            Every repair tells a story. Watch how we bring vehicles back to their best — with precision, care, and results that speak for themselves.
          </p>
        </div>

        {/* Video card */}
        <div className="bg-linear-to-br from-[#7C2FC0] via-[#D4187A] to-[#FF6D00] p-px rounded-2xl md:rounded-3xl">
          <div
            ref={containerRef}
            className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-black aspect-video cursor-pointer group"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/bg.png"
              className="w-full h-full object-cover"
            >
              <source src="/promotional-video.MOV" type="video/quicktime" />
              <source src="/promotional-video.MOV" type="video/mp4" />
              <source src="/about.mp4" type="video/mp4" />
            </video>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 md:px-8 md:py-5 flex items-end justify-between pointer-events-none">

              {/* Left: play/pause + branding */}
              <div className="pointer-events-auto flex items-center gap-3">
                <button
                  onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6D00] backdrop-blur-sm border border-white/15 hover:border-[#FF6D00] text-white transition-all duration-200"
                >
                  {playing
                    ? <Pause size={14} />
                    : <Play size={14} className="ml-0.5" />
                  }
                </button>
                <div>
                  <p className="text-[10px] text-[#FF6D00] uppercase tracking-widest font-semibold mb-0.5">
                    Advanced Autobody Solutions
                  </p>
                  <p className="text-white/50 text-[11px] uppercase tracking-wider">Manchester, UK</p>
                </div>
              </div>

              {/* Right: mute + fullscreen */}
              <div className="pointer-events-auto flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-white text-xs font-medium transition-all duration-200"
                >
                  {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  <span>{muted ? "Unmute" : "Mute"}</span>
                </button>

                <button
                  onClick={toggleFullscreen}
                  title={fullscreen ? "Exit fullscreen" : "View fullscreen"}
                  className="flex items-center justify-center bg-white/10 hover:bg-[#FF6D00] backdrop-blur-sm border border-white/15 hover:border-[#FF6D00] rounded-full w-9 h-9 text-white transition-all duration-200"
                >
                  {fullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "5★", label: "Google Rating" },
            { value: "500+", label: "Vehicles Repaired" },
            { value: "Lifetime", label: "Ownership Guarantee" },
            { value: "Same Day", label: "Turnaround Available" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center py-6 px-4 rounded-2xl border border-white/5 bg-white/[0.03]"
            >
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FF6D00] to-[#FFB800]">
                {stat.value}
              </span>
              <span className="text-[#B8C0CC] text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
