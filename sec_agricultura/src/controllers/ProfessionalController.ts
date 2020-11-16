import knex from '../database/connection';
import { Request, Response } from 'express';


class ProfessionalController {

  async index(req: Request, res: Response) {

    const pro = await knex("professional").select("*").orderBy("name");

    if (!pro)
      return res.status(204).json({ message: "Não a usuários cadastrados!!" });

    return res.json(pro);
  }

  async show(req: Request, res: Response) {

    const trx = await knex.transaction();

    const pro = await trx("professional").where("id", req.params.id).first();

    if (!pro)
      return res.status(400).json({ message: "Usuario não encontrado!!!" });

    return res.status(200).json(pro);

  }

  async create(req: Request, res: Response) {

    const {
      name,
      address,
      profession,
      status,
    } = req.body;


    const trx = await knex.transaction();

    const pro = { name, address, profession, status };

    await trx("professional").insert(pro).then(trx.commit);

    return res.status(201).json(pro);
  }

  async delete(req: Request, res: Response) {

    const { id } = req.params;

    const pro = await knex("professional").where("id", id).first();

    if (!pro) {
      return res.status(500).json({ message: "Usuário não encontrado!!!" });
    }

    const trx = await knex.transaction();

    await trx("professional").where('id', id).delete().then(trx.commit).catch();

    return res.status(200).json({ message: `usuario deletado com sucesso ${pro}` });

  }

  async update(req: Request, res: Response) {

    const { id } = req.params;

    const pro = knex("professional").where("id", id).first();

    if (!pro) {
      return res.status(500).send("Error ao atualizar usuario!!!!");
    }

    const {
      name,
      address,
      profession,
      status,
    } = req.body;

    const trx = await knex.transaction();

    await trx("professional").where("id", id).update({
      name: name,
      address: address,
      profession: profession,
      status: status,
    });

    await trx.commit();
    return res.status(200).json({ message: `Usuario ${name} atualizado com sucesso!!! ` });
  }
}

export default ProfessionalController;