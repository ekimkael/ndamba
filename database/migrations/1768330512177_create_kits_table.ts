import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'kits'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))

      table.string('supplier').notNullable()
      table.enu('variant', ['HOME', 'AWAY', 'THIRD', 'TRAINING', 'GOALKEEPER']).notNullable()
      table.uuid('season_id').notNullable().references('id').inTable('seasons')
      table.uuid('campaign_id').notNullable().references('id').inTable('campaigns')
      table.string('front').nullable()
      table.string('back').nullable()
      table.string('shorts').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
