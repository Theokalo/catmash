# catmash

#Heroku 
<a href="https://front-end-catmash.herokuapp.com/#/">https://front-end-catmash.herokuapp.com</a>

> A Vue.js project

The goal is to create an application with two pages.
<ul>
<li><b>Arena page:</b> In this page you can vote the cutest cat between of two cats.</li>
<li><b>Ranking page:</b> In this page you can see all the cats and how many votes has every cat.</li>
</ul>
To achieve the above I chose to develop a Vue.Js app. 
<ul>
<li>I created the NavBar in order to switch the pages.</li>
<li>I created the store and I imported the api.</li>
<li>To choose between two pictures I had to create a function that print two random pictures from the array by using a v-for in the template and these two pictures are not the same.</li>
<li>Also, everytime that you pick a picture I update the store with the new count.</li>
<li>Last but not least, I get all the images from the store and print them in the Ranking page with their values by using a v-for in the template.</li>
</ul>

![Image 1](../master/src/asset/image1.png)
![Image 2](../master/src/asset/image2.png)
![Image 3](../master/src/asset/image3.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
