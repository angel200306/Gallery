import React, { useState, useMemo } from "react";
import "./gallery.css";
import ScrollAnimation from "./components/ScrollAnimation";

const Gallery = ({ data }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;

        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) nextImage();
        if (isRightSwipe) prevImage();
    };

    const allImages = useMemo(() => {
        return data.flatMap(group => group.images);
    }, [data]);

    const closeModal = () => setSelectedIndex(null);

    const nextImage = () => {
        setSelectedIndex(prev =>
            prev < allImages.length - 1 ? prev + 1 : prev
        );
    };

    const prevImage = () => {
        setSelectedIndex(prev =>
            prev > 0 ? prev - 1 : prev
        );
    };

    return (
        <div className="gallery-wrapper">
            <ScrollAnimation />

            <div
                className={`modal ${selectedIndex !== null ? "open" : ""}`}
                onClick={closeModal}
            >
                {selectedIndex !== null && (
                    <div
                        className="modal-content"
                        onClick={e => e.stopPropagation()}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <button onClick={prevImage}>◀</button>

                        <img
                            className="modal-img"
                            src={allImages[selectedIndex]}
                            alt="preview"
                        />

                        <button onClick={nextImage}>▶</button>

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
                        {group.images.map((src, id2) => {
                            const globalIndex = allImages.indexOf(src);

                            return (
                                <img
                                    key={id2}
                                    src={src}
                                    alt={`${group.title} ${id2}`}
                                    className="gallery-image"
                                    onClick={() => setSelectedIndex(globalIndex)}
                                />
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;