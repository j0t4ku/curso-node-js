import mysql from 'mysql2/promise'

const DEFAULT_CONFIG = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'moviesdb'
}

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

const connection = await mysql.createConnection(connectionString)

export class MovieModels {
  static async getAll({ genre }) {
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase()

      const [genres] = await connection.query('SELECT id,name FROM genre WHERE LOWER(name)=?;', [lowerCaseGenre])

      if (genres.length === 0) return []

      const [{ id }] = genres

      // get all movies ids from database table
      // la query a movies_genres
      // join
      // y devolver el resultado
      return []
    }

    const [movies] = await connection.query(
      'SELECT BIN_TO_UUID(id) id,title, YEAR, director,duration,poster, rate FROM movie;'
    )
    return movies
  }

  static async getId({ id }) {
    const [movie] = await connection.query(
      `SELECT BIN_TO_UUID(id) id,title, YEAR, director,duration,poster, rate 
      FROM movie WHERE id= UUID_TO_BIN(?);`, [id]
    )
    if (movie.length === 0) return null
    return movie
  }

  static async create({ input }) {
    const {
      genre = genreInput, // Is an array
      title,
      year,
      duration,
      director,
      poster,
      rate
    } = input

    // Crear conexion a genre

    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult
    try {
      await connection.query(`
        INSERT INTO movie (id,title,year,director,duration,poster,rate)
        VALUES (UUID_TO_BIN(?),?,?,?,?,?,?)
      `, [uuid, title, year, director, duration, poster, rate])
    } catch (error) {
      throw new Error('Error creatin movie') // realizar una traza del error y no mandarlo al usuario
    }

    const [movieResutl] = await connection.query(`
      SELECT title,year,director,duration,poster,rate,BIN_TO_UUID(id) id 
      FROM movie WHERE id= UUID_TO_BIN(?)
    `, [uuid])
    return movieResutl[0]
  }

  static async delete({ id }) {
    // ejercicio
  }

  static async update({ id, input }) {
    // Ejercicio
  }
}
