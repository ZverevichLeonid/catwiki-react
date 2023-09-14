export async function getData() {
  const response = await fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key":
        "live_wYttEEHwc4mwESYYVWqZ4mlRFNGMji101ytMXlrOlztAP6k3KfwMEaLiMGk6iO7z",
    },
  });
  const data = await response.json();
  return data;
}
