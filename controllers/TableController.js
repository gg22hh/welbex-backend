import RecordModel from '../models/Record.js';

export const getAll = async (req, res) => {
  try {
    const records = await RecordModel.find();

    res.json(records);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'Не удалось получить записи',
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new RecordModel({
      data: req.body.data,
      name: req.body.name,
      amount: req.body.amount,
      distance: req.body.distance,
    });

    const record = await doc.save();

    res.json(record);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'Не удалось добавить запись',
    });
  }
};
