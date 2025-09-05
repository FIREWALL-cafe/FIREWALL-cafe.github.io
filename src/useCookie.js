import { useState, useEffect, useCallback } from 'react';

const COOKIE_UPDATE_EVENT = 'cookieUpdate';

const useCookie = cookieName => {
  const [cookieValue, setCookieValue] = useState('');

  const getCookieValue = useCallback(() => {
    const cookie = document.cookie.split('; ').find(row => row.startsWith(`${cookieName}=`));
    return cookie ? cookie.split('=')[1] : '';
  }, [cookieName]);

  useEffect(() => {
    setCookieValue(getCookieValue());

    const handleCookieUpdate = event => {
      if (event.detail.cookieName === cookieName) {
        setCookieValue(event.detail.value);
      }
    };

    window.addEventListener(COOKIE_UPDATE_EVENT, handleCookieUpdate);
    return () => window.removeEventListener(COOKIE_UPDATE_EVENT, handleCookieUpdate);
  }, [cookieName, getCookieValue]);

  const setCookie = (value, expirationDate) => {
    document.cookie = `${cookieName}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    window.dispatchEvent(
      new CustomEvent(COOKIE_UPDATE_EVENT, {
        detail: { cookieName, value },
      })
    );
  };

  const deleteCookie = () => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    window.dispatchEvent(
      new CustomEvent(COOKIE_UPDATE_EVENT, {
        detail: { cookieName, value: '' },
      })
    );
  };

  return [cookieValue, setCookie, deleteCookie];
};

export default useCookie;
