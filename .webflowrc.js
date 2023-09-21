module.exports = {
    host: process.env.NEXT_PUBLIC_WF_SITE_ENDPOINT,
    rootDir: "./ui/webflow",
    siteId: process.env.NEXT_PUBLIC_WF_SITE_ID,
    authToken: process.env.NEXT_PUBLIC_WF_AUTH_TOKEN,
    cssModules: true,
    fileExtensions: {
        js: "jsx"
    }
};