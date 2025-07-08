interface ContenderCardProps {
  contestant: {
    id: number;
    name: string;
    rating: number;
    topMatch: string;
    matchPercent: number;
  };
}

export default function ContenderCard({ contestant }: ContenderCardProps) {
  return (
    <div
      className="bg-[#F0C4C9]/30 border border-[#BA435F] rounded-xl shadow-lg relative overflow-hidden"
      style={{ width: "164.83px", height: "260px" }}
    >
      <img
        src="/Noah.png"
        alt={contestant.name}
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/Gradient (1).png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Rating badge - top left with green dot */}
      <div className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1.5">
        <div
          className="rounded-full"
          style={{
            width: "6.52px",
            height: "6.53px",
            backgroundColor: "#22C55E",
          }}
        ></div>
        <span
          className="font-normal"
          style={{ fontSize: "12px", fontFamily: "Poppins, sans-serif" }}
        >
          {contestant.rating}
        </span>
        <img
          src="/star.png"
          alt="Star"
          style={{ width: "8px", height: "7.63px" }}
        />
      </div>

      {/* Top Match section - positioned above name and camera */}
      <div className="absolute bottom-14 left-2 right-2">
        <div className="bg-[#EABDC7]/80 backdrop-blur-sm rounded-2xl px-3 py-2 border border-[#BA435F]/30 h-[38px] flex items-center gap-3 w-full">
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden border-2 border-white flex-shrink-0">
            <img
              src="/image2.png"
              alt={contestant.topMatch}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-[#BA435F] flex-1 flex justify-between">
            <div className="text-xs font-normal">
              <div>Top</div>
              <div>Match:</div>
            </div>
            <div className="text-xs font-normal text-right">
              <div>{contestant.topMatch}</div>
              <div>{contestant.matchPercent}%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with name and video button */}
      <div
        className="absolute right-4 flex items-center justify-between w-full"
        style={{ bottom: "8px", left: "0px" }}
      >
        <h3 className="text-[#BA435F] font-semibold text-lg drop-shadow-lg ml-3">
          {contestant.name}
        </h3>
        <div className="w-12 h-12 relative cursor-pointer">
          <img
            src="/Ellipse 15.png"
            alt="Button Background"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "29.17px",
              height: "29.17px",
              imageRendering: "crisp-edges",
            }}
          />
          <img
            src="/camera.png"
            alt="Camera"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "9.88px",
              height: "7.9px",
              imageRendering: "crisp-edges",
            }}
          />
        </div>
      </div>
    </div>
  );
}
// Updated: Tue Jul  8 22:14:47 PKT 2025
