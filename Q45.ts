
function createCar(manufacturer: string, modelName: string, ...options: Record<string, any>[]) {
    const carObject: Record<string, any> = {
      manufacturer,
      modelName,
    };
    options.forEach((option) => {
      const key = Object.keys(option)[0];
      carObject[key] = option[key];
    });
    return carObject;
  }
  const carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { optionalFeature: "Sunroof" });
  console.log(carInfo);
  export{}
  