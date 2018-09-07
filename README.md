# ArcTouch
The project is a Single Page Application and was developed for ArcTouch's 'challenge coding'.

## Characteristics
The project was structured to be accessible from the most varied devices and the HTML tags are respecting semantics, helping accessibility. All components were built separately (using the BEM methodology), in a responsive way, to reach the mobile devices. JavaScript code was built without the use of libraries or frameworks. It was splitted in functions, avoiding manipulations and access to the DOM.

## Technical specifications
* Webpack - Task runner
* ES6 - ECMAScript
* Pug - Template engine
* Sass - CSS pre-processor
* BEM - Component's methodology
* No CSS framework
* No JavaScript framework
* Semantic HTML
* SEO tags

## Carousel
The auto rotate stops on click
- [x] Animate slide transition
- [x] Slides should auto rotate after 4 seconds
- [x] User should be able to navigate between slides
- [x] Auto rotate should be disabled once user has interacted
 
## How to run the project
- Clone the repository, switch to branch *challenge*
- Inside the folder, run the following commands. You need to have (Node.js and Yarn/npm) installed.
```sh
$ make install
```
```sh
$ make start
```
- That is it! The project is running

## How to run the tests
- Inside the folder, on branch *challenge*, run the following command
```sh
$ make test
```
## Source code
- On the branch *Challenge*, [here](https://github.com/mateuspaulino/arctouch/tree/challenge)

## Desktop screenshot
![alt text](https://github.com/mateuspaulino/arctouch/blob/master/arctouch-page.png)

## Mobile screenshot
![alt text](https://github.com/mateuspaulino/arctouch/blob/master/arctouch-page-mobile.png)

## License

Copyright (c) 2018 Mateus Paulino

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
