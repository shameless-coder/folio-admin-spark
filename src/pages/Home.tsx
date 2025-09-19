import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredProjects = [
    {
      title: "E-commerce Platform",
      description: "Modern React-based online store with payment integration",
      image: "🛍️",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App", 
      description: "Collaborative project management tool with real-time updates",
      image: "📋",
      tags: ["Vue.js", "Firebase", "Tailwind", "PWA"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      image: "🌤️",
      tags: ["React", "API Integration", "Charts", "Responsive"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Node.js", 
    "Python", "MongoDB", "PostgreSQL", "Tailwind CSS", "Figma"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies and design approaches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="hover-glow transition-smooth group">
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-smooth">
                    {project.image}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies I love working with to bring ideas to life
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="px-4 py-2 text-sm hover-glow transition-smooth cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Have a project in mind? I'd love to hear about it and help bring your ideas to life.
          </p>
          <Button asChild size="lg" className="hover-glow transition-bounce">
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;