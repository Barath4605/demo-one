import { Button } from "@/components/ui/button";
import { Clock, Heart, MessageSquare } from "lucide-react";
import { useState } from "react";

const FeatureButtons = () => {
  const [isFav, setIsFav] = useState(false);
  const [isQueue, setIsQueue] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const features = [
    {
      label: isFav ? "Favorited!" : "Favorite ?",
      icon: Heart,
      action: () => setIsFav(!isFav),
      styleIfTrue: "text-red-500 bg-red-400/30 hover:border-red-400",
      styleIfFalse: "text-white bg-white/30 hover:border-white ",
      active: isFav,
    },
    {
      label: isLogged ? "Review Logged " : "Log a Review",
      icon: MessageSquare,
      action: () => setIsLogged(!isLogged),
      styleIfTrue:
        "text-orange-300 bg-orange-500/30 hover:border-orange-400 text-center",
      styleIfFalse: "text-white bg-white/30 hover:border-white ",
      active: isLogged,
    },
    {
      label: isQueue ? "Queued!" : "Queue it",
      icon: Clock,
      action: () => setIsQueue(!isQueue),
      styleIfTrue: "text-green-500 bg-green-400/30 hover:border-green-400",
      styleIfFalse: "text-white bg-white/30 hover:border-white ",
      active: isQueue,
    },
  ];

  return (
    <div className="pt-1 border-t w-[40%] m-auto">
      <div className="flex justify-evenly m-2">
        {features.map(
          (
            { label, icon: Icon, action, styleIfFalse, styleIfTrue, active },
            i
          ) => (
            <Button
              key={i}
              variant="defaultBtn"
              size="defaultBtn"
              onClick={action}
              className={`${active ? styleIfTrue : styleIfFalse}`}
            >
              <Icon size={16} />
              {label}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default FeatureButtons;
