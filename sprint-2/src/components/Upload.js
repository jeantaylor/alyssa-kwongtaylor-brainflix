import React from 'react'


export default function Upload() {
    return (
        <main>
            <section className="upload">
                <h1 className="upload__header">Upload Video</h1>
                <form className="upload__form" id="upload__form">
                    <div className="upload__form-inputs">
                        <div className="upload__thumbnail-wrapper">
                            <label className="upload__input-label" for="thumbnail">Video Thumbnail</label>
                            <img src="./assets/Images/Upload-preview-image.jpg" alt="Upload your video here!" />
                        </div>
                    </div>
                    <div className="upload__field-wrapper">
                        <div className="upload__title-wrapper">
                            <label className="upload__input-label" for="title">Title your video</label>
                            <input className="upload__title" type="text" id="title" name="title" placeholder="Add a title to your video" />
                        </div>
                        <div className="upload__desc-wrapper">
                            <label className="upload__input-label" for="desc">Add a video description</label>
                            <input className="upload__desc" type="text" id="desc" name="desc" placeholder="Add a description of your video" />
                        </div>
                    </div>
                    <div className="upload__btn-wrapper">
                        <button className="upload__btn">Cancel</button>
                        <button className="upload__cta" type="submit">Publish</button> 
                    </div>
                </form>
            </section>
        </main>
    )
}
