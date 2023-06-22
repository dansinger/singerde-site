import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/*intro*/}
      <div>
        <p>
          I love the internet. 
        </p>
        <p>
          from the first time I used home dial-up in the 3rd grade to write a dinosaur report, I was hooked.<a href="https://en.wikipedia.org/wiki/Maiasaura" target="_blank">🦕</a> 
        </p>
        <p>for me, that wired, tenuous connection allowed me to try on a self on fan forums and in games that was more confident. it taught me to cultivate my curiosity and value learning beyond the confines of what was in front of me. I noticed how it brought people together based on commonalities in ways that could never otherwise happen.  
        </p> 
        <p>
          and as I've grown alongside the internet, I've seen the ways in which it has enabled toxic relationships with one another and with ourselves. as a tech professional, I've been interested in the ways in which design (or anti-design) shapes the interactions that we're able to have. that has driven me to get curious about the ways we can positively impact those forces.
        </p>
      </div>

      {/*work section*/}
      <h2>
        <span id="work">// work</span>
      </h2>
      <p>
        I am a <strong>Lead Product Researcher</strong> at <a href="https://www.disneyplus.com/home" targer="_blank">Disney Streaming</a>. There, I lead strategic research projects to find ways to help our subscribers discover new content to watch.
      </p>    
      <p>  
        previously, I was Product Research Lead for Community Products on <a href="https://stackoverflow.co/" target="_blank">Stack Overflow</a>, leading long-term strategic projects to inform the roadmap for the Stack Overflow community. I have spent a year working on new, inclusive spaces for all technologists to learn.
      </p> 
      <p>
        with over 10 years of experience conducting mixed-methods research, I bring formal training in social science research and practical experience conducting primary research in the field. Alongside research experience, I've served a variety of design and strategy roles across B2B and B2C companies. I've supported brands like Comcast, Johnson & Johnson, and La Colombe.
      </p>
      <p>
        for detailed work history, see my <a href="https://www.linkedin.com/in/singerde/" target="_blank">linkedin</a>.
      </p>
      <p>
        for samples of work, please <a href="mailto:singerde1@gmail.com?subject=Web Contact">contact me</a>.
      </p>

      <p><a href="#top" class="small">^ back to top</a></p>

      {/*education section*/}
      <h2>
        <span id="education">// education</span>
      </h2>
      <p>
        I am a chronic over-thinker and unstoppable busybody, which drove me to study <strong>anthropology</strong>. I fused that with my love of music and performance to study <strong>ethnomusicology</strong> at Boston University, where I studied ethnograpy and a compliment of qualitative methods. 
      </p>
      <h3>M.A., Ethnomusicology / Boston University (2014)</h3>
      <h3>B.A.. Anthropology, magna cum laude / James Madison University (2012)</h3>
      <h3>Graduate Questionnaire Design coursework / UMich: Summer Institute in Survey Techniques (2021)</h3> 

      <p><a href="#top" class="small">^ back to top</a></p>

      {/*about section*/}
      <h2>
        <span id="about">// about</span>
      </h2>
      <p>
        I live with my partner and cats in <a href="https://en.wikipedia.org/wiki/Philadelphia" target="_blank">Philadelphia, PA, USA</a>, a small big city which we have come to love. I spend many nights cooking, pulling ingredients from a pantry I've overstocked with random spices. 
      </p>
      <p>
        storytelling has been a constant for me, and what once lived only in daydreams I've learned to channel into tabletop gaming with my friends. I like to call myself a "game weaver" instead of a dungeon master, working to string together many loose threads of magic and mechanics into an enjoyable experience<a href="https://clips.twitch.tv/PlainAlivePangolinTBCheesePull?tt_medium=my_clips" target="_blank">.</a> 
      </p>

      <p><a href="#top" class="small">^ back to top</a></p>

    </Layout>
  )
}

export default IndexPage