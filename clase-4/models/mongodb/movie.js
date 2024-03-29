import { readJSON } from '../../utils/utils.js'
import { randomUUID } from 'node:crypto'

const movies = readJSON('../movies.json')

export class MovieModels {
  static async getAll({ genre }) {
    if (genre) {
      return movies.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()))
    }
    return movies
  }

  static async getId({ id }) {
    const movie = movies.find(movie => movie.id === id)
    return movie
  }

  static async create({ input }) {
    const newMovie = {
      id: randomUUID,
      ...input
    }

    movies.push(newMovie)
    return newMovie
  }

  static async delete({ id }) {
    const moviesIndex = movies.findIndex(movie => movie.id === id)
    if (moviesIndex === -1) return false
    movies.splice(moviesIndex, 1)
    return true
  }

  static async update({ id, input }) {
    const moviesIndex = movies.findIndex(movie => movie.id === id)

    if (moviesIndex < 0) return false

    const updateMovie = {
      ...movies[moviesIndex],
      ...input
    }
    movies[moviesIndex] = updateMovie
    return true
  }
}
