import { Request, Response } from "express";

import { Code } from "../models/Code";

export const saveCode = async (req: Request, res: Response) => {
  const { fullCode } = req.body;

  try {
    const newCode = await Code.create({
      fullCode,
    });

    return res.status(201).json({ url: newCode._id, status: "saved!" });
  } catch (error) {
    return res.status(500).json({ message: "Error saving code" });
  }
};

export const loadCode = async (req: Request, res: Response) => {
  const { urlId } = req.body;

  try {
    const existingCode = await Code.findById(urlId);

    if (!existingCode) {
      return res.status(404).json({ message: "Code not found" });
    }

    return res.status(200).json({ fullCode: existingCode.fullCode });
  } catch (error) {
    return res.status(500).json({ message: "Error loading code" });
  }
};
