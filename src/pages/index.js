import React from 'react';
import Gallery from 'react-grid-gallery';
import Media from 'react-media';

class AboutPage extends React.Component {
    render () {
        return (
            <div className="container-main">
            <Media query="(min-width: 620px)">
                {matches =>
                    matches ? (
                        <Gallery images={IMAGES} rowHeight={300} enableImageSelection={false}/>
                    ) : (
                        <Gallery images={IMAGESMOBILE} rowHeight={400} enableImageSelection={false}/>
                    )
                }
            </Media>
            </div>
        );
    }
}

const IMAGES =
    [
        {
            src: "/static/28d.jpg",
            thumbnail: "/static/28m.jpg",
            srcSet: [
                '/static/28m.jpg 320w',
                '/static/28t.jpg 640w',
                '/static/28d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/29d.jpg",
            thumbnail: "/static/29m.jpg",
            srcSet: [
            '/static/29m.jpg 320w',
            '/static/29t.jpg 640w',
            '/static/29d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/30d.jpg",
            thumbnail: "/static/30m.jpg",
            srcSet: [
                '/static/30m.jpg 320w',
                '/static/30t.jpg 640w',
                '/static/30d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/31d.jpg",
            thumbnail: "/static/31m.jpg",
            srcSet: [
                '/static/31m.jpg 320w',
                '/static/31t.jpg 640w',
                '/static/31d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/32d.jpg",
            thumbnail: "/static/32m.jpg",
            srcSet: [
                '/static/32m.jpg 320w',
                '/static/32t.jpg 640w',
                '/static/32d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/11d.jpg",
            thumbnail: "/static/11m.jpg",
            srcSet: [
                '/static/11m.jpg 320w',
                '/static/11t.jpg 640w',
                '/static/11d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/12d.jpg",
            thumbnail: "/static/12m.jpg",
            srcSet: [
                '/static/12m.jpg 320w',
                '/static/12t.jpg 640w',
                '/static/12d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/13d.jpg",
            thumbnail: "/static/13m.jpg",
            srcSet: [
                '/static/13m.jpg 320w',
                '/static/13t.jpg 640w',
                '/static/13d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/14d.jpg",
            thumbnail: "/static/14m.jpg",
            srcSet: [
                '/static/14m.jpg 320w',
                '/static/14t.jpg 640w',
                '/static/14d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/15d.jpg",
            thumbnail: "/static/15m.jpg",
            srcSet: [
                '/static/15m.jpg 320w',
                '/static/15t.jpg 640w',
                '/static/15d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/16d.jpg",
            thumbnail: "/static/16m.jpg",
            srcSet: [
                '/static/16m.jpg 320w',
                '/static/16t.jpg 640w',
                '/static/16d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/17d.jpg",
            thumbnail: "/static/17m.jpg",
            srcSet: [
                '/static/17m.jpg 320w',
                '/static/17t.jpg 640w',
                '/static/17d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/18d.jpg",
            thumbnail: "/static/18m.jpg",
            srcSet: [
                '/static/18m.jpg 320w',
                '/static/18t.jpg 640w',
                '/static/18d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/19d.jpg",
            thumbnail: "/static/19m.jpg",
            srcSet: [
                '/static/19m.jpg 320w',
                '/static/19t.jpg 640w',
                '/static/19d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/20d.jpg",
            thumbnail: "/static/21m.jpg",
            srcSet: [
                '/static/21m.jpg 320w',
                '/static/21t.jpg 640w',
                '/static/21d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/22d.jpg",
            thumbnail: "/static/22m.jpg",
            srcSet: [
                '/static/22m.jpg 320w',
                '/static/22t.jpg 640w',
                '/static/22d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/23d.jpg",
            thumbnail: "/static/23m.jpg",
            srcSet: [
                '/static/23m.jpg 320w',
                '/static/23t.jpg 640w',
                '/static/23d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/24d.jpg",
            thumbnail: "/static/24m.jpg",
            srcSet: [
                '/static/24m.jpg 320w',
                '/static/24t.jpg 640w',
                '/static/24d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/25d.jpg",
            thumbnail: "/static/25m.jpg",
            srcSet: [
                '/static/25m.jpg 320w',
                '/static/25t.jpg 640w',
                '/static/25d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/26d.jpg",
            thumbnail: "/static/26m.jpg",
            srcSet: [
                '/static/26m.jpg 320w',
                '/static/26t.jpg 640w',
                '/static/26d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/27d.jpg",
            thumbnail: "/static/27m.jpg",
            srcSet: [
                '/static/27m.jpg 320w',
                '/static/27t.jpg 640w',
                '/static/27d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/1d.jpg",
            thumbnail: "/static/1m.jpg",
            srcSet: [
                '/static/1m.jpg 320w',
                '/static/1t.jpg 640w',
                '/static/1d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/10d.jpg",
            thumbnail: "/static/10m.jpg",
            srcSet: [
                '/static/10m.jpg 320w',
                '/static/10t.jpg 640w',
                '/static/10d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/2d.jpg",
            thumbnail: "/static/2m.jpg",
            srcSet: [
                '/static/2m.jpg 320w',
                '/static/2t.jpg 640w',
                '/static/2d.jpg 960w'
            ],
            thumbnailWidth: 240,
        }
    ]

const IMAGESMOBILE =
    [
        {
            src: "/static/28d.jpg",
            thumbnail: "/static/28m.jpg",
            srcSet: [
                '/static/28m.jpg 320w',
                '/static/28t.jpg 640w',
                '/static/28d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/29d.jpg",
            thumbnail: "/static/29m.jpg",
            srcSet: [
                '/static/29m.jpg 320w',
                '/static/29t.jpg 640w',
                '/static/29d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/30d.jpg",
            thumbnail: "/static/30m.jpg",
            srcSet: [
                '/static/30m.jpg 320w',
                '/static/30t.jpg 640w',
                '/static/30d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/31d.jpg",
            thumbnail: "/static/31m.jpg",
            srcSet: [
                '/static/31m.jpg 320w',
                '/static/31t.jpg 640w',
                '/static/31d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/32d.jpg",
            thumbnail: "/static/32m.jpg",
            srcSet: [
                '/static/32m.jpg 320w',
                '/static/32t.jpg 640w',
                '/static/32d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/11d.jpg",
            thumbnail: "/static/11m.jpg",
            srcSet: [
                '/static/11m.jpg 320w',
                '/static/11t.jpg 640w',
                '/static/11d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/12d.jpg",
            thumbnail: "/static/12m.jpg",
            srcSet: [
                '/static/12m.jpg 320w',
                '/static/12t.jpg 640w',
                '/static/12d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/13d.jpg",
            thumbnail: "/static/13m.jpg",
            srcSet: [
                '/static/13m.jpg 320w',
                '/static/13t.jpg 640w',
                '/static/13d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/14d.jpg",
            thumbnail: "/static/14m.jpg",
            srcSet: [
                '/static/14m.jpg 320w',
                '/static/14t.jpg 640w',
                '/static/14d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/15d.jpg",
            thumbnail: "/static/15m.jpg",
            srcSet: [
                '/static/15m.jpg 320w',
                '/static/15t.jpg 640w',
                '/static/15d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/16d.jpg",
            thumbnail: "/static/16m.jpg",
            srcSet: [
                '/static/16m.jpg 320w',
                '/static/16t.jpg 640w',
                '/static/16d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/17d.jpg",
            thumbnail: "/static/17m.jpg",
            srcSet: [
                '/static/17m.jpg 320w',
                '/static/17t.jpg 640w',
                '/static/17d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/18d.jpg",
            thumbnail: "/static/18m.jpg",
            srcSet: [
                '/static/18m.jpg 320w',
                '/static/18t.jpg 640w',
                '/static/18d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/19d.jpg",
            thumbnail: "/static/19m.jpg",
            srcSet: [
                '/static/19m.jpg 320w',
                '/static/19t.jpg 640w',
                '/static/19d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/20d.jpg",
            thumbnail: "/static/21m.jpg",
            srcSet: [
                '/static/21m.jpg 320w',
                '/static/21t.jpg 640w',
                '/static/21d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/22d.jpg",
            thumbnail: "/static/22m.jpg",
            srcSet: [
                '/static/22m.jpg 320w',
                '/static/22t.jpg 640w',
                '/static/22d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/23d.jpg",
            thumbnail: "/static/23m.jpg",
            srcSet: [
                '/static/23m.jpg 320w',
                '/static/23t.jpg 640w',
                '/static/23d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/24d.jpg",
            thumbnail: "/static/24m.jpg",
            srcSet: [
                '/static/24m.jpg 320w',
                '/static/24t.jpg 640w',
                '/static/24d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/25d.jpg",
            thumbnail: "/static/25m.jpg",
            srcSet: [
                '/static/25m.jpg 320w',
                '/static/25t.jpg 640w',
                '/static/25d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/26d.jpg",
            thumbnail: "/static/26m.jpg",
            srcSet: [
                '/static/26m.jpg 320w',
                '/static/26t.jpg 640w',
                '/static/26d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/27d.jpg",
            thumbnail: "/static/27m.jpg",
            srcSet: [
                '/static/27m.jpg 320w',
                '/static/27t.jpg 640w',
                '/static/27d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/1d.jpg",
            thumbnail: "/static/1m.jpg",
            srcSet: [
                '/static/1m.jpg 320w',
                '/static/1t.jpg 640w',
                '/static/1d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/10d.jpg",
            thumbnail: "/static/10m.jpg",
            srcSet: [
                '/static/10m.jpg 320w',
                '/static/10t.jpg 640w',
                '/static/10d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/2d.jpg",
            thumbnail: "/static/2m.jpg",
            srcSet: [
                '/static/2m.jpg 320w',
                '/static/2t.jpg 640w',
                '/static/2d.jpg 960w'
            ],
            thumbnailWidth: 240,
        }
    ]

export default AboutPage;