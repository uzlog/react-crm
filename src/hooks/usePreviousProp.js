import { useEffect, useRef } from "react";

const usePreviousProp = previousProp => {
    const ref = useRef();

    useEffect(() => {
        ref.current = previousProp;
    }, [previousProp]);

    return ref.current;
};

export default usePreviousProp;
