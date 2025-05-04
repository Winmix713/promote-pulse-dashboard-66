
import React, { createContext, ReactNode, useContext } from "react";

type ChartConfig = Record<string, { color: string }>;

const ChartContext = createContext<ChartConfig>({});

interface ChartContainerProps {
  children: ReactNode;
  config: ChartConfig;
  className?: string;
}

export const ChartContainer = ({ children, config, className = '' }: ChartContainerProps) => {
  return (
    <ChartContext.Provider value={config}>
      <div className={className}>
        {children}
      </div>
    </ChartContext.Provider>
  );
};

export const useChartConfig = () => useContext(ChartContext);
