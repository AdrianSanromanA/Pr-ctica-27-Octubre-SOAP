export const geometriaService = {
    GeometriaService: {
        GeometriaPort: {
            AreaRectangulo: function(args) {
                const base = parseFloat(args.base);
                const altura = parseFloat(args.altura);
                const area = base * altura;
                return { resultado: area };
            },
            PerimetroRectangulo: function(args) {
                const base = parseFloat(args.base);
                const altura = parseFloat(args.altura);
                const perimetro = 2 * (base + altura);
                return { resultado: perimetro };
            }
        }
    }
};