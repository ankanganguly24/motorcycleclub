"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Button from "@/app/components/common/Button";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function RegistrationView() {
  const [registrations, setRegistrations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const recordsPerPage = 5;

  useEffect(() => {
    const fetchRegistrations = async () => {
      const { data, error, count } = await supabase
        .from("registrations")
        .select("*", { count: "exact" })
        .range((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage - 1);

      if (error) {
        console.error("Error fetching registrations:", error.message);
      } else {
        setRegistrations(data);
        setTotalPages(Math.ceil(count / recordsPerPage));
      }
    };

    fetchRegistrations();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const checkPassword = (e) => {
    if (e.target.value === '2025sikkimTour11') {
      setIsUnlocked(true);
    } else {
      setIsUnlocked(false);
    }
    setPassword(e.target.value);
  };



  const downloadAsTable = () => {
    const tableHTML = `
      <html>
        <head>
          <style>
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h2>Registrations List</h2>
          ${document.querySelector('table').outerHTML}
        </body>
      </html>
    `;

    const blob = new Blob([tableHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'registrations.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center text-white">Registrations</h1>
      
      <div className="mb-6">
        <input
          type="password"
          value={password}
          onChange={checkPassword}
          placeholder="Enter password to view registrations"
          className="w-full max-w-md mx-auto block px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
        />
      </div>

      <div className={`relative ${!isUnlocked ? 'filter blur-md pointer-events-none' : ''}`}>
        {registrations.length > 0 ? (
          <>
            <div className="mb-4 flex justify-end">
        
              <Button onClick={downloadAsTable}>
                Download Table
              </Button>
            </div>
            <div className="overflow-x-auto bg-gray-900 shadow-md rounded-lg">
              <table className="min-w-full table-auto text-sm text-left bg-gray-900">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Full Name</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Age</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Gender</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Blood Group</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Email</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Club Name</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Solo</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">State</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Event Name</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Food Preference</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">T-Shirt Size</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Motorcycle Model</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Registration Number</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Emergency Contact Name</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Contact Number</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Payment Status</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Payment Ref No</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Payment Mode</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Payment Details</th>
                    <th className="px-12 py-6 text-xlfont-semibold border-b">Terms and Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((reg, index) => (
                    <tr
                      key={reg.id}
                      className={`border-b ${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"} `}
                    >
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.full_name}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.age}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.gender}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.blood_group}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.email}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.club_name || "-"}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.solo}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.state}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.event_name}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.food_preference}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.tshirt_size}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.motorcycle_model}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.registration_number}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.emergency_contact_name}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.emergency_contact_number}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.payment_status}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.payment_ref_no || "-"}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.payment_mode}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.payment_details || "-"}</td>
                      <td className="px-12 py-6 text-xlfont-semibold">{reg.terms_and_conditions ? "Agreed" : "Not Agreed"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 mt-4">No registrations found.</p>
        )}

        <div className="flex justify-center mt-6">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="px-4 py-2 text-lg font-semibold text-white">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
