import Pin from "../models/Pin.js";


export const createPin = async (req, res, next) => { 
    const newPin = new Pin(req.body);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        next(err)
    }
}

export const getPins = async (req, res, next) => { 
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (err) {
        next(err)
    }
}