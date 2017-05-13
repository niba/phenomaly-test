const bytesInkB = 1000;
const bytesInMB = bytesInkB * 1000;

export function convertBytesToSize(bytes, decimals = 1) {
  if (bytes >= bytesInMB) {
    return `${(bytes / bytesInMB).toFixed(decimals)}MB`;
  }
  return `${(bytes / bytesInkB).toFixed(decimals)}kB`;
}