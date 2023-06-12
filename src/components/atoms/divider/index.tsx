import React from "react";

const SeperatorLine = ({ className }: AtomProps) => {
  return (
    <div className="flex justify-center">
      <div className={`h-1 rounded-sm + ${className} my-5`}></div>
    </div>
  );
};

export default SeperatorLine;
