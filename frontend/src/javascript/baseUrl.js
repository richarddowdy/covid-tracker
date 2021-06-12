let BASE_API;

process.env.NODE_ENV === "production"
  ? (BASE_API = `${window.location.origin}/api`)
  : (BASE_API = "http://localhost:3001/api/");

export { BASE_API };
