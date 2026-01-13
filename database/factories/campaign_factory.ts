import factory from '@adonisjs/lucid/factories'
import Campaign from '#models/campaign'

export const CampaignFactory = factory
  .define(Campaign, async ({ faker }) => {
    return {}
  })
  .build()