import type { OtherService } from "../../data/otherServices";

interface OtherServiceCardProps {
  service: OtherService;
  isActive: boolean;
  onClick: () => void;
}

export const OtherServiceCard = ({
  service: { icon: Icon, title, description, imageSrc },
  isActive,
  onClick,
}: OtherServiceCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer transition-all duration-500 ease-out
        rounded-2xl p-6 md:p-8
        ${isActive ? "h-full" : ""}
        ${
          isActive
            ? "bg-gradient-to-br from-amber-500/20 to-orange-600/20 border-2 border-amber-500/50 shadow-lg shadow-amber-500/10"
            : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
        }
      `}
    >
      {/* Glow effect for active state */}
      {isActive && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/5 to-orange-500/5 blur-xl -z-10" />
      )}

      <div className={`flex flex-col ${isActive ? "gap-4 h-full" : ""}`}>
        {/* Icon and Title */}
        <div className="flex items-center gap-4">
          <div
            className={`
            p-3 rounded-xl transition-all duration-300
            ${
              isActive
                ? "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30"
                : "bg-white/10 text-amber-400"
            }
          `}
          >
            <Icon className="h-6 w-6 md:h-7 md:w-7" />
          </div>
          <h3
            className={`
            text-lg md:text-xl font-bold transition-colors duration-300 select-none
            ${isActive ? "text-amber-400" : "text-white/90"}
          `}
          >
            {title}
          </h3>
        </div>

        {/* Description and Image - only visible when active */}
        <div
          className={`
          overflow-hidden transition-all duration-500 ease-out flex flex-col
          ${isActive ? "max-h-[600px] opacity-100 flex-1" : "max-h-0 opacity-0"}
        `}
        >
          <p className="text-white/70 text-sm md:text-base leading-relaxed text-justify pt-2">
            {description}
          </p>

          {/* Service Image */}
          <div className="mt-auto pt-6 flex justify-center">
            <div className="bg-white p-4 rounded-2xl shadow-lg w-full md:w-4/5">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
