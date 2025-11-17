import React from "react";

interface BadgeProps {
  variant: "verified" | "premium";
}

export const Badge: React.FC<BadgeProps> = ({ variant }) => {
  const styles = {
    verified: "bg-green-100 text-green-800 px-2 py-1 rounded text-xs",
    premium: "bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs",
  };
  return <span className={styles[variant]}>{variant}</span>;
};
