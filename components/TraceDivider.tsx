interface TraceDividerProps {
  /** mirror the bend direction */
  flip?: boolean;
  className?: string;
}

/**
 * Copper-trace divider: horizontal trace, one 45-degree bend,
 * ending in a via dot. Pure CSS/divs so it scales to any width.
 */
export default function TraceDivider({
  flip = false,
  className = "",
}: TraceDividerProps) {
  return (
    <div
      aria-hidden
      className={`flex items-center py-2 ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <span className="h-px flex-1 bg-trace-dim" />
      {/* 45-degree bend: 24px trace rotated 45deg drops ~17px */}
      <span className="h-px w-6 origin-left translate-y-[8.5px] rotate-45 bg-copper" />
      <span className="-ms-[7px] h-px w-16 translate-y-[17px] bg-copper sm:w-28" />
      {/* via: copper ring, board core */}
      <span className="h-2.5 w-2.5 translate-y-[17px] rounded-full border-2 border-copper bg-board" />
    </div>
  );
}
