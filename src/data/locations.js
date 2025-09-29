const locations = [
  { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { location: "London", latitude: 51.5072, longitude: -0.1276 },
  { location: "Tokyo", latitude: 35.6762, longitude: 139.6503 },
  { location: "NewYork", latitude: 40.7128, longitude: -74.006 },
  { location: "Dubai", latitude: 25.276987, longitude: 55.296249 },
  { location: "Rome", latitude: 41.9028, longitude: 12.4964 },
  { location: "Madrid", latitude: 40.4168, longitude: -3.7038 },
  { location: "Moscow", latitude: 55.7558, longitude: 37.6173 },
  { location: "Berlin", latitude: 52.52, longitude: 13.405 },
  { location: "Istanbul", latitude: 41.0082, longitude: 28.9784 },
  { location: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  { location: "Athens", latitude: 37.9838, longitude: 23.7275 },
  { location: "Bangkok", latitude: 13.7563, longitude: 100.5018 },
  { location: "Delhi", latitude: 28.7041, longitude: 77.1025 },
  { location: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  { location: "Seoul", latitude: 37.5665, longitude: 126.978 },
  { location: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  { location: "Lisbon", latitude: 38.7169, longitude: -9.139 },
  { location: "Venice", latitude: 45.4408, longitude: 12.3155 },
  { location: "Prague", latitude: 50.0755, longitude: 14.4378 },
  { location: "Vienna", latitude: 48.2082, longitude: 16.3738 },
  { location: "Zurich", latitude: 47.3769, longitude: 8.5417 },
  { location: "Warsaw", latitude: 52.2297, longitude: 21.0122 },
  { location: "Oslo", latitude: 59.9139, longitude: 10.7522 },
  { location: "Stockholm", latitude: 59.3293, longitude: 18.0686 },
  { location: "Helsinki", latitude: 60.1699, longitude: 24.9384 },
  { location: "Reykjavik", latitude: 64.1355, longitude: -21.8954 },
  { location: "Dublin", latitude: 53.3331, longitude: -6.2489 },
  { location: "Budapest", latitude: 47.4979, longitude: 19.0402 },
  { location: "Munich", latitude: 48.1351, longitude: 11.582 },
  { location: "Brussels", latitude: 50.8503, longitude: 4.3517 },
  { location: "Hamburg", latitude: 53.5511, longitude: 9.9937 },
  { location: "Copenhagen", latitude: 55.6761, longitude: 12.5683 },
  { location: "Toronto", latitude: 43.65107, longitude: -79.347015 },
  { location: "Chicago", latitude: 41.8781, longitude: -87.6298 },
  { location: "Boston", latitude: 42.3601, longitude: -71.0589 },
  { location: "Miami", latitude: 25.7617, longitude: -80.1918 },
  { location: "Havana", latitude: 23.1136, longitude: -82.3666 },
  { location: "Santiago", latitude: -33.4489, longitude: -70.6693 },
  { location: "Lima", latitude: -12.0464, longitude: -77.0428 },
  { location: "Bogota", latitude: 4.711, longitude: -74.0721 },
  { location: "Jakarta", latitude: -6.2088, longitude: 106.8456 },
  { location: "Manila", latitude: 14.5995, longitude: 120.9842 },
  { location: "Karachi", latitude: 24.8607, longitude: 67.0011 },
  { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
  { location: "Lagos", latitude: 6.5244, longitude: 3.3792 },
  { location: "Nairobi", latitude: -1.2921, longitude: 36.8219 },
  { location: "Capetown", latitude: -33.9249, longitude: 18.4241 },
  { location: "Riyadh", latitude: 24.7136, longitude: 46.6753 },
];

export const getLocations = () => {
  return locations;
};

export const getLocationByName = (locationName) => {
  const location = locations.find(
    (loc) =>
      loc.location.toLocaleUpperCase() === locationName.toLocaleUpperCase()
  );

  if (location) {
    return location;
  } else {
    return { location: "", latitude: 0, longitude: 0 };
  }
};
