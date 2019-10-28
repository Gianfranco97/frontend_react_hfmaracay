import React from 'react';
import './styles.css';

export default class GalleryPhotos extends React.Component {
    constructor(props) {
        super()
        this.state = {
            loading: true,
            photos: []
        }
    }

    async componentDidMount() {
        try {
            const newPhotos = await fetch("https://picsum.photos/v2/list")
            this.setState({
                loading: false,
                photos: await newPhotos.json()
            })
        } catch (error) { }
    }

    render() {
        const { loading, photos } = this.state
        console.log(photos)

        if (loading === true)
            return <text>Loading...</text>
        return (
            <section id="gallery">
                {
                    photos.map(photo => (
                        <article key={photo.id}>
                            {/* <a href="#" target="_blank"> */}
                                <figure>
                                    <img src={photo.download_url} /> 
                                    {/* <figcaption>{photo.author}</figcaption> */}
                                </figure>
                            {/* </a> */}
                        </article>
                    ))
                }
            </section>
        )
    }
}