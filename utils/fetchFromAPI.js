const fetchFromAPI = async (url, token) => {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
  
    return response.json();
  };
  
  module.exports = fetchFromAPI;