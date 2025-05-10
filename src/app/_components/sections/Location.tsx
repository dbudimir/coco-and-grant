"use client";

import PhotoHeader from "../PhotoHeader";
import { useSearchParams } from "next/navigation";

const Location: React.FC = () => {
  const searchParams = useSearchParams();
  const isJPMode = searchParams.get("mode") === "jp";

  return (
    <PhotoHeader
      title1="Hillsdale,"
      title2={isJPMode ? "S.T.Y." : "N.Y."}
      images={["/static-assets/hillsdale-1.JPG"]}
    />
  );
};

export default Location;
