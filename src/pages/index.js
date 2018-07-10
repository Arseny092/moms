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
            src: "/static/8d.jpg",
            thumbnail: "/static/8m.jpg",
            srcSet: [
                '/static/8m.jpg 320w',
                '/static/8t.jpg 640w',
                '/static/8d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
    ]

const IMAGESMOBILE =
    [
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
            src: "/static/8d.jpg",
            thumbnail: "/static/8m.jpg",
            srcSet: [
                '/static/8m.jpg 320w',
                '/static/8t.jpg 640w',
                '/static/8d.jpg 960w'
            ],
            thumbnailWidth: 240,
        },
    ]

export default AboutPage;