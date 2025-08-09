import { Button } from "@/components/ui/button";
import { Clock, Heart, MessageSquare } from "lucide-react";

const features = [
  {
    label: "Favorite ?",
    icon: Heart,
    action: () => console.log("fav clicked"),
  },
  {
    label: "Log a Review",
    icon: MessageSquare,
    action: () => console.log("review clicked"),
  },
  {
    label: "Queue it",
    icon: Clock,
    action: () => console.log("queue clicked"),
  },
];

const FeatureButtons = () => {
  return (
    <div className="pt-1 border-t w-[40%] m-auto">
      <div className="flex justify-evenly m-2">
        {features.map(({ label, icon: Icon, action }, i) => (
          <Button
            key={i}
            variant="defaultBtn"
            size="defaultBtn"
            onClick={action}
            className="flex items-center gap-2"
          >
            <Icon size={16} />
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FeatureButtons;
