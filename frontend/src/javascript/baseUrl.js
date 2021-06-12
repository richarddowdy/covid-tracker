let BASE_URL;

process.env.NODE_ENV === "production"
  ? (BASE_URL = `${window.location.origin}/api/`)
  : (BASE_URL = "http://localhost:3001/api/");

export { BASE_URL };
