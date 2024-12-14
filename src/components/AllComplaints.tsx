import type { Complaint } from "../types";

interface AllComplaintsProps {
  anonymousComplaints: Complaint[];
}

export default function AllComplaints({
  anonymousComplaints,
}: AllComplaintsProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">
        All Anonymous Complaints
      </h1>
      <ul className="space-y-4">
        {anonymousComplaints.length > 0 ? (
          anonymousComplaints.map((complaint, index) => (
            <li
              key={index}
              className="p-4 border border-gray-300 rounded-md shadow-sm bg-white"
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
              {complaint.proofFiles && complaint.proofFiles.length > 0 && (
                <div>
                  <strong>Proof Files:</strong>
                  <ul className="list-disc list-inside mt-2">
                    {complaint.proofFiles.map((file, fileIndex) => (
                      <li key={fileIndex}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))
        ) : (
          <p className="text-gray-500">
            No anonymous complaints have been submitted yet.
          </p>
        )}
      </ul>
    </div>
  );
}
