import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import './Archive.css'

import "98.css";


const limit = 5;

const url = 'http://ec2-54-226-136-105.compute-1.amazonaws.com:3000'

const StyledImg = styled.img`
  height: 400px;
  width: 200px;
`
const BackgroundImage = styled.div`
    background-image: url('https://cdn.discordapp.com/attachments/705750130292424764/772910372398301224/image1.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: -1;
`

const WindowsConatiner = styled.div`
  height: 100vh;
  padding-top: 25px;
  @media (max-width: 768px) {
}
`


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 768px) {
    padding-top: 84px;
}
`


const Archive = () => {
    const [skip, setSkip] = useState(0)
    const [images, setImages] = useState([])
    const [loadMoreShowing, setLoadMoreShowing] = useState(true)

    const fetchImages = (skip) => {
      const GET_ALL_IMAGES = `
      query {
          allArchiveImages(skip: ${skip}, first: ${limit}){
            title,
            file {publicUrl}
          }
        }`;

      fetch(`${url}/admin/api`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: GET_ALL_IMAGES,
          }),
        })
        .then(result => result.json())
        .then((res) => {
          const payload = res.data.allArchiveImages
          if (payload.length < limit) {
            setLoadMoreShowing(false)
          }
          setImages(images.concat(payload))
        });
    }

    const handleLoadMore = () => {
      fetchImages(skip+limit)
      setSkip(skip+limit)
    }

    useEffect(() => {
      fetchImages(0)
    }, [])

    return (
        <Container>
          <BackgroundImage />
          <WindowsConatiner>
            {images.map((image) => (
                         <div style={{ width: '350px' }} className="window archive-image">
                         <div className="title-bar">
                             <div className="title-bar-text">{image.title}</div>
                             <div className="title-bar-controls">
                                 <button aria-label="Minimize" />
                                 <button aria-label="Maximize" />
                                 <button aria-label="Close" />
                             </div>
                         </div>
                         <div className="desc-text"></div>
                         <div className="window-body ayo-view">
                             <ul className="tree-view">
                                 <StyledImg src={`${url}${image.file.publicUrl}`}/>
                             </ul>
                         </div>
                     </div>
            ))}
          </WindowsConatiner>
            {loadMoreShowing && <button style={{marginTop: '10px'}}onClick={() => handleLoadMore()}>Load More</button>}
        </Container>
    )
}
export default Archive;