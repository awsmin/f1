# AWSM F One - Frontity theme

A starter theme for Frontity

## Table of contents

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
- [Credits](#credits)

<!-- tocstop -->

## Install

```sh
npm i @awsm/f-one
```

## Usage

Once installed it should be included in your `frontity.settings.js`.
The theme options can be specified in the `state.theme` property.

```javascript
{
  name: "@awsm/f-one",
  state: {
    theme: {
      menu: [
        ["Home", "/"],
        ["About", "/about/"],
        ["Sevices", "/sevices/"],
        ["Jobs", "/jobs/"],
        ["Contact", "/contact/"]
      ],
      featured: {
        showOnList: true,
        showOnPost: true
      }
    }
  }
},
```

### Credits
- Frontity Team [ [1](https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/), [2](https://docs.frontity.org/guides/understanding-mars-theme-1) ]
- [frontity-contact-form-7](https://github.com/imranhsayed/frontity-contact-form-7) package by Imran Sayed
- [WP Job Openings - Frontity Package](https://github.com/awsmin/frontity-wp-job-openings) package by Anantajit JG (AWSM Team)