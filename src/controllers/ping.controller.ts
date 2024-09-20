import { Request, Response } from "express";
interface PingControllerResponse {
  message: string;
}

export default class PingController {
  public static async ping(req: Request, res: Response): Promise<void> {
    const response: PingControllerResponse = {
      message: "pong",
    };

    res.status(200).json(response);
  }
}
