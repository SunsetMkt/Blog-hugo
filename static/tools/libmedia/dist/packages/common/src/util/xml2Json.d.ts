type Options = {
    aloneValueName?: string;
};
export default function xml2Json(xmlStr: string, options?: Options): {
    [x: string]: Record<string, any>;
};
export {};
