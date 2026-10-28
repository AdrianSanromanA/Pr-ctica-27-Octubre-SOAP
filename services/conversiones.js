export const conversionesService = {
    ConversionesService: {
        ConversionesPort: {
            CelsiusAFahrenheit: function(args) {
                const celsius = parseFloat(args.celsius);
                const fahrenheit = (celsius * 9/5) + 32;
                return { resultado: fahrenheit };
            },
            KilometrosAMillas: function(args) {
                const km = parseFloat(args.kilometros);
                const millas = km * 0.621371;
                return { resultado: millas };
            }
        }
    }
};