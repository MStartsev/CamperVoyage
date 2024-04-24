export function FilterData(data) {
  // Оголошуємо змінні для зберігання унікальних ключів з "details",
  // списку міст з "location" та унікальних значень "form".
  let uniqueDetailKeys = new Set();
  let uniqueLocations = new Set();
  let uniqueForms = new Set();

  // Проходимося по кожному елементу у JSON-масиві.
  for (let vehicle of data) {
    // Додаємо унікальні ключі з "details".
    for (let key in vehicle.details) {
      uniqueDetailKeys.add(key);
    }
    // Розділяємо значення "location" та видаляємо "Ukraine, ".
    const locationParts = vehicle.location.split(', ');
    const city = locationParts[1];
    uniqueLocations.add(city);
    // Додаємо форму унікальних значень "form".
    uniqueForms.add(vehicle.form);
  }

  const sortArr = set => Array.from(set).sort((a, b) => a - b);

  // Перетворюємо множини у масиви та сортуємо у відповідності до вимог.
  uniqueDetailKeys = sortArr(uniqueDetailKeys);
  uniqueLocations = sortArr(uniqueLocations);
  uniqueForms = sortArr(uniqueForms);

  // Повертаємо результат у вигляді об'єкта.
  return {
    details: uniqueDetailKeys,
    location: uniqueLocations,
    form: uniqueForms,
  };
}
