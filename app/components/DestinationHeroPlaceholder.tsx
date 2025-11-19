"use client";

interface DestinationHeroPlaceholderProps {
  countryName: string;
  className?: string;
}

export default function DestinationHeroPlaceholder({
  countryName,
  className = "",
}: DestinationHeroPlaceholderProps) {
  // Generate a consistent color based on country name
  const getGradient = (name: string) => {
    const gradients = [
      {
        from: "#1073B9",
        via: "#0d5a94",
        to: "#094573",
        pattern: "medical-cross",
      }, // Blue - Medical
      {
        from: "#10B981",
        via: "#059669",
        to: "#047857",
        pattern: "wellness",
      }, // Green - Wellness
      {
        from: "#8B5CF6",
        via: "#7C3AED",
        to: "#6D28D9",
        pattern: "luxury",
      }, // Purple - Luxury
      {
        from: "#F59E0B",
        via: "#D97706",
        to: "#B45309",
        pattern: "warmth",
      }, // Amber - Warmth
      {
        from: "#06B6D4",
        via: "#0891B2",
        to: "#0E7490",
        pattern: "tropical",
      }, // Cyan - Tropical
      {
        from: "#EC4899",
        via: "#DB2777",
        to: "#BE185D",
        pattern: "vibrant",
      }, // Pink - Vibrant
    ];

    const index = name.charCodeAt(0) % gradients.length;
    return gradients[index];
  };

  const gradient = getGradient(countryName);

  return (
    <div
      className={`relative ${className}`}
      style={{
        background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.via} 50%, ${gradient.to} 100%)`,
      }}
    >
      {/* Overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                           radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Medical cross pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, white 2px, transparent 2px),
                           linear-gradient(to bottom, white 2px, transparent 2px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Country name watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white/10 text-9xl font-bold select-none">
          {countryName}
        </h1>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
    </div>
  );
}
