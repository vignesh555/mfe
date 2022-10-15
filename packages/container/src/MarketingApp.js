import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingApp";
// console.log(mount)
const MarketingApp = () => {
    const reference = useRef(null);

    useEffect(() => {
        console.log(reference)
        mount(reference.current)
    }, []);

    return (
        <div ref={reference}></div>
    )
}

export default MarketingApp;