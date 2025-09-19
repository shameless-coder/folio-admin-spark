import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Github, Search } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with cart functionality, payment processing, and admin dashboard. Built with React and Node.js.",
      longDescription: "This comprehensive e-commerce solution features user authentication, product catalog with search and filtering, shopping cart, secure checkout with Stripe integration, and a complete admin panel for inventory management.",
      image: "🛍️",
      tags: ["React", "Node.js", "Stripe", "MongoDB", "Tailwind CSS"],
      category: "Full Stack",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team features, and progress tracking.",
      longDescription: "A modern project management application that enables teams to collaborate effectively with real-time updates, file sharing, time tracking, and comprehensive reporting features.",
      image: "📋",
      tags: ["Vue.js", "Firebase", "Vuex", "PWA", "WebSockets"],
      category: "Frontend",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and detailed meteorological data.",
      longDescription: "An elegant weather application featuring current conditions, 7-day forecasts, interactive weather maps, and detailed analytics for weather enthusiasts.",
      image: "🌤️",
      tags: ["React", "API Integration", "Charts.js", "Geolocation", "PWA"],
      category: "Frontend",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Blog CMS",
      description: "Content management system for bloggers with rich text editing, SEO optimization, and analytics.",
      longDescription: "A powerful CMS built for content creators, featuring a rich text editor, SEO tools, analytics dashboard, and social media integration.",
      image: "✍️",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "TypeScript"],
      category: "Full Stack",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto portfolio tracker with price alerts, news feed, and portfolio analytics.",
      longDescription: "Track your crypto investments with real-time price updates, portfolio performance analytics, price alerts, and integrated news feed.",
      image: "₿",
      tags: ["React", "Redux", "WebSockets", "Charts.js", "CoinGecko API"],
      category: "Frontend",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Unified dashboard for managing multiple social media accounts with scheduling and analytics.",
      longDescription: "Streamline social media management with post scheduling, cross-platform publishing, engagement analytics, and content planning tools.",
      image: "📱",
      tags: ["React", "Node.js", "Express", "MongoDB", "Social APIs"],
      category: "Full Stack",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const categories = ["all", "Full Stack", "Frontend", "Backend"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of my work showcasing different technologies, design approaches, 
              and problem-solving techniques. Each project represents a unique challenge 
              and learning opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            </div>
          ) : (
            <>
              {/* Featured Projects */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredProjects
                    .filter(project => project.featured)
                    .map((project, index) => (
                      <Card key={index} className="hover-glow transition-smooth group">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-smooth">
                              {project.image}
                            </div>
                            <Badge className="bg-gradient-primary text-primary-foreground">
                              Featured
                            </Badge>
                          </div>
                          <CardTitle className="group-hover:text-primary transition-smooth text-xl">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {project.longDescription}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button size="sm" className="flex-1">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* All Projects */}
              <div>
                <h2 className="text-2xl font-bold mb-8">All Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, index) => (
                    <Card key={index} className="hover-glow transition-smooth group">
                      <CardHeader className="pb-3">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-smooth">
                          {project.image}
                        </div>
                        <CardTitle className="group-hover:text-primary transition-smooth text-lg">
                          {project.title}
                        </CardTitle>
                        <CardDescription>
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Github className="h-3 w-3" />
                          </Button>
                          <Button size="sm" className="flex-1">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;