import { Badge } from "@/components/Badge";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg grid-pattern relative overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/10 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
        <Badge className="mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          Assignment
        </Badge>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-16 leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          UI DEVELOPER
          <br />
          ASSIGNMENT
        </h1>

        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <p className="text-muted-foreground uppercase tracking-widest text-sm font-medium">
            Company
          </p>
          <p className="text-foreground text-xl md:text-2xl font-mono tracking-wide">
            Juspay Technologies Private Limited
          </p>
        </div>
      </div>

      {/* Subtle accent glow in corner */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default Index;
