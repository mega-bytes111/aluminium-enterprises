import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

const Admin = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    try {
      const { data } = await API.get("/quote");
      setQuotes(data.data);
    } catch (error) {
      toast.error("Failed to fetch quotes");
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/quote/${id}/status`, { status });
      toast.success("Status updated ✅");
      fetchQuotes();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const deleteQuote = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lead?"))
      return;

    try {
      await API.delete(`/quote/${id}`);
      toast.success("Deleted successfully ✅");
      fetchQuotes();
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  const safeValue = (value) => {
    if (!value || value === "_" || value === "null") return "—";
    return value;
  };

  const totalLeads = quotes.length;
  const newLeads = quotes.filter((q) => q.status === "new").length;
  const contactedLeads = quotes.filter((q) => q.status === "contacted").length;
  const closedLeads = quotes.filter((q) => q.status === "closed").length;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* ✅ PREMIUM HEADER WITH LOGO */}
      <div className="mb-10 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">

        <div className="flex items-center gap-4">

          {/* ✅ Logo */}
          <img
            src="/images/logo.jpg"
            alt="Shri Vishwkarma Enterprises"
            className="h-14 w-auto rounded-xl shadow-md transition-all duration-300 hover:scale-105"
          />

          {/* ✅ Title Section */}
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">
              Shri Vishwkarma Enterprises
            </h1>

            <span className="inline-block mt-2 px-4 py-1 bg-blue-900 text-white text-xs font-semibold rounded-full shadow-md">
              Admin Dashboard
            </span>

            <p className="text-gray-500 text-sm mt-2 hidden md:block">
              Manage all website enquiries & leads
            </p>
          </div>

        </div>

        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-400 mt-5 rounded-full"></div>

      </div>

      {/* ✅ Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-2xl transition text-center">
          <h2 className="text-3xl font-bold text-blue-900">
            {totalLeads}
          </h2>
          <p className="text-gray-500 text-sm mt-1">Total Leads</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-2xl transition text-center">
          <h2 className="text-3xl font-bold text-yellow-500">
            {newLeads}
          </h2>
          <p className="text-gray-500 text-sm mt-1">New</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-2xl transition text-center">
          <h2 className="text-3xl font-bold text-purple-500">
            {contactedLeads}
          </h2>
          <p className="text-gray-500 text-sm mt-1">Contacted</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-2xl transition text-center">
          <h2 className="text-3xl font-bold text-green-600">
            {closedLeads}
          </h2>
          <p className="text-gray-500 text-sm mt-1">Closed</p>
        </div>

      </div>

      {/* ✅ Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-xl hover:shadow-2xl transition">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-4">Area</th>
              <th className="p-4">Service</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {quotes.map((quote) => (
              <tr key={quote._id} className="border-b hover:bg-gray-50 transition">

                <td className="p-4">
                  {quote.quantity && quote.quantity !== "_"
                    ? `${quote.quantity} sq.ft`
                    : "—"}
                </td>

                <td className="p-4">
                  {safeValue(quote.serviceName || quote.requirement)}
                </td>

                <td className="p-4">
                  {safeValue(quote.phone)}
                </td>

                <td className="p-4">
                  <select
                    value={quote.status || "new"}
                    onChange={(e) =>
                      updateStatus(quote._id, e.target.value)
                    }
                    className="border p-2 rounded-lg"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>

                <td className="p-4">
                  <button
                    onClick={() => deleteQuote(quote._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        {quotes.length === 0 && (
          <p className="text-center py-6 text-gray-500">
            No leads yet
          </p>
        )}
      </div>

    </div>
  );
};

export default Admin;