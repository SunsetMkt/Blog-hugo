declare const outside: {
    on: (element: HTMLElement, listener: Function, addEventListener: Function) => void;
    off: (element: HTMLElement, listener: Function, removeEventListener: Function) => void;
};
export default outside;
