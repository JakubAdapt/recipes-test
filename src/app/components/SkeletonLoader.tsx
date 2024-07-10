import React from "react";

type Props = {
  type: "page" | "recipe";
};

const SkeletonLoader = ({ type }: Props) => {
  if (type === "page") {
    return (
      <div className="min-h-screen">
        <div className="h-64 bg-gray animate-pulse" />

        <div className="grid grid-cols-2 gap-4 p-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gray rounded animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <div className="h-96 bg-gray animate-pulse bg-gradient-to-b from-transparent via-black/10 to-black" />

      <div className="absolute left-0 right-0 m-auto w-11/12 top-[300px] h-96 bg-gray animate-pulse rounded-t-lg" />
    </div>
  );
};

export default SkeletonLoader;
