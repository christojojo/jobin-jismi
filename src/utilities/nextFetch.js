export const nextFetch = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Fetch failed with status ${response.status}: ${response.statusText}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error in nextFetch:", error);
    return null;
  }
};
