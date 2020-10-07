import proj4 from 'proj4'

import codes from './codes'

Object.entries(codes).forEach(([code, def]) => proj4.defs(`EPSG:${code}`, def))
export default proj4
