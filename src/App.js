import logo from './favicon.png';
import React from 'react';
import pic from './Portfolio_Picture.png';
import './App.css';
import write1 from './imgs/Screenshot (207).png';
import pic0 from './imgs/Glam3.png'
import pic1 from './imgs/Glam1.png'
import pix from './imgs/Screenshot (191).png'
import pic5 from './imgs/Primoris1.png'
import pic6 from './imgs/Primoris2.png'
import pic4 from './imgs/Tendo1.png'
import pic3 from './imgs/Tendo2.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Header-div'>
          <div className='Logo-name'>
            <span>
              <img className='Header-logo' src={logo} alt='icon' />
            </span>
            <h3>Nimi Kadejo</h3>
          </div>
          <nav className='Nav-links'>
              <div><a href='#contact'>contact</a></div>
              <div><a href='#work'>work</a></div>
              <div><a href='#experience'>experience</a></div>
              <div><a href='#skills'>skills</a></div>
              <div><a href='#blog'>blog</a></div>
          </nav>
        </div>
      </header>

        <div className='App-intro'>
          <div className='Site-copy'>
            <img className='Intro-pic' src={pic} alt="my_picture" />
            <section className='Intro-text'>
                <div className='Greeting'>Greetings! 
                    <img src="https://img.icons8.com/emoji/48/null/waving-hand-medium-dark-skin-tone.png" alt="wave"/>
                </div>
                <div>I'm Nimi 🤝, a writer<br/>
                   living in Lagos, Nigeria. 
                </div>
                <div className='Intro-body'>
                 Seeking
                 upskilling opportunities
                 in Digital Communication 
                  and Web Development.
                </div>
            </section>
          </div>
        </div>

        <section className='My-work'>
          <div>
            <br/>

            <h1 id='work'>My Work</h1>
          </div>
          <div className='Work-details'>
            <div>
              <p>
                While working as an intern at Primoris Digital, a social media management agency in Lagos,
                I created social media content and calendars for our clients. I brainstormed visual contents,
                managed social accounts and wrote copies for instagram posts and Direct Message (DM) Marketing.
              </p>
              <p>
                Here's some screenshots of my instagram posts and copies for the agency and some client accounts.
              </p>
            </div>
            <div>
              
              <img src={pic0} alt='work sample'/>
              <img style={{marginLeft: "50em"}}src={pic1} alt='work sample'/>
              <p>
                @Glam_squadng is an online makeup store in Lagos. While I managed the
                account, I optimised the biography of the page, oversaw the page
                layout, designed posts and reels. In the screenshots above, I created visuals 
                and wrote captions. I also created a reel that garnered a view of 7000+.
              </p>
            </div>
            <div>
              
              <img src={pic3} alt='work sample'/>
              <img src={pic4} alt='work sample'/>
              <img src={pix} alt='work sample'/>
              <p>
                Tendo is a B2B brand that focused on dropshipping for small businesses.
                My work with @Tendonigeria was mainly, content strategy and writing instagram copies.
                I created content calendars, wrote blogposts and attended creative brainstorm meetings
                for the brand's social media. I have included some of my contributions above.
              </p>
            </div>
            <div>

              <img src={pic5} alt='work sample'/>
              <img src={pic6} alt='work sample'/>
              <p>
                Primoris Digital is the Management Agency, I interned at. 
                While on the team, I managed the instagram account, optimized the page bio, wrote blogs,
                created copy for visuals, and wrote proposals that landed new clients. 
              </p>
            </div>
          </div>
          <div>
            <img src={write1}/>
          </div>
          <div>
            <a href='https://drive.google.com/drive/folders/1-DjKmzWiraKXniuTwDIlrGpv2r-Q8VQ7?usp=sharing' id='blog'>
              View More Samples -></a>
          </div>
        </section>

        <section className='Contact' id='contact'>
        <div>
        </div>
        <div className='Btns'>
          <a href='https://wa.me/message/6266DB5W7PDMO1'><img src="https://img.icons8.com/sf-black-filled/64/null/whatsapp.png" alt="whatapp-logo" /></a>
          <a href='https://twitter.com/nimikadejo'><img src="https://img.icons8.com/sf-black-filled/64/null/twitter-circled.png" alt='twitter-logo'/></a>
          <a href='https://www.instagram.com/nimi.kadejo/'><img src="https://img.icons8.com/sf-black-filled/64/null/instagram-new.png" alt='instagram-logo'/></a>
          <a href='https://github.com/nimikadejo'><img src="https://img.icons8.com/sf-black-filled/64/null/github.png" alt="github-logo"/></a>
          <a href='https://www.linkedin.com/in/toluwanimi-kadejo-4363851bb/'><img src="https://img.icons8.com/sf-black-filled/64/null/linkedin-circled.png" alt="linkedIn-logo" /></a>       
        </div>
        </section>
        <section className='Skills'>
          <div>
            <h1 id='skills'>Get to Know Me.</h1>
          </div>
          <div>
            <p>
              I am a communication graduate whose passion in Digital Communication are relevant in content and copywriting, 
              customer communication, and service management. 
            </p>
            <p>
              In my pursuit of upskilling for web development and digital communication, 
              I am eager to acquire and refine knowledge to achieve communication skills
              and development.
            </p>
            <p> I am ecstatic about the prospect of applying my skills and passion for 
              communication and technology to <strong>create my world in the Digital Universe. 💪</strong>
            </p>
          </div>
          <div style={{paddingLeft: "24em", paddingBottom: "0.7em"}}>
            <a href='https://docs.google.com/document/d/13vpXOteEGCOFxjiYrJ1I5lw3kpMDvR1n/edit?usp=sharing&ouid=117491008548509907790&rtpof=true&sd=true'>View My Resume -></a>
          </div>
        </section>
        <section className='More-about'>
          <div>
            <h1><em>Still Interested???</em></h1>
          </div>
          <div>
            <h4>Here's what I like to do:</h4>
          </div>
          <div>
            <ol>
             <li className='Headline'>Write! 👩🏻‍💻
                <ul>
                  <li># Frontend Web Codes</li>
                  <li># Content Marketing</li>
                  <li># Journals</li>
                  <li># Tech blogs</li>
                  <li># Social Media Copy</li>
                </ul>
              </li>
              <li className='Headline'>Read Fiction 📚
                <ul>
                  <li>+ Buchi Echemeta</li>
                  <li>+ Chimamanda Ngozi Adichie</li>
                  <li>+ Sidney Sheldon</li>
                  <li>+ James Patterson</li>
                  <li>+ Fern Michaels</li>
                </ul>
              </li>
              <li className='Headline'>Bingewatch Comedy/Animated Shows 📺
                <ul>
                  <li>- F is for Family</li>
                  <li>- The Big Bang Theory</li>
                  <li>- Seinfeld</li>
                  <li>- The Office</li>
                  <li>- Bojack Horseman</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>
        <section className="Mail">
          <div>
            <p style={{paddingTop: "1.5rem"}}><h2>Thank You for Your Time ✨</h2></p>
            <p>Do you have comments or inquiries? I would love to read them.</p>
          </div>
          <div>
            <button className='button-53'><a href="mailto:kadejotoluwanimi@gmail.com">
              Send an email 
            </a></button>
          </div>
        </section>
        <footer>
          <div className='Home-made'>
            <marquee behavior="scroll" direction="right" scrollamount="5" 
            scrolldelay="20" width="100%" onmouseover="this.stop();" onmouseout="this.start();">
            <small>©May 2023 Made with love ❤ by Me... 
            </small>
            </marquee></div>
        </footer>
    </div>
  );
};

export default App;
