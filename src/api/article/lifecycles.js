const slugify = require('slugify');

module.exports = (plugin) => {
  plugin.contentTypes.article.hooks = {
    beforeCreate(event) {
      const { data } = event.params;
      if (data.title) {
        data.slug = slugify(data.title, {
          lower: true,
          strict: true,
          locale: 'ru'
        });
      }
    },
    beforeUpdate(event) {
      const { data } = event.params;
      if (data.title) {
        data.slug = slugify(data.title, {
          lower: true,
          strict: true,
          locale: 'ru'
        });
      }
    },
  };

  return plugin;
};
