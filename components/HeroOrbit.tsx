export function HeroOrbit() {
  return (
    <div className="hero-orbit" aria-hidden="true">
      <div className="orbit-grid" />
      <div className="orbit-ring orbit-ring-one" />
      <div className="orbit-ring orbit-ring-two" />
      <div className="orbit-ring orbit-ring-three" />
      <div className="orbit-core">
        <div className="orbit-core-inner" />
        <span className="orbit-core-label">A</span>
      </div>
      <div className="orbit-node orbit-node-a"><i /> <span>Signals</span></div>
      <div className="orbit-node orbit-node-b"><i /> <span>Models</span></div>
      <div className="orbit-node orbit-node-c"><i /> <span>Systems</span></div>
      <svg className="orbit-lines" viewBox="0 0 720 720" fill="none" preserveAspectRatio="xMidYMid meet">
        <path d="M126 217C240 256 272 291 358 360C432 419 503 444 604 488" />
        <path d="M127 503C233 459 270 423 358 360C430 308 496 273 604 218" />
        <circle cx="358" cy="360" r="7" />
      </svg>
      <div className="orbit-status">SYSTEMS IN SYNC <span /></div>
    </div>
  );
}
