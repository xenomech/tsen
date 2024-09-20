import { Request, Response } from "express";
import { Get, Route } from "tsoa";

interface PingControllerResponse {
  message: string;
}

@Route("ping")
export default class PingController {
  @Get("/")
  public static async ping(req: Request, res: Response): Promise<void> {
    const response: PingControllerResponse = {
      message: "pong",
    };

    res.status(200).json(response);
  }
}
