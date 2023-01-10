# simple-loading-animations
An extremely simple loading animation script to be used with TailwindCSS


I just wanted something simple to use without having to install a package manager or a huge external library. I originally made this for my coursework though, as external libraries weren't allowed.

This is how it works with TailwindCSS.
```html
<h1 class="loadable transition-all" anim-class="opacity-0 -translate-x-16"></h1>
```

If an element has the class 'loadable', and has an anim-class attribute set, on page load, the element, in this case, will go from 'opacity-0 -translate-x-16'
to the elements default values, ie: 'opacity-100 translate-x-0'. Allowing for a nice loading transition.

You can offset an animation using the 'loading-time' attribute, and choose to animate a classes children rather than it's self.

```html
<div class="loadable transition-all" anim-class="opacity-0 -translate-x-16" anim-children="true">
  <p class="transition-all" loading-time="200"> 1 </p>
  <p class="transition-all" loading-time="400"> 2 </p>
  <p class="transition-all" loading-time="600"> 3 </p>
  <p class="transition-all" loading-time="800"> 4 </p>
  <p class="transition-all" loading-time="1000"> 5 </p>
</div>
```

![Example](https://imgur.com/M6lJZF5.gif)
