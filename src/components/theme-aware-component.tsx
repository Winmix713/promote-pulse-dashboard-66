
import React from 'react';
import { useTheme } from '@/context/theme-context';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const ThemeAwareComponent: React.FC = () => {
  const { theme, resolvedTheme } = useTheme();
  
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p><strong>Current Theme Setting:</strong> {theme}</p>
          <p><strong>Resolved Theme:</strong> {resolvedTheme}</p>
        </div>
      </CardContent>
    </Card>
  );
};
