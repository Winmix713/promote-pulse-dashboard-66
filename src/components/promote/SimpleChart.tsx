
import React from "react";

const SimpleChart: React.FC = () => {
  return (
    <div className="h-40 w-full">
      <div className="flex h-full w-full items-end justify-between space-x-2">
        <div className="flex h-full flex-col justify-end space-y-1">
          <div className="h-1/3 w-6 bg-gray-200 rounded-t"></div>
          <span className="text-xs text-gray-500">Mo</span>
        </div>
        <div className="flex h-full flex-col justify-end space-y-1">
          <div className="h-1/2 w-6 bg-gray-200 rounded-t"></div>
          <span className="text-xs text-gray-500">Tu</span>
        </div>
        <div className="flex h-full flex-col justify-end space-y-1">
          <div className="h-3/4 w-6 bg-gray-200 rounded-t"></div>
          <span className="text-xs text-gray-500">We</span>
        </div>
        <div className="flex h-full flex-col justify-end space-y-1">
          <div className="h-2/3 w-6 bg-gray-200 rounded-t"></div>
          <span className="text-xs text-gray-500">Th</span>
        </div>
        <div className="flex h-full flex-col justify-end space-y-1">
          <div className="h-1/2 w-6 bg-gray-200 rounded-t"></div>
          <span className="text-xs text-gray-500">Fr</span>
        </div>
        <div className="flex h-full flex-col justify-end space-y-1">
          <div className="h-1/4 w-6 bg-gray-200 rounded-t"></div>
          <span className="text-xs text-gray-500">Sa</span>
        </div>
        <div className="flex h-full flex-col justify-end space-y-1">
          <div className="h-1/3 w-6 bg-gray-200 rounded-t"></div>
          <span className="text-xs text-gray-500">Su</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleChart;
