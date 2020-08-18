const settings = {
  "name": "AWSM F One",
  "state": {
    "frontity": {
      "url": "https://staging2.awsm.in/fone",
      "title": "AWSM F One - Frontity theme",
      "description": "A simple theme for Frontity WordPress development"
    }
  },
  "packages": [
    {
      "name": "f-one",
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
          }
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
