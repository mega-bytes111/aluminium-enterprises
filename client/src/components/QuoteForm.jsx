import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

const QuoteForm = () => {
  const [quantity, setQuantity] = useState("");
  const [serviceType, setServiceType] = useState("cladding");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post("/quote", {
        quantity,
        serviceType,
        phone,
      });

      toast.success("Quote Submitted Successfully ✅");

      setQuantity("");
      setPhone("");
      setServiceType("cladding");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-xl mx-auto -mt-16 relative z-10">

      <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
        Get Instant Quote
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="number"
          placeholder="Enter Area (Sq. Ft.)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-blue-700 focus:outline-none"
          required
        />

        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-blue-700 focus:outline-none"
        >
          <option value="cladding">ACP Cladding</option>
          <option value="facade">ACP Facade</option>
          <option value="hoarding">Toughened Glass Installation</option>
          <option value="hoarding">Glass Doors & Windows</option>
          <option value="signage">ACP Signage</option>
          <option value="hoarding">Glass Railings
          </option>
          <option 
          value="partition">ACP Partition</option>
          <option value="canopy">Entrance Canopy</option>
          <option value="hoarding">Hoardings</option>
        </select>

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-blue-700 focus:outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          {loading ? "Submitting..." : "Get Best Quote"}
        </button>

      </form>
    </div>
  );
};

export default QuoteForm;