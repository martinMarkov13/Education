function reception(input) {
  let totalStudentsPerHour = 0;
  let StudentsCount = Number(input[3]);
  let hoursCounter = 0;
  for (let i = 0; i < input.length - 1; i++) {
    totalStudentsPerHour += Number(input[i]);
  }

  while (StudentsCount > 0) {
    hoursCounter++;
    if (hoursCounter % 4 === 0) {
      hoursCounter += 1;
    }
    StudentsCount -= totalStudentsPerHour;
  }
  console.log(`Time needed: ${hoursCounter}h.`);
}
reception(["1", "1", "1", "18"]);
