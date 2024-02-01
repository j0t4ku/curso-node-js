import { createApp } from './app'

import { MovieModels } from './models/local-file-system/movies'

createApp({ movieModel: MovieModels })
