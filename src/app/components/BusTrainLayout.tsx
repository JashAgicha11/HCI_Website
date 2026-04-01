import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Armchair, DoorOpen } from "lucide-react";
import { motion } from "motion/react";

type SeatType = "window" | "aisle" | "empty" | "washroom" | "driver" | "selected" | "occupied";

interface BusSeat {
  id: string;
  type: SeatType;
  position: { row: number; col: number };
}

const generateBusLayout = (): BusSeat[] => {
  const seats: BusSeat[] = [];
  const rows = 12;
  const cols = 4;

  // Driver seat
  seats.push({
    id: "driver",
    type: "driver",
    position: { row: 0, col: 0 },
  });

  // Washroom
  seats.push({
    id: "washroom",
    type: "washroom",
    position: { row: rows - 1, col: cols - 1 },
  });

  // Regular seats
  for (let row = 1; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Skip washroom position
      if (row === rows - 1 && col === cols - 1) continue;

      // Aisle in the middle
      if (col === 2) {
        seats.push({
          id: `empty-${row}-${col}`,
          type: "empty",
          position: { row, col },
        });
        continue;
      }

      const seatType: SeatType = Math.random() > 0.75 ? "occupied" : col === 0 || col === 3 ? "window" : "aisle";

      seats.push({
        id: `seat-${row}-${col}`,
        type: seatType,
        position: { row, col },
      });
    }
  }

  return seats;
};

export function BusTrainLayout() {
  const [seats, setSeats] = useState(generateBusLayout());
  const selectedCount = seats.filter((s) => s.type === "selected").length;

  const handleSeatClick = (seatId: string) => {
    setSeats(
      seats.map((seat) => {
        if (seat.id === seatId && seat.type !== "occupied" && seat.type !== "driver" && seat.type !== "washroom" && seat.type !== "empty") {
          return {
            ...seat,
            type: seat.type === "selected" ? "window" : "selected",
          };
        }
        return seat;
      })
    );
  };

  const getSeatElement = (seat: BusSeat) => {
    const baseClass = "w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-200";

    switch (seat.type) {
      case "driver":
        return (
          <div className={`${baseClass} bg-slate-700 border-2 border-slate-600`}>
            <div className="text-2xl">🚗</div>
          </div>
        );
      case "washroom":
        return (
          <div className={`${baseClass} bg-blue-100 border-2 border-blue-300`}>
            <DoorOpen size={24} className="text-blue-600" />
          </div>
        );
      case "empty":
        return <div className="w-16 h-16" />;
      case "selected":
        return (
          <button
            onClick={() => handleSeatClick(seat.id)}
            className={`${baseClass} bg-[#007FFF] border-2 border-[#007FFF] scale-110 cursor-pointer`}
          >
            <Armchair size={24} className="text-white" />
          </button>
        );
      case "occupied":
        return (
          <div className={`${baseClass} bg-slate-300 border-2 border-slate-400 cursor-not-allowed`}>
            <Armchair size={24} className="text-slate-500" />
          </div>
        );
      default:
        const isWindow = seat.type === "window";
        return (
          <button
            onClick={() => handleSeatClick(seat.id)}
            className={`${baseClass} bg-slate-100 border-2 border-slate-300 hover:bg-slate-200 cursor-pointer relative`}
          >
            <Armchair size={24} className="text-slate-600" />
            {isWindow && (
              <div className="absolute -right-1 -top-1 w-3 h-3 bg-sky-400 rounded-full border border-white" />
            )}
          </button>
        );
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#070d1f] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1920px] mx-auto p-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/travel" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to SpotNest</span>
          </Link>
          <h1 className="text-5xl" style={{ fontWeight: 800 }}>
            SpotNest Coach Layout
          </h1>
          <div className="w-24" />
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-100 border-2 border-slate-300 rounded-xl flex items-center justify-center">
              <Armchair size={16} className="text-slate-600" />
            </div>
            <span className="text-sm text-slate-200">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#007FFF] border-2 border-[#007FFF] rounded-xl flex items-center justify-center">
              <Armchair size={16} className="text-white" />
            </div>
            <span className="text-sm text-slate-200">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-100 border-2 border-slate-300 rounded-xl flex items-center justify-center relative">
              <Armchair size={16} className="text-slate-600" />
              <div className="absolute -right-0.5 -top-0.5 w-2 h-2 bg-sky-400 rounded-full" />
            </div>
            <span className="text-sm text-slate-200">Window</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-300 border-2 border-slate-400 rounded-xl flex items-center justify-center">
              <Armchair size={16} className="text-slate-500" />
            </div>
            <span className="text-sm text-slate-200">Occupied</span>
          </div>
        </div>

        {/* Bus Layout */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 shadow-2xl">
            {/* Bus Direction Indicator */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#007FFF] text-white rounded-full text-sm" style={{ fontWeight: 600 }}>
                <span>Front of Bus</span>
                <span className="text-xl">→</span>
              </div>
            </div>

            <div className="space-y-3">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((row) => (
                <motion.div
                  key={row}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: row * 0.05 }}
                  className="flex justify-center gap-3"
                >
                  {[0, 1, 2, 3].map((col) => {
                    const seat = seats.find((s) => s.position.row === row && s.position.col === col);
                    return seat ? (
                      <div key={`${row}-${col}`}>{getSeatElement(seat)}</div>
                    ) : (
                      <div key={`${row}-${col}`} className="w-16 h-16" />
                    );
                  })}
                </motion.div>
              ))}
            </div>

            {/* Bus Info */}
            <div className="mt-8 text-center text-sm text-slate-300">
              Luxury Sleeper Bus • 45 Seats • AC • WiFi
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#070d1f]/90 backdrop-blur-xl border-t border-white/10 p-8">
          <div className="max-w-[1920px] mx-auto flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-300 mb-1">Selected Seats</div>
              <div className="text-3xl" style={{ fontWeight: 700 }}>
                {selectedCount} {selectedCount === 1 ? "Seat" : "Seats"}
              </div>
            </div>

            <Link
              to="/upsell"
              className={`px-12 py-4 bg-gradient-to-r from-[#007FFF] to-sky-600 text-white rounded-full text-lg transition-all duration-300 ${
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
