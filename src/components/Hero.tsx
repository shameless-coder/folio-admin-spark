import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 shadow-large">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">JS</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            John Smith
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer & UI/UX Designer crafting beautiful, 
            functional digital experiences that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="hover-glow transition-bounce">
              <Link to="/projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-smooth">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="sm" className="hover-glow">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-glow">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-glow">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;