import React, { useState } from "react";
import "./gallery.css";

const Gallery = ({ data }) => {
    const [selectedImg, setSelectedImg] = useState(null);

    const closeModal = () => setSelectedImg(null);

    return (
        <div className="gallery-wrapper">
            <div className={`modal ${selectedImg ? "open" : ""}`} onClick={closeModal}>
                {selectedImg && (
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img
                            className="modal-img"
                            src={selectedImg}
                            alt="Велике зображення"
                        />
                        <button className="modal-close" onClick={closeModal}>
                            ✖
                        </button>
                    </div>
                )}
            </div>

            {data.map((group, idx) => (
                <div key={idx} className="gallery-group">
                    <h2 className="gallery-title">{group.title}</h2>
                    <div className="gallery-images">
                        {group.images.map((src, id2) => (
                            <img
                                key={id2}
                                src={src}
                                alt={`${group.title} ${id2}`}
                                className="gallery-image"
                                onClick={() => setSelectedImg(src)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
