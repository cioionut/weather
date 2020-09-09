import fs from 'fs'
import path from 'path'
import { parseFile } from '@fast-csv/parse'
import { Stream } from 'stream'

function streamToString(stream: Stream) {
    const chunks = []
    return new Promise((resolve, reject) => {
      stream.on('data', chunk => chunks.push(chunk))
      stream.on('error', reject)
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    })
  }

const locationsFilePath = path.join(process.cwd(), 'locations', 'orase.csv')

export function getLocationsData(first=10) {
    // const fileContents = fs.readFileSync(locationsFilePath, 'utf8')
    let locations = []
    return new Promise((resolve, reject) => {
        parseFile(locationsFilePath)
        .on('error', reject)
        .on('data', row => {
            // skip column names
            if (row[0] == 'X') return
            // return first locations
            if (locations.length > first ) return resolve(locations)
            else
                locations.push(
                    {
                        'id': locations.length,
                        'lat': row[0],
                        'lon': row[1],
                        'name': row[2],
                        'county': row[3],
                        // 'countyAutoAbr': row[4],
                        // 'population': row[5],
                        'region': row[6]
                    }
                )
        })
        .on('end', () => resolve(locations));
    })
}