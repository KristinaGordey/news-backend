import { config } from "process";

export default ({ env }) => [
    "strapi::logger",
    "strapi::errors",
    "strapi::security",
    // {
    //     name: "strapi::security",
    //     config: {
    //         contentSecurityPolicy: {
    //             useDefaults: true,
    //             directives: {
    //                 "connect-src": ["'self'", "https:"],

    //                 "img-src": [
    //                     "'self'",
    //                     "data:",
    //                     "blob:",

    //                     "https://euksjufaiulmowpryqiq.supabase.co",
    //                 ],
    //                 "media-src": [
    //                     "'self'",
    //                     "data:",
    //                     "blob:",

    //                     "https://euksjufaiulmowpryqiq.supabase.co",
    //                 ],
    //                 upgradeInsecureRequests: null,
    //             },
    //         },
    //     },
    // },
    {
        name: "strapi::cors",
        config: {
            origin: ["http://localhost:5174"], // разрешаем фронт
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            headers: ["Content-Type", "Authorization"],
            credentials: true,
        },
    },
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
