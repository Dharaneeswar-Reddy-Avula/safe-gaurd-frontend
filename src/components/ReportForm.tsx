// import React, { useState } from 'react';
// import { Shield, MapPin, Clock, User, Send } from 'lucide-react';
// import type { HarassmentType, Location } from '../types';

// export default function ReportForm() {
//   const [formData, setFormData] = useState({
//     type: '' as HarassmentType,
//     location: '' as Location,
//     date: '',
//     time: '',
//     description: '',
//     isAnonymous: true
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real app, this would send to an API
//     console.log('Report submitted:', formData);
//     alert('Report submitted successfully. Help is on the way.');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//           <Shield className="w-4 h-4" />
//           Type of Harassment
//         </label>
//         <select
//           required
//           value={formData.type}
//           onChange={(e) => setFormData({...formData, type: e.target.value as HarassmentType})}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//         >
//           <option value="">Select type</option>
//           <option value="verbal_abuse">Verbal Abuse</option>
//           <option value="sexual_harassment">Sexual Harassment</option>
//           <option value="bullying">Bullying</option>
//           <option value="stalking">Stalking</option>
//           <option value="cyber_harassment">Cyber Harassment</option>
//           <option value="discrimination">Discrimination</option>
//           <option value="abuse_of_authority">Abuse of Authority</option>
//         </select>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//           <MapPin className="w-4 h-4" />
//           Location
//         </label>
//         <select
//           required
//           value={formData.location}
//           onChange={(e) => setFormData({...formData, location: e.target.value as Location})}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//         >
//           <option value="">Select location</option>
//           <option value="classroom">Classroom</option>
//           <option value="hostel">Hostel</option>
//           <option value="library">Library</option>
//           <option value="sports_facility">Sports Facility</option>
//           <option value="online">Online</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//             <Clock className="w-4 h-4" />
//             Date
//           </label>
//           <input
//             type="date"
//             required
//             value={formData.date}
//             onChange={(e) => setFormData({...formData, date: e.target.value})}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//             <Clock className="w-4 h-4" />
//             Time
//           </label>
//           <input
//             type="time"
//             required
//             value={formData.time}
//             onChange={(e) => setFormData({...formData, time: e.target.value})}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2">
//           Description (Optional)
//         </label>
//         <textarea
//           value={formData.description}
//           onChange={(e) => setFormData({...formData, description: e.target.value})}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//           rows={4}
//           placeholder="Provide any additional details you feel comfortable sharing..."
//         />
//       </div>

//       <div className="flex items-center">
//         <input
//           type="checkbox"
//           id="anonymous"
//           checked={formData.isAnonymous}
//           onChange={(e) => setFormData({...formData, isAnonymous: e.target.checked})}
//           className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//         />
//         <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700 flex items-center gap-2">
//           <User className="w-4 h-4" />
//           Submit Anonymously
//         </label>
//       </div>

//       <button
//         type="submit"
//         className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//       >
//         <Send className="w-4 h-4" />
//         Submit Report
//       </button>
//     </form>
//   );
// }

import React, { useState } from "react";
import { Shield, MapPin, Clock, User, Send, FileText } from "lucide-react";
import type { HarassmentType, Location } from "../types";

interface Complaint {
  type: HarassmentType;
  location: Location;
  date: string;
  time: string;
  description: string;
  isAnonymous: boolean;
  name?: string;
  idNumber?: string;
  phoneNumber?: string;
  proofFiles?: File[];
}

export default function ReportForm() {
  const [formData, setFormData] = useState({
    type: "" as HarassmentType,
    location: "" as Location,
    date: "",
    time: "",
    description: "",
    isAnonymous: true,
    name: "",
    idNumber: "",
    phoneNumber: "",
    proofFiles: [] as File[],
  });

  const [anonymousComplaints, setAnonymousComplaints] = useState<Complaint[]>(
    []
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        proofFiles: Array.from(e.target.files),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.isAnonymous && (!formData.name || !formData.idNumber)) {
      alert("Please provide Name and ID Number for non-anonymous submission.");
      return;
    }

    const complaint: Complaint = {
      type: formData.type,
      location: formData.location,
      date: formData.date,
      time: formData.time,
      description: formData.description,
      isAnonymous: formData.isAnonymous,
      name: formData.isAnonymous ? undefined : formData.name,
      idNumber: formData.isAnonymous ? undefined : formData.idNumber,
      phoneNumber: formData.isAnonymous ? undefined : formData.phoneNumber,
      proofFiles: formData.proofFiles,
    };

    if (formData.isAnonymous) {
      setAnonymousComplaints([...anonymousComplaints, complaint]);
    }

    console.log("Report submitted:", complaint);
    alert("Report submitted successfully. Help is on the way.");

    // Reset form
    setFormData({
      type: "" as HarassmentType,
      location: "" as Location,
      date: "",
      time: "",
      description: "",
      isAnonymous: true,
      name: "",
      idNumber: "",
      phoneNumber: "",
      proofFiles: [] as File[],
    });
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Type of Harassment
          </label>
          <select
            required
            value={formData.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                type: e.target.value as HarassmentType,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select type</option>
            <option value="verbal_abuse">Verbal Abuse</option>
            <option value="sexual_harassment">Sexual Harassment</option>
            <option value="bullying">Bullying</option>
            <option value="stalking">Stalking</option>
            <option value="cyber_harassment">Cyber Harassment</option>
            <option value="discrimination">Discrimination</option>
            <option value="abuse_of_authority">Abuse of Authority</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Location
          </label>
          <select
            required
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value as Location })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select location</option>
            <option value="classroom">Classroom</option>
            <option value="hostel">Hostel</option>
            <option value="library">Library</option>
            <option value="sports_facility">Sports Facility</option>
            <option value="online">Online</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Date
            </label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Time
            </label>
            <input
              type="time"
              required
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description (Optional)
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            placeholder="Provide any additional details you feel comfortable sharing..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Upload Proof (Optional)
          </label>
          <input
            type="file"
            multiple
            accept="image/*,video/*,audio/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {!formData.isAnonymous && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ID Number
              </label>
              <input
                type="text"
                required
                value={formData.idNumber}
                onChange={(e) =>
                  setFormData({ ...formData, idNumber: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        )}

        <div className="flex items-center">
          <input
            type="checkbox"
            id="anonymous"
            checked={formData.isAnonymous}
            onChange={(e) =>
              setFormData({ ...formData, isAnonymous: e.target.checked })
            }
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="anonymous"
            className="ml-2 block text-sm text-gray-700 flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            Submit Anonymously
          </label>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Send className="w-4 h-4" />
          Submit Report
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Anonymous Complaints
        </h2>
        <ul className="space-y-4">
          {anonymousComplaints.map((complaint, index) => (
            <li
              key={index}
              className="p-4 border border-gray-300 rounded-md shadow-sm"
            >
              <p>
                <strong>Type:</strong> {complaint.type}
              </p>
              <p>
                <strong>Location:</strong> {complaint.location}
              </p>
              <p>
                <strong>Date:</strong> {complaint.date}
              </p>
              <p>
                <strong>Time:</strong> {complaint.time}
              </p>
              <p>
                <strong>Description:</strong> {complaint.description || "N/A"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
