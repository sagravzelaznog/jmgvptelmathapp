
export interface Activity {
  problem: string;
  solution: string[];
}

export interface MathTopic {
  id: string;
  title: string;
  icon: string; // SVG path for the icon
  explanation: string;
  example: {
    title: string;
    problem: string;
    steps: string[];
  };
  activities: Activity[];
}
