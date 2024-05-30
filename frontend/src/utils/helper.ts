export function formatAddress(address: string): string {
  if (address.length <= 8) {
    return address;
  } else {
    const firstPart = address.substring(0, 5);
    const lastPart = address.substring(address.length - 5);
    return `${firstPart}...${lastPart}`;
  }
}
