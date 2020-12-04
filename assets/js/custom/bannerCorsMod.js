{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 window.addEventListener('CookiebotOnDialogDisplay', function (e) \{\
          var C = 'CybotCookiebotDialogDetailBodyContent',\
              c = ['necessary','preference','statistics','advertising','unclassified'],\
              d = document,\
              e,\
              n = '',\
              t = ['about','overview'];\
\
\
          for (i of c) \{\
            n = i.charAt(0).toUpperCase() + i.slice(1);\
            e = d.getElementById(C + 'CookieContainer' + n);\
            e.removeAttribute('href');\
            e.addEventListener('click', function () \{\
              CookieConsent.dialog.showCookieContainerDetailPane(this.id.match(/Necessary|Preference|Statistics|Advertising|Unclassified/)[0]);\
            \})\
          \}\
\
          for (i of t) \{\
            n = i.charAt(0).toUpperCase() + i.slice(1);\
            e = d.getElementById(C + 'Tabs' + n);\
            e.removeAttribute('href');\
            e.addEventListener('click', function () \{\
              CookieConsent.dialog.showDetailPane(this.id.match(/About|Overview/)[0]);\
            \})\
          \}\
        \}, false);}