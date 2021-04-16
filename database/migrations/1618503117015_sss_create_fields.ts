import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SssCreateFields extends BaseSchema {
  protected tableName = 'sss'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.enum('prioridade', [0, 1, 2]).nullable()
      table.string('recursos').nullable()
      table.decimal('tempo').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
