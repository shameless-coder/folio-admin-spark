import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  FolderOpen, 
  MessageSquare, 
  User, 
  Settings,
  LogOut,
  Plus,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  Clock
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status
    const loginStatus = localStorage.getItem("isAdminLoggedIn");
    if (loginStatus !== "true") {
      navigate("/admin");
      return;
    }
    setIsLoggedIn(true);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    toast({
      title: "Logged out successfully",
      description: "You have been signed out of the admin panel.",
    });
    navigate("/");
  };

  // Mock data
  const stats = [
    {
      title: "Total Projects",
      value: "12",
      change: "+2 this month",
      icon: FolderOpen,
      color: "text-primary"
    },
    {
      title: "Contact Messages",
      value: "8",
      change: "3 unread",
      icon: MessageSquare,
      color: "text-accent"
    },
    {
      title: "Profile Views",
      value: "1,234",
      change: "+15% this week",
      icon: Eye,
      color: "text-green-600"
    },
    {
      title: "Response Rate",
      value: "98%",
      change: "Within 24h",
      icon: TrendingUp,
      color: "text-blue-600"
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      status: "Published",
      lastUpdated: "2 days ago",
      views: 45
    },
    {
      id: 2,
      title: "Task Management App",
      status: "Draft",
      lastUpdated: "1 week ago",
      views: 23
    },
    {
      id: 3,
      title: "Weather Dashboard",
      status: "Published",
      lastUpdated: "3 days ago",
      views: 67
    }
  ];

  const recentMessages = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      subject: "Project Inquiry",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@startup.com",
      subject: "Collaboration Opportunity",
      time: "5 hours ago",
      read: false
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      email: "lisa@agency.com",
      subject: "Website Redesign",
      time: "1 day ago",
      read: true
    }
  ];

  const quickActions = [
    {
      title: "Add New Project",
      description: "Create and publish a new project",
      icon: Plus,
      href: "/admin/projects/new",
      color: "bg-primary"
    },
    {
      title: "Edit About Page",
      description: "Update your personal information",
      icon: User,
      href: "/admin/about",
      color: "bg-accent"
    },
    {
      title: "View Messages",
      description: "Check and respond to contacts",
      icon: MessageSquare,
      href: "/admin/messages",
      color: "bg-green-600"
    }
  ];

  if (!isLoggedIn) {
    return null; // or loading spinner
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, John!</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <Eye className="h-4 w-4 mr-2" />
                View Portfolio
              </Link>
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start hover-glow transition-smooth"
                    asChild
                  >
                    <Link to={action.href}>
                      <div className={`w-8 h-8 rounded ${action.color} flex items-center justify-center mr-3`}>
                        <action.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{action.title}</p>
                        <p className="text-xs text-muted-foreground">{action.description}</p>
                      </div>
                    </Link>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Projects & Messages */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Recent Projects */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>Your latest project updates</CardDescription>
                </div>
                <Button size="sm" asChild>
                  <Link to="/admin/projects">
                    View All
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-smooth">
                      <div>
                        <h4 className="font-medium">{project.title}</h4>
                        <div className="flex items-center space-x-4 mt-1">
                          <Badge variant={project.status === 'Published' ? 'default' : 'secondary'}>
                            {project.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {project.lastUpdated}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {project.views} views
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Latest contact form submissions</CardDescription>
                </div>
                <Button size="sm" asChild>
                  <Link to="/admin/messages">
                    View All
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMessages.map((message) => (
                    <div key={message.id} className={`p-4 border rounded-lg hover:bg-muted/50 transition-smooth ${!message.read ? 'bg-primary/5 border-primary/20' : ''}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{message.name}</h4>
                            {!message.read && (
                              <Badge variant="default" className="text-xs">New</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{message.email}</p>
                          <p className="text-sm font-medium mt-1">{message.subject}</p>
                          <p className="text-xs text-muted-foreground mt-2">{message.time}</p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;