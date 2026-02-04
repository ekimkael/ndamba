import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'matches'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))

      table.uuid('season_id').notNullable().references('id').inTable('seasons')
      table.uuid('reward_id').nullable().references('id').inTable('match_rewards')
      table.string('title').notNullable()
      table.string('slug').notNullable().unique()
      table.enu('type', ['SATURDAY', 'FRIENDLY', 'TOURNAMENT', 'CHALLENGE']).notNullable()
      table.enu('status', ['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED']).notNullable()
      table.string('location').notNullable()
      table.string('opponent').nullable()
      table.string('poster').nullable()
      table.integer('our_score').notNullable()
      table.integer('their_score').notNullable()
      table.timestamp('date').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
