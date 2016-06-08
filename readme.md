

![Titel Media logo](http://static1.squarespace.com/static/55828ddae4b0b8d585a1e913/t/55919fe6e4b006e77cac7322/1464276875989/?format=1500w)

# Coding test for Titel Media UG

2016, Luisfer Romero Calero


## Q1

**Write a function (without using external libraries) in ES6 that converts the user entered date formatted as M/D/YYYY to the format YYYYMMDD required by an API endpoint. It should convert ”12/31/2016” to ”20161231” for example. Furthermore, it should validate that the passed date is formatted correctly. Write unit tests for your function using Mocha with Chai BDD-style should-syntax.**

The code is attached to this project.

It has a simple `index.html` that contains an input field and a button made with Bootstrap. After clicking the button, the code contained in `app.js` is where magic happens. The code is supported with a Gulp configurator, and the tests with Mocha / Chai are written with should statements (as requested) in `tests/test.js`, importing the existing functions in `app.js`.

PD: I used `babel` as a dependency in Gulp to enable the usage of ES6.



## Q2

**What are the pros and cons of using Promises instead of callbacks?**

Generally speaking, using Promises instead of callbacks is mostly a good idea, especially since ES6 included native Promises objects as part of the architecture (**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise**)

**Pros of using promises**

* Avoids callback hell.

* Standardized interface for dealing with functionality. This reduces this sort of boiler plate:

```
if (dataHasBeenReceived == true) {
  callback();
} else () {
  on('event', callback);
}
```
Can be changed to:

```
myPromise().then(callback)
```

`then()`s can be chainable, which makes code readable, eg:

```
doSomethingAsync().then(funciton(){
  return doSomethingElseAsync();
}).then(function(result) {
  doSomethingWithResult(result)
})
```

* Easy to distribute one promise to different parts of your application. You don't need to handle all the logic in one place. Eg. A promise can be stored in the variable `myPromise` and made available to several functions which can add multiple handlers using `myPromise.then(myHandler)`

(Personally, for someone who has been using AngularJS for a while and got already used to the deferred / promise logic, to have this in ES6 is really good news).

* Uncaught Errors thrown inside promises don't cause node processes to crash.

**Cons**

* No support for native promises in any version of IE (for now) - although Microsoft's Edge is supported.

* Callbacks tend to have code more centralized in one location - promises can be passed throughout an application and handlers can be located in different places. This makes tracking them harder to do.

* Before having Promises included in ES6, it could affect performance, since creating a Promise object would require to do it manually, instead of using callbacks in plain Javascript.


## Q3

**What is the difference between responsive design and adaptive design?**

Before getting into detail, I'd like to use as a sort of disclaimer that, despite being different concepts and approaches to solve the problem of creating web applications with different screen sizes, resolutions and devices, both responsive and adaptive methodologies are compatible and even recommendable when designing CSS templating.

When using **responsive design**, the layout metrics of a specific div or HTML element are going to depend on the parent container size. That means - when the parent container is resized, is going to affect the designed layout metrics.

The most common example for this is using the following:

```
.child-container {
  width: 80%;
}
```

By using the percentage, the width of the element is going to delegate the responsibility of setting the actual width to the browser. 

There's another tool for using responsive metrics that is usually overlooked. This is the usage of `em` and `rem` when declaring values in CSS elements. They are flexible, and by setting values with them, the browser will apply the right proportion given by the context. So if the default font size of the browser is 16px, 1em or 1rem will be 'translated' by the browser to 16px (10em to 160px and so on).

The basic difference between `em` and `rem` is em depend on the parent's font size and `rem` do not (it depends on the base / root element). This is specially handy when we don't want to care about a given pattern in sizes because is the one we want to use already.

The most popular framework for making our lives easier when applying responsive design is *Bootstrap*. It follows the design pattern of dividing the parent container of our template into a grid with 12 columns (this can be modified). These 12 columns are already responsive, so they will be resized whenever they catch the size of the browser. Hence we can align everything within these columns, and even create several profiles depending on the device... but I am getting ahead, because this leads to 

**Adaptive design**. This approach goes "beyond" the responsive design, because the designer can specify some milestones, some kind of boundaries in which we determine if the layout is going to be different whenever we resize the browser (or parent containers) below or above an specific size.

A very good example (because is a common problem), is the following:

```
@media screen and (max-width: 500px) {
  .child-container {
    width: 300px;
  }
}
```

So, when we have a (most likely) mobile phone in our hands, we want this container to be 300px no matter what. However, we want a fluid container if we have a bigger size:

```
@media screen and (min-width: 500px) {
  .child-container {
    width: 90%;
  }
}
```
In this case is going to be proportional within the parent container. By setting the other media query we make sure that the minimum width this child container will ever have is 300px, and then 90% of whatever size is applied in every case. When using precompilers like SASS or LESS, we can previously define which are the different sizes (milestones) we will use, so we can do something like this:

```
@media screen and (min-width: @tablet-size) {
  .child-container {
    width: 90%;
  }
}
```

So, as we can see, we can use both responsive design and adaptive, and in my opinion, is the way to go when designing a website that can handle several profiles. The only reason I could ever think for not using adaptive along with responsive is timing. If there's no time for creating 2-3 different profiles for our websites (let's say mobile phones, tablets, desktop, large desktop...), then responsive should be enough.
  

## Q4

**Explain the difference between layout, painting and compositing.**

These are three different stages of the same pipeline, as explained in here: **https://developers.google.com/web/fundamentals/performance/rendering/?hl=en**


Layout      | Painting         | Compositing    |
--------------------|------------------|-----------------------|


So we have 

**Layout**: Browser will determine how much space each element takes up and where to place it.

**Painting**: This is the process of filling in pixels. It involves drawing out elements.

**Compositing**: Browser draws element to the screen in the correct order so the page renders correctly.








