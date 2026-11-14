import { useEffect, useState } from "react";

/* Tiny hash router: returns the current location.hash without the leading "#". */
export default function useHashRoute() {
  const [hash, setHash] = useState(() => location.hash.slice(1));

  useEffect(() => {
    const onChange = () => setHash(location.hash.slice(1));
    addEventListener("hashchange", onChange);
    return () => removeEventListener("hashchange", onChange);
  }, []);

  return hash;
}
