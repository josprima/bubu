import { useEffect, useState } from 'react';

const svgPlaceHolder = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
  </svg>
`;

const useGetSvg = (iconUrl) => {
  const [svg, setSvg] = useState(svgPlaceHolder);

  const fetchSvg = async () => {
    try {
      const response = await fetch(iconUrl);

      const svgData = await response.text();

      setSvg(svgData);
    } catch (error) {
      //
    }
  };

  useEffect(() => {
    fetchSvg();
  }, []);

  return svg;
};

export default useGetSvg;
