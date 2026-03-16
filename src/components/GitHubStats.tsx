import { SectionContainer } from './SectionContainer';
import { GlassCard } from './GlassCard';

export const GitHubStats = () => {
  // Using a placeholder username since the actual one wasn't provided, but styled to match the neon dark theme.
  // The colors are matched to the project palette: bg 0a0a0a, border blue, text cyan, title purple
  const username = "aryancodes12";
  
  return (
    <SectionContainer id="github" title="GitHub Activity">
      <div className="flex flex-col gap-6 mt-8">
        
        {/* Top row: Stats and Streak */}
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="flex justify-center items-center overflow-hidden p-2">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=7c3aed&text_color=a3a3a3&icon_color=3b82f6&border_color=22d3ee&bg_color=0a0a0a&hide_border=true`} 
              alt="GitHub Stats" 
              className="w-full max-w-sm object-contain"
            />
          </GlassCard>
          
          <GlassCard className="flex justify-center items-center overflow-hidden p-2">
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&fire=7c3aed&ring=3b82f6&currStreakLabel=a3a3a3&sideNums=22d3ee&currStreakNum=ffffff&sideLabels=a3a3a3&dates=a3a3a3&hide_border=true`} 
              alt="GitHub Streak" 
              className="w-full max-w-sm object-contain"
            />
          </GlassCard>
        </div>

        {/* Bottom row: Top Languages */}
        <GlassCard className="flex justify-center items-center overflow-hidden p-2">
          <img 
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=7c3aed&text_color=a3a3a3&hide_border=true`} 
            alt="Top Languages" 
            className="w-full max-w-md object-contain"
          />
        </GlassCard>
        
      </div>
    </SectionContainer>
  );
};
