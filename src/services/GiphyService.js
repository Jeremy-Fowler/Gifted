import { AppState } from "../AppState"
import { Giphy } from "../Models/Giphy"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { giphyApi } from "./AxiosService"

let params = {
  api_key: '2oUH81wd4o03OHd1uxmkNxTX7x8L2bJ7',
  rating: 'g',
  q: '',
  limit: 10
}

class GiphyService {
  async search(query) {
    AppState.giphys = []
    params.offset = AppState.offset
    params.q = query
    const res = await giphyApi.get('search', { params })
    logger.log(res.data)
    AppState.giphys = res.data.data.map(g => new Giphy(g))
    return res.data.pagination.total_count
  }
}

export const giphyService = new GiphyService()