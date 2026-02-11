import React, { useRef, useEffect } from "react";
import "./Titles.css";

export default function Titles({ children, className = "" }) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (element) observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    return (
        <h1 ref={ref} className="slide-in-left">
            {children}
        </h1>
    );
}
