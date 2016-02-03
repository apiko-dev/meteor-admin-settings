Meteor [Admin](https://github.com/yogiben/meteor-admin) Settings
================================================================

Adds page for key value stores in yogiben:admin dashboard.

[![Meteor Icon](http://icon.meteor.com/package/jss:admin-settings)](https://atmospherejs.com/jss/admin-settings)

## Setup

1. `meteor add jss:admin-settings`
2. Go to `/admin` and select `Settings` from sidebar
3. Use `adminSetting` helper or `AdminSettings.get` to get your setting value.

## Using adminSetting helper

```handlebars
<template name="example">
  <h1>{{adminSetting 'Welcome message'}}</h1>
</template>
```

## Using AdminSettings.get method

```coffeescript
welcomeMessage = AdminSettings.get 'Welcome message'
```

## License
Note that this project is distributed under the [MIT License](LICENSE).  
Made by [![Professional Meteor Development Studio](http://s30.postimg.org/jfno1g71p/jss_xs.png)](http://jssolutionsdev.com) - [Professional Meteor Development Company](http://jssolutionsdev.com)
