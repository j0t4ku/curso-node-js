import { createApp } from './app'

import { MovieModels } from './models/mysql/movie'

createApp({ movieModel: MovieModels })
