export function useApi() {
  const key = process.env.VUE_APP_METOFFICE_API_KEY;
  const base = "http://datapoint.metoffice.gov.uk/public/data/";

  function get(path) {
    const options = {
      method: "GET",
      // TODO: Other options dependant on API
    };

    const url = base + path + "&key=" + key;
    return request(url, options);
  }

  function post(path, data) {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    };

    const url = base + path + "&key=" + key;
    return request(url, options);
  }

  async function request(url, options) {
    const response = await fetch(url, options);
    return response.json();
  }

  return { get, post };
}
