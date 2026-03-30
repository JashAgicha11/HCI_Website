import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Crown } from "lucide-react";
import { motion } from "motion/react";

type SeatStatus = "available" | "selected" | "vip" | "occupied";

interface Seat {
  id: string;
  row: string;
  number: number;
  status: SeatStatus;
}

const generateSeats = (): Seat[] => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seatsPerRow = 16;
  const seats: Seat[] = [];

  rows.forEach((row, rowIndex) => {
    for (let i = 1; i <= seatsPerRow; i++) {
      let status: SeatStatus = "available";
      
      // VIP rows (first 2 rows)
      if (rowIndex < 2) {
        status = "vip";
      }
      
      // Some random occupied seats
      if (Math.random() > 0.7) {
        status = "occupied";
      }

      seats.push({
        id: `${row}${i}`,
        row,
        number: i,
        status,
      });
    }
  });

  return seats;
};

export function CinemaSeatSelection() {
  const [seats, setSeats] = useState(generateSeats());
  const selectedCount = seats.filter((s) => s.status === "selected").length;

  const handleSeatClick = (seatId: string) => {
    setSeats(
      seats.map((seat) => {
        if (seat.id === seatId && seat.status !== "occupied") {
          return {
            ...seat,
            status: seat.status === "selected" ? (seat.row === "A" || seat.row === "B" ? "vip" : "available") : "selected",
          };
        }
        return seat;
      })
    );
  };

  const getSeatColor = (status: SeatStatus) => {
    switch (status) {
      case "selected":
        return "bg-[#DC143C] border-[#DC143C]";
      case "vip":
        return "bg-gradient-to-br from-yellow-400 to-amber-500 border-yellow-500";
      case "occupied":
        return "bg-slate-300 border-slate-400 cursor-not-allowed";
      default:
        return "bg-slate-100 border-slate-300 hover:bg-slate-200";
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1920px] mx-auto p-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/movies" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </Link>
          <h1 className="text-5xl text-white" style={{ fontWeight: 800 }}>
            Select Your Seats
          </h1>
          <div className="w-24" />
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-100 border-2 border-slate-300 rounded" />
            <span className="text-slate-300 text-sm">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#DC143C] border-2 border-[#DC143C] rounded" />
            <span className="text-slate-300 text-sm">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 border-2 border-yellow-500 rounded" />
            <span className="text-slate-300 text-sm flex items-center gap-1">
              <Crown size={14} />
              VIP
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-300 border-2 border-slate-400 rounded" />
            <span className="text-slate-300 text-sm">Occupied</span>
          </div>
        </div>

        {/* Screen */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="h-2 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full mb-4" />
            <div className="text-center text-slate-400 text-sm">SCREEN</div>
          </div>
        </div>

        {/* Seats Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map((row) => (
              <motion.div
                key={row}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: row.charCodeAt(0) * 0.05 }}
                className="flex items-center justify-center gap-2"
              >
                <div className="w-8 text-slate-400 text-sm font-medium">{row}</div>
                <div className="flex gap-2">
                  {seats
                    .filter((s) => s.row === row)
                    .map((seat) => (
                      <button
                        key={seat.id}
                        onClick={() => handleSeatClick(seat.id)}
                        disabled={seat.status === "occupied"}
                        className={`w-10 h-10 border-2 rounded-lg transition-all duration-200 ${getSeatColor(
                          seat.status
                        )} ${seat.status === "selected" ? "scale-110" : ""}`}
                        title={`${seat.row}${seat.number}`}
                      >
                        {seat.status === "vip" && <Crown size={14} className="mx-auto text-white" />}
                      </button>
                    ))}
                </div>
                <div className="w-8 text-slate-400 text-sm font-medium text-right">{row}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-[30px] border-t border-white/20 p-8">
          <div className="max-w-[1920px] mx-auto flex items-center justify-between">
            <div className="text-white">
              <div className="text-sm text-slate-300 mb-1">Selected Seats</div>
              <div className="text-3xl" style={{ fontWeight: 700 }}>
                {selectedCount} {selectedCount === 1 ? "Seat" : "Seats"}
              </div>
            </div>

            <Link
              to="/upsell"
              className={`px-12 py-4 bg-gradient-to-r from-[#DC143C] to-rose-600 text-white rounded-full text-lg transition-all duration-300 ${
                selectedCount > 0 ? "hover:shadow-lg" : "opacity-50 pointer-events-none"
              }`}
              style={{ fontWeight: 600 }}
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
