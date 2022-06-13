var convert = require("convert-units");

module.exports = {
  formulate: (message) => {
    const units = {
      mm: "millimeter|millimeters|mm",
      cm: "centimeter|centimeters|cm",
      m: "meter|meters|m",
      in: "inch|inches|in",
      ft: "feet|foot|ft",
      mi: "mile|miles|mi",
      mcg: "microgram|micrograms|mcg",
      mg: "milligram|milligrams|mg",
      g: "gram|grams|g",
      kg: "kilogram|kilograms|kg",
      oz: "ounce|ounces|oz",
      lb: "pound|pounds|lb",
      mt: "megatonne|megatonnes|mt",
      t: "ton|tons|t",
      ml: "milliliter|milliliters|ml",
      l: "liter|liters|l",
      tsp: "teaspoon|teaspoons|tsp",
      tbs: "tablespoon|tablespoons|tbs",
      "fl-oz": "fluid ounce|fluid ounces|fl-oz",
      cup: "cup|cups|cup",
      pnt: "pint|pints|pnt",
      qt: "quart|quarts|qt",
      gal: "gallon|gallons|gal",
    };

    let hasUnitsOfConversion = false;

    Object.keys(units).map((i) => {
      const AbbrUnitRegEx = new RegExp(`[0-9](.*)${i}`, "g");
      const FullPluralUnitRegEx = new RegExp(`[0-9](.*)${units[i]}s`, "g");
      const FullSingularUnitRegEx = new RegExp(`[0-9](.*)${units[i]}`, "g");
      if (
        message.match(AbbrUnitRegEx) !== null ||
        message.match(FullSingularUnitRegEx) !== null ||
        message.match(FullPluralUnitRegEx) !== null
      ) {
        hasUnitsOfConversion = true;
      }
    });

    if (!hasUnitsOfConversion) {
      return false;
    }

    // Standardize the questions
    message = message.replace(/what's/g, "convert");
    message = message.replace(/whats/g, "convert");
    message = message.replace(/what is/g, "convert");
    message = message.replace(/ in /g, " to ");
    message = message.replace(/ into /g, " to ");

    if (message.indexOf("artoo") === -1 || message.indexOf("convert") === -1) {
      return false;
    }

    const value = parseInt(message.replace(/(.*)convert(.*)to(.*)/, "$2"));
    let fromUnit = message
      .replace(/(.*)convert(.*)to(.*)/, "$2")
      .replace(/[0-9]/g, "")
      .trim();
    let toUnit = message
      .replace(/(.*)to(.*)/, "$2")
      .trim()
      .split(" ")[0];
    Object.keys(units).map((i) => {
      if (units[i].indexOf(fromUnit) !== -1 && !units[fromUnit]) {
        fromUnit = i;

        return false;
      }
      return false;
    });

    Object.keys(units).map((i) => {
      if (units[i].indexOf(toUnit) !== -1 && !units[toUnit]) {
        toUnit = i;

        return false;
      }
      return false;
    });

    let results = false;
    try {
      results = `That would be: **${convert(value)
        .from(fromUnit)
        .to(toUnit)
        .toFixed(2)}${toUnit}**`;
    } catch (error) {
      results = "That would be impossible..";
    }

    return results;
  },
};
