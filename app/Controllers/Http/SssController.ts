import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ss from 'App/Models/Ss'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class SssController {
  public async index({}: HttpContextContract) {
    const sss = await Ss.all()

    return sss
  }

  public async store({ request }: HttpContextContract) {
    const dataValidator = await request.validate({
      schema: schema.create({
        ss: schema.string(),
        tag: schema.string(),
        nome_bem: schema.string(),
        data: schema.date(),
        solicitante: schema.string(),
      }),
      messages: {
        'ss.required': 'ss are required to submit the form',
        'tag.required': 'tag are required to submit the form',
      },
    })

    const data = {
      ...request.only(['os', 'descricao_servico', 'servico', 'centro_trabalho', 'responsavel']),
      ...dataValidator,
    }

    const ss = await Ss.findBy('ss', data.ss)

    if (ss) {
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
