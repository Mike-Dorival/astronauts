import { v4 as uuidv4 } from "uuid";
import astronauts from "../data.js";

export const getAstronauts = (_, res) => {
  res.json(astronauts);
};

export const getAstronautById = (req, res) => {
  const id = req.params.astronautId;
  const findAstronaut = astronauts.find((astronaut) => astronaut.id === id);

  if (!findAstronaut) {
    return res.status(404).send("Astronaut not found");
  }

  res.json(findAstronaut);
};

export const createAstronaut = (req, res) => {
  const addAstronaut = {
    id: uuidv4(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age || "",
    country: req.body.country || "",
    image: req.body.image || "",
    text: req.body.text || "",
  };

  const indexAstronaut = astronauts.findIndex((astronaut) => astronaut.id === req.body.id);

  if (indexAstronaut > -1) {
    return res.status(404).send("this id already exist");
  }

  astronauts.push(addAstronaut);
  res.status(201).send("Astronaut create");
};

export const updateAstronaut = (req, res) => {
  const id = req.params.astronautId;
  const indexAstronaut = astronauts.findIndex((astronaut) => astronaut.id === id);

  const updatedAstronaut = {
    id: astronauts[indexAstronaut].id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age || "",
    country: req.body.country || "",
    image: req.body.image || "",
    text: req.body.text || "",
  };

  if (indexAstronaut === -1) {
    return res.status(404).send("Astronaut not found");
  }

  astronauts[indexAstronaut] = updatedAstronaut;
  res.status(200).json("Astronaut updated");
};

export const deleteAstronaut = (req, res) => {
  const id = req.params.astronautId;
  const indexAstronaut = astronauts.findIndex((astronaut) => astronaut.id === id);

  if (indexAstronaut === -1) {
    return res.status(404).send("Astronaut not found");
  }

  astronauts.splice(indexAstronaut, 1);
  res.status(200).json("Astronaut deleted");
};
