import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import './styles.css';

export default class GalleryPhotos extends React.Component {
    constructor(props) {
        super()
        this.state = {
            loading: true,
            photos: [],
            modalIsOpen: false,
            currentIndex: 0,
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

    toggleModal = (currentIndex) => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen, currentIndex }));
    }

    render() {
        const { loading, photos, modalIsOpen, currentIndex } = this.state
        const images =  photos.map(photo => ({src: photo.download_url, author: photo.author, id: photo.id}))
        console.log(photos)

        if (loading === true)
            return <text>Loading...</text>
        return (
            <section id="gallery">
                {
                    images.map((image, index) => (
                        <article key={image.id}>
                            {/* <a href="#" target="_blank"> */}
                            <figure onClick={() => this.toggleModal(index)}>
                                <img src={image.src} />
                                {/* <figcaption>{photo.author}</figcaption> */}
                            </figure>
                            {/* </a> */}
                        </article>
                    ))
                }
                <ModalGateway>
                    {
                        modalIsOpen && (
                            <Modal onClose={this.toggleModal}>
                                <Carousel views={images} currentIndex={currentIndex} />
                            </Modal>
                        )
                    }
                </ModalGateway>
            </section>
        )
    }
}