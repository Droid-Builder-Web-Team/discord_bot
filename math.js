var convert = require('convert-units');


module.exports =  {
    formulate: (message) => {
        const units = {
            'mm': 'millimeter|millimeters', 
            'cm': 'centimeter|centimeters', 
            'm': 'meter|meters', 
            'in': 'inch|inches', 
            'ft': 'feet|foot',  
            'mi': 'mile|miles',
            'mcg': 'microgram|micrograms',
            'mg': 'milligram|milligrams', 
            'g': 'gram|grams', 
            'kg': 'kilogram|kilograms', 
            'oz': 'ounce|ounces', 
            'lb': 'pound|pounds', 
            'mt': 'megatonne|megatonnes', 
            't': 'ton|tons', 
            'ml': 'milliliter|milliliters', 
            'l': 'liter|liters', 
            'tsp': 'teaspoon|teaspoons', 
            'tbs': 'tablespoon|tablespoons', 
            'fl-oz': 'fluid ounce|fluid ounces', 
            'cup': 'cup|cups', 
            'pnt': 'pint|pints', 
            'qt': 'quart|quarts', 
            'gal': 'gallon|gallons'
        };

        let hasUnitsOfConversion = false;

        Object.keys(units).map((i) => {
            const AbbrUnitRegEx = new RegExp(`[0-9](.*)${i}`, 'g');
            const FullPluralUnitRegEx = new RegExp(`[0-9](.*)${units[i]}s`, 'g');
            const FullSingularUnitRegEx = new RegExp(`[0-9](.*)${units[i]}`, 'g');
            if (message.match(AbbrUnitRegEx) !== null || message.match(FullSingularUnitRegEx) !== null || message.match(FullPluralUnitRegEx) !== null) {
                hasUnitsOfConversion = true;
            }
        });

        if (!hasUnitsOfConversion) { return false; }

        // Standardize the questions
        message = message.replace(/what's/g, 'convert');
        message = message.replace(/whats/g, 'convert');
        message = message.replace(/what is/g, 'convert');
        message = message.replace(/ in /g, ' to ');
        message = message.replace(/ into /g, ' to ');

        if (message.indexOf('artoo') === -1 || message.indexOf('convert') === -1) { return false; }

        const value = parseInt(message.replace(/(.*)convert(.*)to(.*)/, '$2'));
        let fromUnit = message.replace(/(.*)convert(.*)to(.*)/, '$2').replace(/[0-9]/g, '').trim();
        let toUnit = message.replace(/(.*)to(.*)/, '$2').trim().split(' ')[0];
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
            results = `That would be: **${convert(value).from(fromUnit).to(toUnit).toFixed(2)}${toUnit}**`;
        } catch (error) {
            results = 'That would be impossible..';
        }

        return results;
    }
};