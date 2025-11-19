"use client";

interface HospitalImagePlaceholderProps {
  hospitalName: string;
  className?: string;
}

export default function HospitalImagePlaceholder({
  hospitalName,
  className = "",
}: HospitalImagePlaceholderProps) {
  // Extract initials from hospital name (first letter of first two words)
  const getInitials = (name: string) => {
    const words = name.split(/[\s–-]+/).filter(word => word.length > 0);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return words[0]?.substring(0, 2).toUpperCase() || "H";
  };

  // Generate a consistent color based on hospital name
  const getColor = (name: string) => {
    const colors = [
      { from: "#3B82F6", to: "#1D4ED8" }, // Blue
      { from: "#10B981", to: "#059669" }, // Green
      { from: "#8B5CF6", to: "#6D28D9" }, // Purple
      { from: "#F59E0B", to: "#D97706" }, // Amber
      { from: "#EF4444", to: "#DC2626" }, // Red
      { from: "#06B6D4", to: "#0891B2" }, // Cyan
      { from: "#EC4899", to: "#DB2777" }, // Pink
      { from: "#14B8A6", to: "#0D9488" }, // Teal
    ];

    // Use first character code to pick a color
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const initials = getInitials(hospitalName);
  const color = getColor(hospitalName);

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color.from} 0%, ${color.to} 100%)`,
      }}
    >
      <div className="text-center">
        <div className="text-white font-bold text-5xl md:text-6xl opacity-90 mb-2">
          {initials}
        </div>
        <div className="text-white/80 text-xs font-medium px-4">
          Hospital Logo
        </div>
      </div>
    </div>
  );
}
