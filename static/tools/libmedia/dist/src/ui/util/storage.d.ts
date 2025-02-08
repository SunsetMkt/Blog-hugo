export declare const LOCAL_STORAGE_KEY_VOLUME = "libmedia_volume";
export declare const LOCAL_STORAGE_KEY_SYSTEM_LANGUAGE = "libmedia_system_language";
export declare const LOCAL_STORAGE_KEY_PLAY_RATE = "libmedia_play_rate";
export declare const LOCAL_STORAGE_KEY_LOOP = "libmedia_play_loop";
export declare function set(key: string, value: any): void;
export declare function get(key: string, defaultValue?: any): any;
export declare function remove(key: string): void;
