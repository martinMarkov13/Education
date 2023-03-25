function roadRadar(speed, area) {
  let limit = 0;
  let difference = 0;
  let status = "";
  if (area == "motorway") {
    limit = 130;
  } else if (area == "interstate") {
    limit = 90;
  } else if (area == "city") {
    limit = 50;
  } else if (area == "residential") {
    limit = 20;
  }
  
  if (speed <= limit) {
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  } else {
    difference = speed - limit;
    if (difference > 40) {
      status = "reckless driving"
    } else if (difference > 20) {
      status = "excessive speeding"
    } else {
      status = "speeding"
    }
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
  }
}
roadRadar(40, "city");
