Epidermis Skin
========================
A not-ready-for-production attempt at revamping a fork of the vector skin for our
team's hack week.

![Epidermis skin animated](screenshots/animated.gif?raw=true)

Other screenshots of Epidermis can be found [here](screenshots).

To enable this skin, clone this repo into the `skins` directory of your mediawiki installation, and put the following in your LocalSettings.php file:

```php
wfLoadSkin( 'Epidermis' );
```

You should now see the skin listed in the available skins on the
Special:Preferences page (e.g. `/wiki/Special:Preferences#mw-prefsection-rendering`).

