import { slugify } from "transliteration";

export default {
    beforeCreate(event) {
        const title = event.params.data.title;
        console.log("EVENT DATA:", event.params);
        console.log(title);
        if (title) {
            event.params.data.slug = slugify(title, { lowercase: true });
        }
    },

    beforeUpdate(event) {
        const title = event.params.data.title;
        console.log("EVENT DATA:", event.params);
        console.log(title);

        if (title) {
            event.params.data.slug = slugify(title, { lowercase: true });
        }
    },
};
