const { Horse } = require('../models')

const create = async (req, res) => {
  try {
    const horse = await Horse.create(req.body)
    console.log(horse.toJSON())
    res.status(200).json(horse)
  } catch(error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const horses = await Horse.findAll()
    res.status(200).json(horses)
  } catch(error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const horse = await Horse.update(
      req.body,
      { where: { id: req.params.horseId }, returning: true}
    )
    res.status(200).json(horse)
  } catch(error) {
    console.log(error)
    res.status(500).json(error)
  }
}

    // We can also update at the instance level.
    // Several fields can be updated at once with the set method,
    // but we will need to save() the instance afterwards.

// const update = async (req, res) => {
//   try {
//     const cat = await Cat.findByPk(req.params.catId)
//     cat.set(req.body)
//     await cat.save()

//     res.status(200).json(cat)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }

const deleteHorse = async (req, res) => {
  try {
    const numberOfRowsRemoved = await Horse.destroy(
      { where: { id: req.params.horseId } }
    )
    res.status(200).json(numberOfRowsRemoved)
  } catch(error) {
    console.log(error)
    res.status(500).json(error)
  }
}

// We can also call destroy on an instance:
// const deleteCat = async (req, res) => {
//   try {
//     const cat = await Cat.findByPk(req.params.catId)
//     await cat.destroy()
//     res.status(200).json(cat)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }


module.exports = {
  create,
  index,
  update,
  delete: deleteHorse
}