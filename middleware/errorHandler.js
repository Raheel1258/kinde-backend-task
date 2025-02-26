const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.message || "An error occurred");
    res.status(500).json({ error: err.message || "Internal server error" });
  };
  
  module.exports = errorHandler;
  