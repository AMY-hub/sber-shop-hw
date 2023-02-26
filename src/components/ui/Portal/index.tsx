import { ReactPortal, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from './props';

export const Portal = ({children, selector}:PortalProps): ReactPortal | null => {
    const [container, setContainer] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const containerElement = document.querySelector(selector);
        if(containerElement) {
            setContainer(containerElement as HTMLElement);
        }
    }, [selector]);

    console.log('PORTAL', container);
    

    if(container) {
        return createPortal(children, container);
    } else {
        return null;
    }
};
