
import React from "react";
import { Card, CardContent } from "./ui/card";

const TargetAudience = () => {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block bg-gray-800 px-4 py-1 rounded-full text-xs uppercase tracking-wider text-gray-300">
          Target Audience
        </div>
        <h2 className="text-3xl font-bold">Who's the newsletter for?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We provide in-depth technical content and security insights to help developers
          stay ahead of the curve and level up their coding skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gray-900/60 border-gray-800 transform transition-all hover:translate-y-[-5px] duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Code Craftsmen</h3>
            <p className="text-gray-400">
              Developers looking to master their craft, learn best practices, and stay updated with
              the latest tools and frameworks in the programming world.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/60 border-gray-800 transform transition-all hover:translate-y-[-5px] duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Security Enthusiasts</h3>
            <p className="text-gray-400">
              Those passionate about cybersecurity, ethical hacking, and understanding
              system vulnerabilities to build more secure applications.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TargetAudience;
