import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'season_awards'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))

      table.uuid('season_id').notNullable().references('id').inTable('seasons')
      table.uuid('user_id').notNullable().references('id').inTable('users')
      table
        .enu('type', [
          'MVP',
          'TOP_SCORER',
          'TOP_ASSISTER',
          'BEST_GOALKEEPER',
          'BEST_DEFENDER',
          'BEST_MIDFIELDER',
          'BEST_FORWARD',
        ])
        .notNullable()
      table.jsonb('stats').notNullable()
      table.string('description').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
