"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function BikeRepairForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Use your actual Telegram credentials
  const TELEGRAM_BOT_TOKEN = "8253082522:AAGo1zrGuLXcKfcG0U8GqaEM_MWK2FkVpro";
  const TELEGRAM_CHAT_ID = "7073697020";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const bikeBrand = formData.get("bikeBrand") as string;
    const bikeModel = formData.get("bikeModel") as string;
    const serviceType = formData.get("serviceType") as string;
    const location = formData.get("location") as string;
    const problem = formData.get("problem") as string;

    const message = `🚲  Moto Care Pro - New Repair Request

Name: ${name}
Phone: ${phone}
Bike: ${bikeBrand} ${bikeModel}
Service: ${serviceType}
Location: ${location}
Problem: ${problem}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
          }),
        }
      );

      const data = await res.json();

      if (data.ok) {
        // Force redirect to thank you page
        window.location.href = "/thankyou";
      } else {
        alert("Error sending message. Please call +91 6305034341");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error! Please call +91 6305034341");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-white">
          <div className="px-6 py-5 flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Moto Care Pro - Service Request
            </h1>
            <a
              href="tel:+916305034341"
              className="hidden sm:inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 font-semibold"
            >
              <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              +91 6305034341
            </a>
          </div>
          <div className="h-px bg-gradient-to-r from-orange-200 via-amber-200 to-yellow-200" />
        </div>

        {/* Form */}
        <div className="relative bg-white">
          <div className="pointer-events-none absolute -inset-1 bg-gradient-to-br from-orange-200/20 via-amber-200/20 to-yellow-200/20 blur-2xl" />
          <div className="relative p-6 sm:p-8">
            <p className="text-gray-700 text-sm sm:text-base text-center mb-6">
              For faster assistance, please call{" "}
              <a
                href="tel:+916305034341"
                className="font-semibold text-orange-700 hover:text-orange-800 underline"
              >
                +91 6305034341
              </a>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  required
                  className="p-3 rounded-xl bg-white border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  required
                  className="p-3 rounded-xl bg-white border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="bikeBrand"
                  required
                  className="p-3 rounded-xl bg-white border border-gray-200 text-gray-700 focus:border-orange-300 focus:ring-2 focus:ring-orange-200 outline-none transition"
                >
                  <option value="">Bike Brand</option>
                  <option>Royal Enfield</option>
                  <option>Hero</option>
                  <option>Honda</option>
                  <option>Yamaha</option>
                  <option>Suzuki</option>
                  <option>Kawasaki</option>
                  <option>TVS</option>
                  <option>KTM</option>
                  <option>BMW</option>
                  <option>Triumph</option>
                  <option>Harley-Davidson</option>
                </select>
                <input
                  type="text"
                  name="bikeModel"
                  placeholder="Bike Model*"
                  required
                  className="p-3 rounded-xl bg-white border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="serviceType"
                  required
                  className="p-3 rounded-xl bg-white border border-gray-200 text-gray-700 focus:border-orange-300 focus:ring-2 focus:ring-orange-200 outline-none transition"
                >
                  <option value="">Service Type</option>
                  <option value="battery">Battery Problems</option>
                  <option value="overheating">Engine Overheating</option>
                  <option value="chain">Chain Issues</option>
                  <option value="brakes">Brake Problems</option>
                  <option value="fuel">Fuel System Issues</option>
                  <option value="starting">Starting Trouble</option>
                  <option value="electrical">Electrical Problems</option>
                  <option value="suspension">Suspension Problems</option>
                  <option value="clutch">Clutch Issues</option>
                </select>
                <select
                  name="location"
                  required
                  className="p-3 rounded-xl bg-white border border-gray-200 text-gray-700 focus:border-orange-300 focus:ring-2 focus:ring-orange-200 outline-none transition"
                >
                  <option value="">Pickup Location</option>
                  <option>Gachibowli</option>
                  <option>Madhapur</option>
                  <option>Hitech City</option>
                  <option>Kokapet</option>
                  <option>Jubilee Hills</option>
                  <option>Kondapur</option>
                  <option>Nanakramguda</option>
                  <option>Others</option>
                </select>
              </div>

              <textarea
                name="problem"
                placeholder="Describe the problem*"
                required
                className="p-3 rounded-xl w-full bg-white border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-200 outline-none transition min-h-[110px]"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center"
              >
                {!loading ? (
                  <span>REQUEST PICKUP & DROP</span>
                ) : (
                  <div className="animate-spin border-4 border-white/70 border-t-transparent h-6 w-6 rounded-full"></div>
                )}
              </button>

              <div className="text-center text-sm text-gray-600">
                Prefer talking to a person?{" "}
                <a
                  href="tel:+916305034341"
                  className="font-semibold text-orange-700 hover:text-orange-800"
                >
                  +91 6305034341
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500" />
      </div>
    </div>
  );
}