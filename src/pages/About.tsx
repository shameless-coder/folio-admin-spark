import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise web applications, mentoring junior developers, and architecting scalable React solutions."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022", 
      description: "Built responsive websites and web applications using modern JavaScript frameworks and backend technologies."
    },
    {
      title: "Junior Web Developer",
      company: "Startup Hub",
      period: "2019 - 2020",
      description: "Developed and maintained client websites, learned best practices in web development and collaborated with design teams."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      period: "2016 - 2019",
      description: "Focused on software engineering, algorithms, and web technologies. Graduated with honors."
    }
  ];

  const values = [
    {
      title: "User-Centered Design",
      description: "I believe great software starts with understanding user needs and creating intuitive experiences."
    },
    {
      title: "Clean Code",
      description: "Writing maintainable, scalable code that other developers can easily understand and contribute to."
    },
    {
      title: "Continuous Learning",
      description: "Staying curious and constantly learning new technologies to deliver better solutions."
    },
    {
      title: "Collaboration",
      description: "Working closely with designers, product managers, and other developers to achieve shared goals."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience creating 
              digital solutions that combine beautiful design with robust functionality. 
              Based in San Francisco, I love turning complex problems into simple, 
              elegant interfaces.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>5+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">My Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                My journey into web development started during college when I built my first website 
                for a local business. Seeing how technology could solve real-world problems and 
                create meaningful impact sparked my passion for development.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Over the years, I've had the opportunity to work with startups, agencies, and 
                established companies, each experience teaching me valuable lessons about building 
                software that users love. I'm particularly drawn to the intersection of design and 
                development, where creativity meets technical precision.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring San Francisco's hiking trails, 
                experimenting with new coffee brewing methods, or contributing to open-source projects 
                that make development more accessible for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Experience</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="hover-glow transition-smooth">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      <Briefcase className="h-3 w-3 mr-1" />
                      {job.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Education</h2>
          
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="hover-glow transition-smooth">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      <GraduationCap className="h-3 w-3 mr-1" />
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">What I Believe In</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="hover-glow transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;