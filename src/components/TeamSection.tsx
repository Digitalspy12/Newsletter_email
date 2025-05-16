
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// This array can be modified to change team members
export const teamMembers = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Security Researcher",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=alex",
    fallback: "AM",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Full Stack Developer",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=sarah",
    fallback: "SC",
  },
  {
    id: 3,
    name: "Jamal Wright",
    role: "DevOps Specialist",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=jamal",
    fallback: "JW",
  },
];

const TeamSection = () => {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block bg-gray-800 px-4 py-1 rounded-full text-xs uppercase tracking-wider text-green-400">
          The_Team
        </div>
        <h2 className="text-3xl font-bold glitch-text">Meet The Team</h2>
        <p className="text-green-300 max-w-2xl mx-auto font-mono">
          We're a team of {teamMembers.length} experts providing valuable insights and cutting-edge techniques in development and security.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card 
            key={member.id} 
            className="terminal-window transform transition-all hover:translate-y-[-5px] duration-300"
          >
            <div className="terminal-header">
              <span className="terminal-circle red"></span>
              <span className="terminal-circle yellow"></span>
              <span className="terminal-circle green"></span>
              <span className="ml-2 text-green-400 text-sm">~/{member.name.toLowerCase().replace(" ", "_")}</span>
            </div>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Avatar className="h-24 w-24 border-2 border-green-700">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="bg-gray-800 text-green-400">{member.fallback}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold text-green-400 terminal-cursor">{member.name}</h3>
                <p className="text-green-300 font-mono">{member.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
