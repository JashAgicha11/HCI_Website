import { createBrowserRouter } from "react-router";
import { MainDashboard } from "./components/MainDashboard";
import { MovieDiscovery } from "./components/MovieDiscovery";
import { TravelSearchResults } from "./components/TravelSearchResults";
import { CinemaSeatSelection } from "./components/CinemaSeatSelection";
import { BusTrainLayout } from "./components/BusTrainLayout";
import { UpsellAddons } from "./components/UpsellAddons";
import { ShoppingCart } from "./components/ShoppingCart";
import { SecurePayment } from "./components/SecurePayment";
import { ConfirmationDashboard } from "./components/ConfirmationDashboard";
import { ShowcaseGrid } from "./components/ShowcaseGrid";

import { UserProfile } from "./components/UserProfile";
import { BookingHistory } from "./components/BookingHistory";
import { HelpSupport } from "./components/HelpSupport";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ShowcaseGrid,
  },
  {
    path: "/dashboard",
    Component: MainDashboard,
  },
  {
    path: "/movies",
    Component: MovieDiscovery,
  },
  {
    path: "/travel",
    Component: TravelSearchResults,
  },
  {
    path: "/cinema-seats",
    Component: CinemaSeatSelection,
  },
  {
    path: "/bus-train",
    Component: BusTrainLayout,
  },
  {
    path: "/upsell",
    Component: UpsellAddons,
  },
  {
    path: "/cart",
    Component: ShoppingCart,
  },
  {
    path: "/payment",
    Component: SecurePayment,
  },
  {
    path: "/confirmation",
    Component: ConfirmationDashboard,
  },

  {
    path: "/profile",
    Component: UserProfile,
  },
  {
    path: "/bookings",
    Component: BookingHistory,
  },
  {
    path: "/help",
    Component: HelpSupport,
  },
]);
