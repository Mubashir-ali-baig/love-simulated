import { Button } from "@/components/ui/button";

interface VotingCardProps {
  coupleImage: string;
  person1Image: string;
  person2Image: string;
  coupleName: string;
  currentVotes: number;
  percentage: number;
  currentDateSpot: string;
  upgradeTo: string;
  voteCost: number;
}

export default function VotingCard({
  coupleImage,
  person1Image,
  person2Image,
  coupleName,
  currentVotes,
  percentage,
  currentDateSpot,
  upgradeTo,
  voteCost,
}: VotingCardProps) {
  return (
    <div className="bg-[#F0C4C9]/30 rounded-xl overflow-hidden shadow-lg mb-4 border border-[#BA435F]">
      <div className="relative h-48">
        <img
          src={coupleImage}
          alt={coupleName}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
              <img
                src={person1Image}
                alt="Person 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
              <img
                src={person2Image}
                alt="Person 2"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-bold text-lg drop-shadow-lg">
              {coupleName}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#BA435F] text-sm">
            Current votes: {currentVotes.toLocaleString()}
          </span>
          <span className="text-[#BA435F] text-sm font-medium">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2 mb-4">
          <div
            className="bg-[#BA435F] h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className="flex justify-between mb-4">
          <div>
            <p className="text-[#BA435F] text-sm font-medium">
              Current Date Spot
            </p>
            <p className="text-[#BA435F] font-bold">{currentDateSpot}</p>
          </div>
          <div>
            <p className="text-[#BA435F] text-sm font-medium">Upgrade To</p>
            <p className="text-[#BA435F] font-bold">{upgradeTo}</p>
          </div>
        </div>

        <Button className="w-full bg-[#BA435F] hover:bg-[#8F5260] text-white font-semibold py-3 rounded-xl">
          Vote for {voteCost} SMIRROR
        </Button>
      </div>
    </div>
  );
}
