# AWSM F1 - Frontity theme

A starter theme for Frontity with support for common Gutenberg WordPress editor blocks. You could use the theme package as a starting point to build your next corporate website or blog.

**[View Demo](https://awsm-theme.vercel.app/)**

**[Open in CodeSandbox](https://githubbox.com/awsmin/f1)**

## Table of contents

<!-- toc -->

- [Quick install](#quick-install)
- [Advanced usage](#advanced-usage)
- [Gutenberg](#gutenberg)
- [Bootstrap](#bootstrap)
- [WP Job Openings](#wp-job-openings)
- [Credits](#credits)


<!-- tocstop -->

## Quick install

 - Create a Frontity project named `awsm-project` with **AWSM F1 theme**
 
```sh
npx frontity create --theme @awsmin/f1 awsm-project
```
 -  The CLI will run its part and once completed, run the project and have fun! 🎉
```sh
cd awsm-project && npx frontity dev
```

![AWSM F1 quick install](https://github.com/awsmin/f1/raw/master/assets/awsm-f1-quick-install.png)

## Advanced usage

```sh
npm i @awsmin/f1
```

Once installed it should be included in your `frontity.settings.js`.
The theme options can be specified in the `state.theme` property.

```javascript
{
  name: "@awsmin/f1",
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
## Gutenberg

By default, these theme includes all the default styles of Gutenberg blocks, which is taken from  

      wp-includes\css\dist\block-library\style.css
      wp-includes\css\dist\block-library\theme.css

In addition we have included certain theme specific styles to the page and post templates.

In order to add custom styles to your Gutenberg blocks you first need to add the blocks inside a "Group" block and assign a CSS class(es) to it. Thus you could use this CSS class(es) to style the entire block along with all sub blocks inside the group block. 

## Bootstrap

We have included a bare-minimum bootstrap css which combines following Bootstrap css/scss files: functions, variables, mixins, root, [reboot](https://getbootstrap.com/docs/4.0/content/reboot/), type, [grid](https://getbootstrap.com/docs/4.0/layout/grid/), forms and [utilities](https://getbootstrap.com/docs/4.0/utilities/borders/).

This essentially provides a base to common layout/grid and  [responsive breakpoints](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints).

_No bootstrap JS included_

## WP Job Openings

This theme package also include support for [WP Job Openings](https://wordpress.org/plugins/wp-job-openings/) plugin in the Frontity framework including the support for application form. All the default fields and the fields supported by [WP Job Openings Pro](https://awsm.in/get/wpjo-pro/) are supported in the job application form.

**[Installation instructions and configurations](https://github.com/awsmin/frontity-wp-job-openings#readme)**

## Credits
- Frontity Team [ [1](https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/), [2](https://docs.frontity.org/guides/understanding-mars-theme-1) ]
- [frontity-contact-form-7](https://github.com/imranhsayed/frontity-contact-form-7) package by Imran Sayed
- [WP Job Openings - Frontity Package](https://github.com/awsmin/frontity-wp-job-openings) package by Anantajit JG (AWSM Team)