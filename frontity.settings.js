const settings = {
  "name": "awsm-theme",
  "state": {
    "frontity": {
      "url": "https://staging2.awsm.in/fone",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "awsm-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
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
