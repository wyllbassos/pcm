import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ss from 'App/Models/Ss'

export default class SssController {
  public async index({}: HttpContextContract) {
    const sss = await Ss.all()

    return sss
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only([
      'ss',
      'os',
      'tag',
      'nome_bem',
      'descricao_servico',
      'data',
      'servico',
      'centro_trabalho',
      'solicitante',
      'responsavel',
    ])
    const ss = await Ss.findByOrFail('ss', data.ss)

    if (ss) {
      console.log(ss)
      ss.merge(data)
      return ss.save()
    }

    return Ss.create(data)
  }

  public async show({ params }: HttpContextContract) {
    const ss = await Ss.findOrFail(params.id)

    return ss
  }

  public async update({ request, params }: HttpContextContract) {
    const ss = await Ss.findOrFail(params.id)
    const data = request.only([
      'ss',
      'os',
      'tag',
      'nome_bem',
      'descricao_servico',
      'data',
      'servico',
      'centro_trabalho',
      'solicitante',
      'responsavel',
    ])

    ss.merge(data)
    await ss.save()

    return ss
  }

  public async destroy({ params }: HttpContextContract) {
    const ss = await Ss.findOrFail(params.id)

    await ss.delete()
  }
}
