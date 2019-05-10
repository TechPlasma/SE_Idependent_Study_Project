<template>
  <v-container>
    <v-layout  justify-center column text-xs-center wrap>
      <v-card 
        class="rounded-card"
        align="left"
      >
        <v-card-title>
          <v-spacer></v-spacer>
          <h1 class="aqua">About</h1>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <h2>Website</h2>
          <p>
            Building out the website was probably the most straight-forward piece in all this. I used Vue as a base with Vuex as the state manager and Vuetify as my UI layer after failing epicly at making one that looked good using Sass. A eye for design apparently isn't really something that you can just learn in tutorial videos over the course of a semester. 
          </p>
          <p>
            One of my long standing issues for the front end was the supreme lack of information on building Query Strings. Which apparently aren't even standardized but everyone ueses them? I spent weeks trying to find some information on how to break down search box content and pass it back over to the servers. Without a standardized pattern and the limitations of the Python API I ended up just scrapping server side search and just implemented it on the client side.
          </p>
          <p>
            I'm over all very happy with my client side experience and what I managed to learn. Not all of it got used in the final version of the project but it has given me a better understanding of what constitutes a modern implementation of website design and tooling.
          </p>
          <h2>Api Server 1: Node</h2>
          <p>
            The surprise contender for second most intuitive section goes to Node. I initially thought that this was going to give me many issues. Be spread wide and thin and basically make it impossible for me to finish this project. After running through the tutorial and also spending time coding the front end, working in node just felt extremely natural. I was able to think in the same mind-space as I would when coding functions on the front end. 
          </p>
          <p>
            One of the downsides of Node was that you could basically do anything you wanted to do, any data could come in and there's really no guarantee that that data is what you expect it to be. But such is the way with JavaScript. Documentation of API definition is solely on you and should probably be done before staring your project on Node. 
          </p>
          <p>
            At one point there was a api decision (The database stores tags as a string delimited by commas but in client side it's an array, the question was to pass a string through the api or an array) that I was having trouble implementing in python but could be done client side. I basically just copy/pasted my code from node into the client side right before the api call and it worked perfectly with both API.
          </p>
          <p>
            Once you know what modules your using. All the documentation is really great in Node. It's very well organized and makes sense. Looking up documentation in python was a nightmare of a hundred things that I COULD do but didn't apply to me. And also unlike Python I didn't have to install a ton of modules for every little thing.
          </p>
          <h2>Api Server 2: Python</h2>
          <p>
            Python was NOT easy. It ended up being the source of a lot of frustration, you need to install modules on top of modules to get anything working, you need more modules just to get a module that already works to be able to talk to another modules it has no right to not be able to talk to. And sometimes you can't even install the modules because your Linux environment is having dementia.
          </p>
          <P>
            I'll give python and swagger something though. Because you have to define the API in a .yaml file. You know EXACTLY what's coming in and going out, and if you have something that's not supposed to be there the entire program crashes. The downside is that it's also very limiting. You can only really do what you define in the definition file and it doesn't allow for you to quickly iterate on ideas. 
          </P>
          <p>
            Speaking on this I will say that for at least  a week I ran into an issue where I needed to have a variable that existed sometimes but if it exists and isn't passed then there's an error and if it doesn't exist but is passed it also throws an error crashing the server. I kept fiddling with the entire server until I remembered that python has default parameters.... That ended up fixing it.
          </p>
          <h2>Database: MySQL</h2>
          <p>
            By far the absolute worst issues I've had with this project have been trying to manage MySql. Starting out was pretty fine. I used an online tool to visually build out my schema then export the necessary .sql file that I actually ended up using multiple times to set up the server across my many attempts.
          </p>
          <p>
            The primary issue is that for the life of me I could not get MySQL to run stably on my system (WSL1). Sometimes it would work, most of the time it wouldn't. And reinstalling it didn't work because the install didn't even work. Python also needs the MySQL server files to actually interface with it which caused my Python Server to not work. I FINALLY got python to work by nuking the entire distro 4 times and downgrading to Ubuntu 16.04 LTS. That got python working but SQL itself never did work after that first time and I had to resort to using a remote SQL server hosted by someone else (Robinson). 
          </p>
          <h2>Final Notes for Future Use</h2>
          <ul>
            <li>Don't mess around trying to set up MySQL it's a nightmare, use a docker image and forget about it.</li>
            <li>Use Node over Python, Better documentation, it more closely aligns with what you</li>
            <li>Vue is pretty great.</li>
          </ul>
          <h2>Known Issues</h2>
          <ul>
            <li>Character Encoding over JavaScript</li>
            <li>Search is Client Side</li>
          </ul>

        </v-card-text>
      </v-card>

      
      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "About",
  components: {
    
  },
  data(){
    return {
      storydatatemp: {
        title: "Story Name",
        id: 3,
        tags: ['Story','Tags','Here']
      },
      range(value){
        return [...Array(value).keys()]
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.rounded-card{
    border-radius: 1rem;
}

.gridview{
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}

.aqua{
  color: $primary;
}
</style>
