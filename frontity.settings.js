const settings = {
  "name": "f1",
  "state": {
    "frontity": {
      "url": "https://staging2.awsm.in/fone/",
      "title": "AWSM F1 - Frontity theme",
      "description": "A simple theme for Frontity WordPress development"
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            [
              "About",
              "/about/"
            ],
            [
              "Services",
              "/services/"
            ],
            [
              "Career",
              "/jobs/"
            ],            
            [
              "Blog",
              "/blog/"
            ],
            [
              "Contact",
              "/contact/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://staging2.awsm.in/fone/wp-json",
          "homepage": "/home",
          "postsPage":"/blog"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-contact-form-7",
    "@awsmin/frontity-wp-job-openings"
  ]
};

export default settings;
