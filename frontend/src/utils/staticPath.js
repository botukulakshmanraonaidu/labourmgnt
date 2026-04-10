export function staticPath(input) {
  if (!input) return "";
  const trimmed = input.trim();
  const matchSingle = trimmed.match(/static\s+'([^']+)'/i);
  if (matchSingle) return normalize(`/static/${matchSingle[1]}`);
  const matchDouble = trimmed.match(/static\s+"([^"]+)"/i);
  if (matchDouble) return normalize(`/static/${matchDouble[1]}`);
  if (trimmed.startsWith("/static/")) return normalize(trimmed);
  if (trimmed.startsWith("static/")) return normalize(`/${trimmed}`);
  return normalize(trimmed);
}

function normalize(path) {
  const fixes = {
    "/static/images/services/Carpenter.png": "/static/images/services/carpenter.png",
    "/static/images/services/AC_Technician.png": "/static/images/services/AC_Technician.png",
    "/static/images/services/Security_Guard.png": "/static/images/services/Security_Guard.png",
    "/static/images/services/Gardener.png": "/static/images/services/Gardener.png",
    "/static/images/services/CCTV_Technician.png": "/static/images/services/CCTV_Technician.png",
    "/static/images/services/Solar_Panel_Technician.png": "/static/images/services/Solar_Panel_Technician.png",
    "/static/images/services/Constructor_Helper.png": "/static/images/services/Constructor_Helper.png",
    "/static/images/services/BabySitter.png": "/static/images/services/BabySitter.png",
    "/static/images/services/Elder_Care_Assistant.png": "/static/images/services/Elder_Care_Assistant.png",
    "/static/images/services/Agricultural_Worker.png": "/static/images/services/Agricultural_Worker.png",
    "/static/images/services/Pest_Control_Worker.png": "/static/images/services/Pest_Control_Worker.png"
  };
  return fixes[path] || path;
}