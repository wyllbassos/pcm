import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateObsTratativasSss extends BaseSchema {
  protected tableName = 'sss'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('observacao_tratativas', 2048)
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('observacao_tratativas')
    })
  }
}
