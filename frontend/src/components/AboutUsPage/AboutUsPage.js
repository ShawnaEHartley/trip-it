import charles from '../../assets/images/charles.jpg';
import shawna from '../../assets/images/shawna.jpg';
import lynsie from '../../assets/images/lynsie.jpg';
import emmett from '../../assets/images/emmett.jpg';

import './AboutUsPage.css'

const AboutUsPage = () => {
   return (
      <div id='about-us-container'>
         <div id='shawna-div'>
            {/* <a href="https://www.linkedin.com/in/shawna-e-hartley/" className="personal-links">Follow Me on LinkedIn</a> */}
            <a href="https://github.com/ShawnaEHartley" className="personal-links">Follow Me on GitHub</a>
            <h2 className="dev-name">Shawna Hartley</h2>
            <img className='about-us-page-image' src={shawna} alt='actually shawna'/>
            <h3 className="pos-title">Team Lead</h3>
            {/* <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Imperdiet massa tincidunt nunc pulvinar sapien et. Nascetur ridiculus mus mauris vitae ultricies. Faucibus in ornare quam viverra. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum varius sit amet mattis vulputate. Elementum nibh tellus molestie nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Nisl condimentum id venenatis a condimentum vitae. Cursus metus aliquam eleifend mi in. Ut sem nulla pharetra diam. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Egestas integer eget aliquet nibh praesent tristique magna sit. Libero id faucibus nisl tincidunt.
            </p> */}
         </div>
         <div id='chad-div'>
            <a href="https://github.com/charles-tyra" className="personal-links">Follow Me on GitHub</a>
            <h2 className="dev-name">Charles 'Chad' Tyra</h2>
            <img className='about-us-page-image' src={charles} alt='charles doing crafts'/>
            <h3 className="pos-title">Flex / CSS Lead</h3>
            {/* <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Imperdiet massa tincidunt nunc pulvinar sapien et. Nascetur ridiculus mus mauris vitae ultricies. Faucibus in ornare quam viverra. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum varius sit amet mattis vulputate. Elementum nibh tellus molestie nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Nisl condimentum id venenatis a condimentum vitae. Cursus metus aliquam eleifend mi in. Ut sem nulla pharetra diam. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Egestas integer eget aliquet nibh praesent tristique magna sit. Libero id faucibus nisl tincidunt.
            </p> */}
         </div>
         <div id='lynsie-div'>
            {/* <a href="https://www.linkedin.com/in/lynsie-aragon-87156a157/" className="personal-links">Follow Me on LinkedIn</a> */}
            <a href="https://github.com/Lynsiearagon" className="personal-links">Follow Me on GitHub</a>
            <h2 className="dev-name">Lynsie Aragon</h2>
            <img className='about-us-page-image' src={lynsie} alt='lynsie eating plantains'/>
            <h3 className="pos-title">Frontend Lead</h3>
            {/* <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Imperdiet massa tincidunt nunc pulvinar sapien et. Nascetur ridiculus mus mauris vitae ultricies. Faucibus in ornare quam viverra. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum varius sit amet mattis vulputate. Elementum nibh tellus molestie nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Nisl condimentum id venenatis a condimentum vitae. Cursus metus aliquam eleifend mi in. Ut sem nulla pharetra diam. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Egestas integer eget aliquet nibh praesent tristique magna sit. Libero id faucibus nisl tincidunt.
            </p> */}
         </div>
         <div id='emmett-div'>
            <a href="https://github.com/EmmettWex" className="personal-links">Follow Me on GitHub</a>
            <h2 className="dev-name">Emmett Weschler</h2>
            <img className='about-us-page-image' src={emmett} alt='a cat'/>
            <h3 className="pos-title">Backend Leader</h3>
            {/* <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Imperdiet massa tincidunt nunc pulvinar sapien et. Nascetur ridiculus mus mauris vitae ultricies. Faucibus in ornare quam viverra. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum varius sit amet mattis vulputate. Elementum nibh tellus molestie nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Nisl condimentum id venenatis a condimentum vitae. Cursus metus aliquam eleifend mi in. Ut sem nulla pharetra diam. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Egestas integer eget aliquet nibh praesent tristique magna sit. Libero id faucibus nisl tincidunt.
            </p> */}
         </div>
      </div>
   )
}

export default AboutUsPage;