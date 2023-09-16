# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [AnimateIntoView](#animateintoview)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![](./desktop-preview.jpg)

### Links

- Solution URL: [https://github.com/PatMiracle/Loopstudios](https://github.com/PatMiracle/Loopstudios)
- Live Site URL: [https://pi-loopstudios.netlify.app](https://pi-loopstudios.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [animate.css](https://animate.style/)
- [Tailwind](https://tailwindcss.com/) - CSS Framework
- [React](https://react.dev/) - JS library

### AnimateIntoView

In the source code
`/src/component/AnimateIntoView.jsx`
, I bootstrap this component using animate.css to produce sort of a scrollReveal. It will add the animation class to the specific element as the element top position gets close to the window's inner height.

```js
if (elRef.current.getBoundingClientRect().y < window.innerHeight - 20) {
  elRef.current.classList.add(`animate__${animation}`)
}
```

## Author

- Frontend Mentor - [@PatMiracle](https://www.frontendmentor.io/profile/PatMiracle)
- Twitter - [@mimidevs](https://www.twitter.com/mimidevs)
