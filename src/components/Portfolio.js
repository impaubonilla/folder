import React from 'react'
import { Section, SubHeader, ProgressBar } from '../styled'
import { ProjectsCard, BlogCard, GalerryCard } from './Cards'
import styled from 'styled-components'
import baybayin from '../videos/baybayintagalog.mp4'

export const Video = styled.video`
  width: 100%;
`

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  /* justify-content: center; */
  align-items: flex-start;
  position: relative;
`

export const VideoHeader = styled.ul`
  list-style: none;
  color: #e8e8e8;
  display: flex;
  position: absolute;
  padding: 25px;

  li {
      font-size: 32px;
      font-weight: 600;
      font-family: 'Libre Barcode 39 Extended Text', cursive;                   
      letter-spacing: 3px;
      text-transform: uppercase;
  }
`

export default function Portfolio() {
    return (
        <Section>

            <VideoWrapper>
                <Video playsInline autoPlay loop muted preload="none">
                    <source src={baybayin} />
                </Video>
                <VideoHeader>
                    <li>my workspace</li>
                </VideoHeader>
            </VideoWrapper>

            <SubHeader>This is my workspace or my personal station where I brainstorm and create my ideas.
            This is also my productive area whenever I code or draw or edit photos and videos.
                Sometimes this is where I just relax and play games.</SubHeader>
            <ProjectsCard />
            <SubHeader>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Quod dolorum similique beatae, id at debitis labore? Rerum est non adipisci doloremque voluptas. Maxime porro expedita magnam aspernatur nemo.</SubHeader>
            <BlogCard />
            <SubHeader>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Quod dolorum similique beatae, id at debitis labore? Rerum est non adipisci doloremque voluptas. Maxime porro expedita magnam aspernatur nemo.</SubHeader>
            <GalerryCard />
            <SubHeader>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Quod dolorum similique beatae, id at debitis labore? Rerum est non adipisci doloremque voluptas. Maxime porro expedita magnam aspernatur nemo.</SubHeader>
            <ProgressBar>
                <div className="header">Technology</div>
                <ul>
                    <li className="html">Html5 | Css3 | Sass</li>
                    <li className="js">Javascript</li>
                    {/* <li className="css">Css3</li>
                    <li className="scss">Scss</li> */}
                    <li className="react">React</li>
                </ul>
            </ProgressBar>
        </Section>
    )
}