import { useState, useEffect } from "react";

// Create a custom event name for cookie updates
const COOKIE_UPDATE_EVENT = 'cookieUpdate';

const useCookie = (cookieName) => {
  const [cookieValue, setCookieValue] = useState("");

  // Function to get cookie value
  const getCookieValue = () => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${cookieName}=`));
    return cookie ? cookie.split("=")[1] : "";
  };

  // Initial cookie value and event listener setup
  useEffect(() => {
    setCookieValue(getCookieValue());

    // Listen for cookie updates
    const handleCookieUpdate = (event) => {
      if (event.detail.cookieName === cookieName) {
        setCookieValue(event.detail.value);
      }
    };

    window.addEventListener(COOKIE_UPDATE_EVENT, handleCookieUpdate);
    return () => window.removeEventListener(COOKIE_UPDATE_EVENT, handleCookieUpdate);
  }, [cookieName]);

  const setCookie = (value, expirationDate) => {
    document.cookie = `${cookieName}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent(COOKIE_UPDATE_EVENT, {
      detail: { cookieName, value }
    }));
  };

  const deleteCookie = () => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent(COOKIE_UPDATE_EVENT, {
      detail: { cookieName, value: "" }
    }));
  };

  return [cookieValue, setCookie, deleteCookie];
};

export default useCookie;