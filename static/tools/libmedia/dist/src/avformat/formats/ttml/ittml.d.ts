export declare function parse(text: string): {
    queue: {
        pts: int64;
        duration: int64;
        context: string;
        region: string;
    }[];
    head: any;
};
