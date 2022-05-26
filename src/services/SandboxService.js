import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SandboxService {
  async get() {
    const res = await api.get('api/gifts')
    logger.log(res.data)
    AppState.gifts = res.data
  }
  async openGift(id) {
    const res = await api.put('api/gifts/' + id, { opened: true })
    logger.log(res.data)
    const index = AppState.gifts.findIndex(g => g._id == id)
    AppState.gifts[index] = res.data
  }

  async create(data) {
    const res = await api.post('api/gifts', data)
    logger.log(res.data)
    AppState.gifts.unshift(res.data)
  }
}

export const sandboxService = new SandboxService()