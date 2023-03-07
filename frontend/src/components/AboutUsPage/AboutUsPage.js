import charles from '../../assets/images/charles.jpg';
import shawnaAndDrink from '../../assets/images/shawnaAndDrink.jpg';
import lynsieA from '../../assets/images/lynsieA.jpg';
import emmettAndCat from '../../assets/images/emmettAndCat.jpg';
import GitHubLogo from '../../assets/images/GitHubLogo.png';
import linkedin from '../../assets/images/linkedin.png';
import angellist from '../../assets/images/angellist.png';

import './AboutUsPage.css'

const AboutUsPage = () => {
   return (
      <>
      <h1 id="about-us-header">Meet the Developers</h1>
      <div id='about-us-container'>
         <div id='shawna-div'>
            <div className="personal-links">
               <a href="https://www.linkedin.com/in/shawna-e-hartley/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn Logo" className="linkedin-logo"/>
               </a>
               <a href="https://github.com/ShawnaEHartley" target="_blank" rel="noopener noreferrer"> 
                  <img src={GitHubLogo} alt="GitHub Logo" className="gh-logo"/> 
               </a>
               <a href="https://angel.co/u/shawna-hartley" target="_blank" rel="noopener noreferrer">
                  <img src={angellist} alt="Angellist Logo" className="angellist-logo"/>
               </a>
            </div>
            <h2 className="dev-name">Shawna Hartley</h2>
            <img className='about-us-page-image' src={shawnaAndDrink} alt='Black and white photo of Shawna'/>
            <h3 className="pos-title">Team Lead</h3>
            {/* <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Imperdiet massa tincidunt nunc pulvinar sapien et. Nascetur ridiculus mus mauris vitae ultricies. Faucibus in ornare quam viverra. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum varius sit amet mattis vulputate. Elementum nibh tellus molestie nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Nisl condimentum id venenatis a condimentum vitae. Cursus metus aliquam eleifend mi in. Ut sem nulla pharetra diam. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Egestas integer eget aliquet nibh praesent tristique magna sit. Libero id faucibus nisl tincidunt.
            </p> */}
         </div>

         <div id='chad-div'>
            <div className="personal-links">
               <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn Logo" className="linkedin-logo"/>
               </a>
               <a href="https://github.com/charles-tyra" target="_blank" rel="noopener noreferrer">
                  <img src={GitHubLogo} alt="GitHubLogo" className="gh-logo"/>
               </a>
               <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={angellist} alt="Angellist Logo" className="angellist-logo"/>
               </a>
            </div>
            <h2 className="dev-name">Charles 'Chad' Tyra</h2>
            <img className='about-us-page-image' src={charles} alt='Charles doing crafts'/>
            <h3 className="pos-title">Flex / CSS Lead</h3>
            {/* <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Imperdiet massa tincidunt nunc pulvinar sapien et. Nascetur ridiculus mus mauris vitae ultricies. Faucibus in ornare quam viverra. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum varius sit amet mattis vulputate. Elementum nibh tellus molestie nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Nisl condimentum id venenatis a condimentum vitae. Cursus metus aliquam eleifend mi in. Ut sem nulla pharetra diam. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Egestas integer eget aliquet nibh praesent tristique magna sit. Libero id faucibus nisl tincidunt.
            </p> */}
         </div>

         <div id='lynsie-div'>
            <div className="personal-links">
               <a href="https://www.linkedin.com/in/lynsie-aragon-87156a157/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn Logo" className="linkedin-logo"/>
               </a>
               <a href="https://github.com/Lynsiearagon" target="_blank" rel="noopener noreferrer">
                  <img src={GitHubLogo} alt="GitHubLogo" className="gh-logo"/>
               </a>
               <a href="https://angel.co/u/lynsie-aragon" target="_blank" rel="noopener noreferrer">
                  <img src={angellist} alt="Angellist Logo" className="angellist-logo"/>
               </a>
            </div>
            <h2 className="dev-name">Lynsie Aragon</h2>
            <img className='about-us-page-image' src={lynsieA} alt='Lynsie'/>
            <h3 className="pos-title">Frontend Lead</h3>
            {/* <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Imperdiet massa tincidunt nunc pulvinar sapien et. Nascetur ridiculus mus mauris vitae ultricies. Faucibus in ornare quam viverra. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum varius sit amet mattis vulputate. Elementum nibh tellus molestie nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Nisl condimentum id venenatis a condimentum vitae. Cursus metus aliquam eleifend mi in. Ut sem nulla pharetra diam. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Egestas integer eget aliquet nibh praesent tristique magna sit. Libero id faucibus nisl tincidunt.
            </p> */}
         </div>

         <div id='emmett-div'>
            <div className="personal-links">
               <a href="https://www.linkedin.com/in/emmett-wechsler-3477a9266/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn Logo" className="linkedin-logo"/>
               </a>
               <a href="https://github.com/EmmettWex" target="_blank" rel="noopener noreferrer">
                  <img src={GitHubLogo} alt="GitHubLogo" className="gh-logo"/>
               </a>
               <a href="https://angel.co/u/emmett-wechsler" target="_blank" rel="noopener noreferrer">
                  <img src={angellist} alt="Angellist Logo" className="angellist-logo"/>
               </a>
            </div>
            <h2 className="dev-name">Emmett Weschler</h2>
            <img className='about-us-page-image' src={emmettAndCat} alt='Emmett with a cat'/>
            <h3 className="pos-title">Backend Lead</h3>
            {/* <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Imperdiet massa tincidunt nunc pulvinar sapien et. Nascetur ridiculus mus mauris vitae ultricies. Faucibus in ornare quam viverra. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum varius sit amet mattis vulputate. Elementum nibh tellus molestie nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Nisl condimentum id venenatis a condimentum vitae. Cursus metus aliquam eleifend mi in. Ut sem nulla pharetra diam. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Egestas integer eget aliquet nibh praesent tristique magna sit. Libero id faucibus nisl tincidunt.
            </p> */}
         </div>
      </div>
      </>
   )
}

export default AboutUsPage;