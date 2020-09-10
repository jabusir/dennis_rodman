import React from 'react'

import "98.css";
import "./Clip.css";

const Clip = ({ clip }) => {
    return (
        <div className="window clip-window" >
            <div className="title-bar">
                <div className="title-bar-text">{clip.title} by {clip.curator.name}</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" />
                </div>
            </div>

            <div className="window-body">
                <ul className="tree-view">
                    <iframe
                        title={clip.slug}
                        src={`https://clips.twitch.tv/embed?clip=${clip.slug}&parent=localhost&autoplay=false&`}
                        width="478"
                        height="500px"
                        allowFullScreen={true}>
                    </iframe>
                </ul>
            </div>
        </div >
    )
}

export default Clip