
import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

interface SocialIconProps {
  platform: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ platform }) => {
  return (
    <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
      {platform === "twitter" && "X"}
      {platform === "facebook" && "f"}
      {platform === "instagram" && "i"}
      {platform === "threads" && "@"}
    </div>
  );
};

interface CampaignRowProps {
  image: string;
  title: string;
  likes: string;
  views: string;
  rate: number;
  isPositive: boolean;
}

const CampaignRow: React.FC<CampaignRowProps> = ({
  image,
  title,
  likes,
  views,
  rate,
  isPositive,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center border-t pt-4">
      <div className="flex items-center space-x-3">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-12 w-12 rounded-md object-cover"
        />
        <div>
          <div className="font-medium">{title}</div>
          <div className="flex space-x-2 text-gray-500">
            <SocialIcon platform="twitter" />
            <SocialIcon platform="facebook" />
            <SocialIcon platform="instagram" />
            <SocialIcon platform="threads" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="font-medium">{likes}</div>
        <div className="h-1.5 w-16 rounded-full bg-gray-100 mx-auto">
          <div className="h-full w-1/3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="text-center">
        <div className="font-medium">{views}</div>
        <div className="h-1.5 w-16 rounded-full bg-gray-100 mx-auto">
          <div className="h-full w-1/2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="text-center">
        <div
          className={`inline-flex items-center space-x-1 rounded-full px-2 py-1 text-xs ${
            isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
          }`}
        >
          {isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
          <span>{rate}%</span>
        </div>
      </div>
    </div>
  );
};

const CampaignList: React.FC = () => {
  return (
    <div className="space-y-4 rounded-lg border bg-white p-4">
      <div className="grid grid-cols-4 gap-4 text-sm text-gray-500 pb-2">
        <div>Campaign</div>
        <div className="text-center">Likes</div>
        <div className="text-center">Views</div>
        <div className="text-center">Conversation rate</div>
      </div>

      <CampaignRow
        image="/placeholder.svg"
        title="Hurry! 50% off everything! 🔥"
        likes="320"
        views="742"
        rate={12.6}
        isPositive={true}
      />
      <CampaignRow
        image="/placeholder.svg"
        title="Last chance! 60% off clearance! 🎯"
        likes="368"
        views="143"
        rate={24.3}
        isPositive={true}
      />
      <CampaignRow
        image="/placeholder.svg"
        title="Exclusive! Buy one, get one free! 🎉"
        likes="45"
        views="190"
        rate={7.6}
        isPositive={false}
      />
      <CampaignRow
        image="/placeholder.svg"
        title="Limited offer! 40% off sitewide! 🔴"
        likes="320"
        views="742"
        rate={20.9}
        isPositive={true}
      />
      <CampaignRow
        image="/placeholder.svg"
        title="Flash sale! Save 30%! ⚡"
        likes="403"
        views="168"
        rate={55.6}
        isPositive={true}
      />
      <CampaignRow
        image="/placeholder.svg"
        title="Weekend special! Extra 25% off! 🍂"
        likes="320"
        views="742"
        rate={32.4}
        isPositive={false}
      />
    </div>
  );
};

export default CampaignList;
