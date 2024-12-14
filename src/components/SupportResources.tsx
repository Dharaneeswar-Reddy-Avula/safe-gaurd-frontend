import React from "react";
import { Phone, Heart, Shield, BookOpen } from "lucide-react";

export default function SupportResources() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <Phone className="w-6 h-6 text-red-500" />
          <h3 className="text-lg font-semibold">Emergency Contacts</h3>
        </div>
        <ul className="space-y-2">
          <li>Campus Security: 0000000000</li>
          <li>Women's Helpline: 1091</li>
          <li>Police: 100</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-6 h-6 text-pink-500" />
          <h3 className="text-lg font-semibold">Counseling Services</h3>
        </div>
        <ul className="space-y-2">
          <li>University Counselor: Room 101, Student Center</li>
          <li>Mental Health Helpline: 1800-XXX-XXX</li>
          <li>Online Counseling: nuzvid@university.edu</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-blue-500" />
          <h3 className="text-lg font-semibold">Legal Aid</h3>
        </div>
        <ul className="space-y-2">
          <li>University Legal Cell: Room 205, Admin Block</li>
          <li>Women's Rights NGO: 1800-XXX-XXX</li>
          <li>Legal Advisory: nuzvid@university.edu</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-green-500" />
          <h3 className="text-lg font-semibold">Educational Resources</h3>
        </div>
        <ul className="space-y-2">
          <li>Anti-Harassment Guidelines</li>
          <li>Student Rights Handbook</li>
          <li>Safety Workshops Schedule</li>
        </ul>
      </div>
    </div>
  );
}
