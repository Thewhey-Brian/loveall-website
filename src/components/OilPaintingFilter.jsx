const OilPaintingFilter = () => (
  <svg className="hidden">
    <defs>
      <filter id="oil-paint-effect">
        <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="5" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
        <feColorMatrix type="saturate" values="1.5" />
      </filter>
      <filter id="canvas-texture">
         <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
         <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="1">
            <feDistantLight azimuth="45" elevation="60" />
         </feDiffuseLighting>
         <feComposite operator="in" in2="SourceGraphic" />
      </filter>
      <filter id="pencil-sketch">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
        <feColorMatrix type="matrix" values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5" />
      </filter>
    </defs>
  </svg>
);

export default OilPaintingFilter;
