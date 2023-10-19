const places = [
    "Usa",
    "India",
    "Canada",
    "Turkey",
    "Australia"
  ];
  console.log("Original order:", places);  
  const sortedAlphabetical = [...places].sort();
  console.log("Alphabetical order:", sortedAlphabetical);
  console.log("Original order:", places);
  const sortedReverseAlphabetical = [...places].sort().reverse();
  console.log("Reverse alphabetical order:", sortedReverseAlphabetical);
  console.log("Original order:", places);
  places.reverse();
  console.log("Reversed order:", places);
  places.reverse();
  console.log("Back to original order:", places);
  places.sort();
  console.log("Alphabetical order:", places);
  places.sort().reverse();
  console.log("Reverse alphabetical order:", places);
  