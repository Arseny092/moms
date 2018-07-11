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
    [
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
            src: "/static/2d.jpg",
            thumbnail: "/static/2m.jpg",
            srcSet: [
            '/static/2m.jpg 320w',
            '/static/2t.jpg 640w',
            '/static/2d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/3d.jpg",
            thumbnail: "/static/3m.jpg",
            srcSet: [
                '/static/3m.jpg 320w',
                '/static/3t.jpg 640w',
                '/static/3d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/4d.jpg",
            thumbnail: "/static/4m.jpg",
            srcSet: [
                '/static/4m.jpg 320w',
                '/static/4t.jpg 640w',
                '/static/4d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/5d.jpg",
            thumbnail: "/static/5m.jpg",
            srcSet: [
                '/static/5m.jpg 320w',
                '/static/5t.jpg 640w',
                '/static/5d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/6d.jpg",
            thumbnail: "/static/6m.jpg",
            srcSet: [
                '/static/6m.jpg 320w',
                '/static/6t.jpg 640w',
                '/static/6d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/7d.jpg",
            thumbnail: "/static/7m.jpg",
            srcSet: [
                '/static/7m.jpg 320w',
                '/static/7t.jpg 640w',
                '/static/7d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/8d.jpg",
            thumbnail: "/static/8m.jpg",
            srcSet: [
                '/static/8m.jpg 320w',
                '/static/8t.jpg 640w',
                '/static/8d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/9d.jpg",
            thumbnail: "/static/9m.jpg",
            srcSet: [
                '/static/9m.jpg 320w',
                '/static/9t.jpg 640w',
                '/static/9d.jpg 960w'
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
    ]

const IMAGESMOBILE =
    [
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
            src: "/static/2d.jpg",
            thumbnail: "/static/2m.jpg",
            srcSet: [
                '/static/2m.jpg 320w',
                '/static/2t.jpg 640w',
                '/static/2d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/3d.jpg",
            thumbnail: "/static/3m.jpg",
            srcSet: [
                '/static/3m.jpg 320w',
                '/static/3t.jpg 640w',
                '/static/3d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/4d.jpg",
            thumbnail: "/static/4m.jpg",
            srcSet: [
                '/static/4m.jpg 320w',
                '/static/4t.jpg 640w',
                '/static/4d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/5d.jpg",
            thumbnail: "/static/5m.jpg",
            srcSet: [
                '/static/5m.jpg 320w',
                '/static/5t.jpg 640w',
                '/static/5d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/6d.jpg",
            thumbnail: "/static/6m.jpg",
            srcSet: [
                '/static/6m.jpg 320w',
                '/static/6t.jpg 640w',
                '/static/6d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/7d.jpg",
            thumbnail: "/static/7m.jpg",
            srcSet: [
                '/static/7m.jpg 320w',
                '/static/7t.jpg 640w',
                '/static/7d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/8d.jpg",
            thumbnail: "/static/8m.jpg",
            srcSet: [
                '/static/8m.jpg 320w',
                '/static/8t.jpg 640w',
                '/static/8d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
        {
            src: "/static/9d.jpg",
            thumbnail: "/static/9m.jpg",
            srcSet: [
                '/static/9m.jpg 320w',
                '/static/9t.jpg 640w',
                '/static/9d.jpg 960w'
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
    ]

export default AboutPage;