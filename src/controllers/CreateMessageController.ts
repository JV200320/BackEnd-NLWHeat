import {Request, Response} from "express"
import { CreateMessageService } from "../services/CreateMessageService"


export class CreateMessageController {
  async handle (req: Request, res: Response) {
    let {message} = req.body
    const user_id = req.user_id
    const service = new CreateMessageService()

    message = await service.execute(message, user_id)

    return res.json({message: message})
  }
}