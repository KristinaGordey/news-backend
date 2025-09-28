/**
 * article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.entityService.findOne('api::article.article', id, {
      populate: ['coverImage', 'category', 'user'], 
    });

	await strapi.entityService.update('api::article.article', id, {
      data: {
        views: (entity.views || 0) + 1,
      },
    });

	entity.views = (entity.views || 0) + 1;

    return this.transformResponse(entity);
  },
}));
