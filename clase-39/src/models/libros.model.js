class Libro {
  static findAll() {
    return libros;
  }

  static findById(id) {
    if (!id || isNaN(id)) throw new Error("Debes pasar un ID valido");

    return libros[id];
  }

  static create(data) {
    const datosFaltantes = [];

    const { titulo, autor, anio } = data;

    if (!titulo) datosFaltantes.push("titulo");
    if (!autor) datosFaltantes.push("autor");
    if (!anio) datosFaltantes.push("anio");

    if (datosFaltantes.length !== 0) {
      throw new Error(`Faltan los campos: ${datosFaltantes.join(", ")}`);
    }

    libros.push(data);
  }

  static update(data, id) {
    if (!id || isNaN(id)) throw new Error("Debes pasar un ID valido");

    const datosFaltantes = [];

    const { titulo, autor, anio } = data;

    if (!titulo) datosFaltantes.push("titulo");
    if (!autor) datosFaltantes.push("autor");
    if (!anio) datosFaltantes.push("anio");
    if (!id) datosFaltantes.push("id");

    if (datosFaltantes.length !== 0) {
      throw new Error(`Faltan los campos: ${datosFaltantes.join(", ")}`);
    }

    libros[id] = data;
  }

  static delete(id) {
    if (!id || isNaN(id)) throw new Error("Debes pasar un ID valido");

    libros.splice(id, 1);
  }
}

const libros = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
  },
  { titulo: "1984", autor: "George Orwell", anio: 1949 },
  { titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", anio: 1954 },
  { titulo: "Fahrenheit 451", autor: "Ray Bradbury", anio: 1953 },
  {
    titulo: "Crónica de una muerte anunciada",
    autor: "Gabriel García Márquez",
    anio: 1981,
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    anio: 1605,
  },
  { titulo: "Orgullo y prejuicio", autor: "Jane Austen", anio: 1813 },
  { titulo: "La metamorfosis", autor: "Franz Kafka", anio: 1915 },
  { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: 1943 },
  { titulo: "Rayuela", autor: "Julio Cortázar", anio: 1963 },
];

module.exports = Libro;
