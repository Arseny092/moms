import React from 'react';
import Gallery from 'react-grid-gallery';
import Media from 'react-media';

class AboutPage extends React.Component {
    render () {
        return (
            <Media query="(min-width: 620px)">
                {matches =>
                    matches ? (
                        <Gallery images={IMAGES} rowHeight={300}/>
                    ) : (
                        <Gallery images={IMAGESMOBILE} rowHeight={400}/>
                    )
                }
            </Media>
        );
    }
}

const IMAGES =
    [{
        src: "/static/desktop6.jpg",
        thumbnail: "/static/mobile6.jpg",
        srcSet: [
            '/static/mobile6.jpg 320w',
            '/static/tablet6.jpg 640w',
            '/static/desktop6.jpg 960w'
        ],
    },
        {
        src: "/static/desktop1.jpg",
        thumbnail: "/static/horiz.jpg",
        }]

const IMAGESMOBILE =
    [{
        src: "/static/desktop1.jpg",
        thumbnail: "/static/mobile1.jpg",
    },
        {
            src: "/static/desktop6.jpg",
            thumbnail: "/static/mobile6.jpg",
        }]



export default AboutPage;