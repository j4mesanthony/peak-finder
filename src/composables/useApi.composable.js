export function useApi() {
  const base = "http://localhost/";

  function get(path) {
    console.warn("fetch GET: ", base + path);
  }

  return { get };
}
