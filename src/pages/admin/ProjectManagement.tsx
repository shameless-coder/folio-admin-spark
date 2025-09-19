import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { 
  ArrowLeft, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  ExternalLink,
  Save,
  Upload
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const ProjectManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    longDescription: "",
    tags: "",
    category: "",
    image: "",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    status: "draft"
  });

  useEffect(() => {
    const loginStatus = localStorage.getItem("isAdminLoggedIn");
    if (loginStatus !== "true") {
      navigate("/admin");
      return;
    }
    setIsLoggedIn(true);
  }, [navigate]);

  // Mock projects data
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with cart functionality",
      longDescription: "This comprehensive e-commerce solution features user authentication, product catalog with search and filtering, shopping cart, secure checkout with Stripe integration, and a complete admin panel for inventory management.",
      tags: ["React", "Node.js", "Stripe", "MongoDB", "Tailwind CSS"],
      category: "Full Stack",
      image: "🛍️",
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      status: "published",
      views: 245,
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      longDescription: "A modern project management application that enables teams to collaborate effectively with real-time updates, file sharing, time tracking, and comprehensive reporting features.",
      tags: ["Vue.js", "Firebase", "Vuex", "PWA", "WebSockets"],
      category: "Frontend",
      image: "📋",
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      status: "published",
      views: 189,
      createdAt: "2024-02-03"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      longDescription: "An elegant weather application featuring current conditions, 7-day forecasts, interactive weather maps, and detailed analytics for weather enthusiasts.",
      tags: ["React", "API Integration", "Charts.js", "Geolocation", "PWA"],
      category: "Frontend",
      image: "🌤️",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      status: "draft",
      views: 67,
      createdAt: "2024-02-10"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProject) {
      // Update existing project
      setProjects(prev => prev.map(p => 
        p.id === editingProject.id 
          ? { 
              ...p, 
              ...formData,
              tags: formData.tags.split(',').map(t => t.trim()).filter(t => t)
            }
          : p
      ));
      toast({
        title: "Project updated!",
        description: "The project has been successfully updated.",
      });
    } else {
      // Add new project
      const newProject = {
        id: Date.now(),
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
        views: 0,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setProjects(prev => [newProject, ...prev]);
      toast({
        title: "Project created!",
        description: "The new project has been successfully created.",
      });
    }
    
    resetForm();
  };

  const handleEdit = (project: any) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      longDescription: project.longDescription,
      tags: project.tags.join(', '),
      category: project.category,
      image: project.image,
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
      featured: project.featured,
      status: project.status
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(prev => prev.filter(p => p.id !== id));
      toast({
        title: "Project deleted",
        description: "The project has been removed.",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      longDescription: "",
      tags: "",
      category: "",
      image: "",
      githubUrl: "",
      liveUrl: "",
      featured: false,
      status: "draft"
    });
    setEditingProject(null);
    setShowForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Project Management</h1>
              <p className="text-muted-foreground">Manage your portfolio projects</p>
            </div>
          </div>
          
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus className="h-4 w-4 mr-2" />
            {showForm ? 'Cancel' : 'Add Project'}
          </Button>
        </div>
      </header>

      <div className="p-6">
        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </CardTitle>
              <CardDescription>
                {editingProject ? 'Update project information' : 'Create a new project for your portfolio'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Project Title *</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        placeholder="My Awesome Project"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Short Description *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        placeholder="Brief project description..."
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="longDescription">Detailed Description</Label>
                      <Textarea
                        id="longDescription"
                        name="longDescription"
                        value={formData.longDescription}
                        onChange={handleInputChange}
                        placeholder="Comprehensive project description with features and technical details..."
                        rows={5}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="tags">Technologies (comma separated) *</Label>
                      <Input
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        required
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({...prev, category: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full Stack">Full Stack</SelectItem>
                          <SelectItem value="Frontend">Frontend</SelectItem>
                          <SelectItem value="Backend">Backend</SelectItem>
                          <SelectItem value="Mobile">Mobile</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="image">Project Icon/Emoji</Label>
                      <Input
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="🚀"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="githubUrl">GitHub URL</Label>
                      <Input
                        id="githubUrl"
                        name="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleInputChange}
                        placeholder="https://github.com/username/repo"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="liveUrl">Live Demo URL</Label>
                      <Input
                        id="liveUrl"
                        name="liveUrl"
                        value={formData.liveUrl}
                        onChange={handleInputChange}
                        placeholder="https://myproject.com"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="featured"
                        checked={formData.featured}
                        onCheckedChange={(checked) => setFormData(prev => ({...prev, featured: checked}))}
                      />
                      <Label htmlFor="featured">Featured Project</Label>
                    </div>
                    
                    <div>
                      <Label>Status</Label>
                      <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({...prev, status: value}))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button type="submit">
                    <Save className="h-4 w-4 mr-2" />
                    {editingProject ? 'Update Project' : 'Save Project'}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Projects List */}
        <Card>
          <CardHeader>
            <CardTitle>All Projects ({projects.length})</CardTitle>
            <CardDescription>Manage your portfolio projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{project.image}</div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium">{project.title}</h4>
                        {project.featured && (
                          <Badge className="bg-gradient-primary text-xs">Featured</Badge>
                        )}
                        <Badge variant={project.status === 'published' ? 'default' : 'secondary'} className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="text-sm text-muted-foreground mr-4">
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {project.views} views
                      </span>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => handleEdit(project)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => handleDelete(project.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectManagement;