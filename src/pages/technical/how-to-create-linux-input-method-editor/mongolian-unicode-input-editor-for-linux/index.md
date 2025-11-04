---
title: Mongolian Unicode Input Editor for Linux
---

# Mongolian Unicode Input Editor for Linux

*This article is quite old. I'm not sure if it is still useful but leaving it here for reference.*

When I want to write Mongolian on the computer it is annoying to have to [write it on my phone](/apps/chimee/) and then transfer it to the computer. So I wrote up a simple input editor for the Mongolian Unicode characters. Below are my notes for how to install it.

Download the IBus file: <a href="/media/Mongol_Unicode.txt" download>Mongol_Unicode.txt</a>

Run the following three commands in a terminal (changing the path to wherever you have it):

```
sudo ibus-table-createdb -n /usr/share/ibus-table/tables/Mongol_Unicode.db -s /path/to/Mongol_Unicode.txt
ibus-daemon -drx
ibus-setup
```

When the IBus setup appears. go to Input Method > Select an input method > Show all input methods > Mongolian > Mongolian_Unicode > Add. You can close the IBus setup now.

On the IBus menu on your main taskbar choose Text Entry Settings… > Add (+) button > Mongolian (Mongol_Unicode) > Add.

That should be all. The keyboard layout is the same as the [Almas layout](http://www.mongolfont.com/cn/ios/almasmnglkbd.html).

You may also need to install a Mongolian Unicode font to your computer. You can get one at [mongolfont.com](http://www.mongolfont.com/en/font/mnglwhiteotf.html).

There are still some rendering problems but this is improving over time. I can get many things to render in Firefox and LibreOffice. Here is some Mongolian text that I wrote with this input editor:

```
ᠰᠠᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?
```

## Note

I couldn’t get the icon to work for me but if you want to try it here is the icon file: <a href="/media/mongolian.svg" download>mongolian.svg</a> 

It is supposed to work after copying it with

```
sudo cp /path/to/mongolian.svg /usr/share/ibus-table/icons/
```

(and changing your path of course)

