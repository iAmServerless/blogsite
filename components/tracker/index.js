import { useEffect, useRef } from "react";

let observer;

if(typeof window != "undefined") {
observer = new IntersectionObserver(([entry]) => {
    if(entry.isIntersecting) {
        if(window.gtag) {
            window.gtag('event', window.location.href, {
                event_category: 'scroll',
                event_label: entry.target.dataset.columns,
                value: entry.target.id,
              })
              observer.unobserve(entry.target);
        }
    }
}, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
})
}

export default function Tracker({id, name}) {
    let ref = useRef();
    useEffect(() => {
        if(ref.current) {
            observer.observe(ref.current);
        }
    }, [ref.current])
    return (
        <div ref={ref} id={id} data-columns={name}></div>
    )
}