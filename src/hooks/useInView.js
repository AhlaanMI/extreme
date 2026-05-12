import { useRef, useEffect, useState } from "react";
export const useInView = (options = {}) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.2, ...options });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);
    return [ref, isInView];
};
export const useCountUp = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.5 });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    useEffect(() => {
        if (!isVisible)
            return;
        let frameId = 0;
        let startTime = null;
        const animate = (timestamp) => {
            if (startTime === null) {
                startTime = timestamp;
            }
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(target * easedProgress));
            if (progress < 1) {
                frameId = window.requestAnimationFrame(animate);
            }
            else {
                setCount(target);
            }
        };
        frameId = window.requestAnimationFrame(animate);
        return () => window.cancelAnimationFrame(frameId);
    }, [isVisible, target, duration]);
    return [ref, count];
};
