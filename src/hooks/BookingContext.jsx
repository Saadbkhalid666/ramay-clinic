import { createContext, useCallback, useContext, useState } from "react";

const BookingContext = createContext({ openBooking: () => {}, request: null });

/* Any component can call openBooking({ doc: index }) or openBooking({ dept: "Medicine" }) */
export function BookingProvider({ children }) {
  const [request, setRequest] = useState(null);

  const openBooking = useCallback(
    (opts = {}) => setRequest({ ...opts, stamp: Date.now() }),
    [],
  );

  return (
    <BookingContext.Provider value={{ openBooking, request }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
