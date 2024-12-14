// import React, { useState } from "react";
// import { Shield, BookOpen, ClipboardList } from "lucide-react";
// import ReportForm from "./components/ReportForm";
// import SupportResources from "./components/SupportResources";
// import AllComplaints from "./components/AllComplaints";

// function App() {
//   const [activeTab, setActiveTab] = useState<
//     "report" | "resources" | "complaints"
//   >("report");
//   const [anonymousComplaints, setAnonymousComplaints] = useState([]);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-indigo-600 text-white py-6 px-4">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold">SafeCampus</h1>
//           <p className="mt-2 text-indigo-100">
//             A safe space to report and seek support
//           </p>
//         </div>
//       </header>

//       <main className="max-w-4xl mx-auto px-4 py-8">
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <div className="flex space-x-4 mb-6">
//             <button
//               onClick={() => setActiveTab("report")}
//               className={`flex items-center gap-2 px-4 py-2 rounded-md ${
//                 activeTab === "report"
//                   ? "bg-indigo-600 text-white"
//                   : "text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               <Shield className="w-5 h-5" />
//               Report Incident
//             </button>
//             <button
//               onClick={() => setActiveTab("resources")}
//               className={`flex items-center gap-2 px-4 py-2 rounded-md ${
//                 activeTab === "resources"
//                   ? "bg-indigo-600 text-white"
//                   : "text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               <BookOpen className="w-5 h-5" />
//               Support Resources
//             </button>
//             <button
//               onClick={() => setActiveTab("complaints")}
//               className={`flex items-center gap-2 px-4 py-2 rounded-md ${
//                 activeTab === "complaints"
//                   ? "bg-indigo-600 text-white"
//                   : "text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               <ClipboardList className="w-5 h-5" />
//               View Complaints
//             </button>
//           </div>

//           {activeTab === "report" && (
//             <>
//               <h2 className="text-2xl font-semibold mb-6">
//                 Report an Incident
//               </h2>
//               <ReportForm setAnonymousComplaints={setAnonymousComplaints} />
//             </>
//           )}
//           {activeTab === "resources" && (
//             <>
//               <h2 className="text-2xl font-semibold mb-6">Available Support</h2>
//               <SupportResources />
//             </>
//           )}
//           {activeTab === "complaints" && (
//             <>
//               <h2 className="text-2xl font-semibold mb-6">
//                 All Anonymous Complaints
//               </h2>
//               <AllComplaints anonymousComplaints={anonymousComplaints} />
//             </>
//           )}
//         </div>

//         <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-indigo-900 mb-3">
//             Your Safety Matters
//           </h3>
//           <p className="text-indigo-700">
//             If you're in immediate danger, please contact emergency services
//             immediately. Your report will be handled with strict
//             confidentiality, and support is available 24/7.
//           </p>
//         </div>
//       </main>

//       <footer className="bg-gray-50 border-t border-gray-200 py-6 px-4">
//         <div className="max-w-4xl mx-auto text-center text-gray-600">
//           <p>© 2024 SafeCampus. All reports are confidential and protected.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { Shield, BookOpen, ClipboardList } from "lucide-react";
import ReportForm from "./components/ReportForm";
import SupportResources from "./components/SupportResources";
import AllComplaints from "./components/AllComplaints";
import { Chatbot } from "./components/Chatbot";
function App() {
  const [activeTab, setActiveTab] = useState<
    "report" | "resources" | "complaints" | "Chatbot"
  >("report");
  const [anonymousComplaints, setAnonymousComplaints] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">ShareVoice</h1>
          <p className="mt-2 text-indigo-100">A place to Share Your Voice!</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex space-x-4 mb-6 overflow-x-scroll md:overflow-x-hidden">
            <button
              onClick={() => setActiveTab("report")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                activeTab === "report"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Shield className="w-5 h-5" />
              Report Incident
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                activeTab === "resources"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <BookOpen className="w-5 h-5" />
              Support Resources
            </button>
            <button
              onClick={() => setActiveTab("complaints")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                activeTab === "complaints"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ClipboardList className="w-5 h-5" />
              View Complaints
            </button>
            <button
              onClick={() => setActiveTab("Chatbot")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                activeTab === "Chatbot"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ClipboardList className="w-5 h-5" />
               Chatbot
            </button>
          </div>

          {activeTab === "report" && (
            <>
              <h2 className="text-2xl font-semibold mb-6">
                Report an Incident
              </h2>
              {/* <ReportForm setAnonymousComplaints = {setAnonymousComplaints} /> */}
              <ReportForm setAnonymousComplaints={setAnonymousComplaints} />
      
            </>
          )}
          {activeTab === "resources" && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Available Support</h2>
              <SupportResources />
            </>
          )}
          {activeTab === "complaints" && (
            <>
              <h2 className="text-2xl font-semibold mb-6">
                All Anonymous Complaints
              </h2>
              <AllComplaints anonymousComplaints={anonymousComplaints} />
            </>
          )}
          {activeTab === "Chatbot" && (
            <>
              <h2 className="text-2xl font-semibold mb-6">
                Chatbot
              </h2>
              <Chatbot anonymousComplaints={anonymousComplaints} />
            </>
          )}
          
        </div>

        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-3">
            Your Safety Matters
          </h3>
          <p className="text-indigo-700">
            If you're in immediate danger, please contact emergency services
            immediately. Your report will be handled with strict
            confidentiality, and support is available 24/7.
          </p>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p>© 2024 ShareVoice. All reports are confidential and protected.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
