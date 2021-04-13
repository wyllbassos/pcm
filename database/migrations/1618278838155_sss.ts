import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sss extends BaseSchema {
  protected tableName = 'sss'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('ss').notNullable().unique()
      table.string('os')
      table.string('tag').notNullable()
      table.string('nome_bem').notNullable()
      table.string('descricao_servico', 2048)
      table.date('data').notNullable()
      table.string('servico')
      table.string('centro_trabalho')
      table.string('solicitante').notNullable()
      table.string('responsavel')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
