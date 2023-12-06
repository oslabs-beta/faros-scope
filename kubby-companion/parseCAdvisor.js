const data = `
# HELP cadvisor_version_info A metric with a constant '1' value labeled by kernel version, OS version, docker version, cadvisor version & cadvisor revision.
# TYPE cadvisor_version_info gauge
cadvisor_version_info{cadvisorRevision="",cadvisorVersion="",dockerVersion="",kernelVersion="5.15.109+",osVersion="Container-Optimized OS from Google"} 1
`;

const axios = require("axios");

function parsePrometheusData(data) {
  // Regular expression to parse the metric line
  const metricRegex = /^(.+)\{(.+)\}\s+(\d+)$/;

  // Split data into lines and filter out empty lines and comments
  const lines = data
    .split("\n")
    .filter((line) => line && !line.startsWith("#"));

  return lines
    .map((line) => {
      const match = line.match(metricRegex);
      if (match) {
        const [, metricName, labelString, metricValue] = match;

        // Parse labels
        const labels = {};
        labelString.split(",").forEach((labelPart) => {
          const [key, value] = labelPart.split("=");
          labels[key.trim()] = value.trim().replace(/(^"|"$)/g, ""); // Remove surrounding quotes
        });

        return { metricName, labels, metricValue };
      }
      return null;
    })
    .filter(Boolean); // Filter out any nulls (in case of non-matching lines)
}

const fetchCAdvisor = async (nodeName) => {
  const url = `http://localhost:8001/api/v1/nodes/${nodeName}/proxy/metrics/cadvisor`;
  const response = await axios(url);
  const { data } = response;
  const parsed = parsePrometheusData(data);
  console.log(parsed);
};

fetchCAdvisor("gke-edwins-cluster-default-pool-6348e1c8-109b");
// const parsedMetrics = parsePrometheusData(data);
// console.log(parsedMetrics);
