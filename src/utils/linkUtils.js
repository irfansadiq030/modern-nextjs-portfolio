// Utility function to determine the active link class
export const getLinkClass = (path, currentPath) => {
  return currentPath === path ? "text-secondary" : "text-white";
};

