export declare const command: {
    description: string;
    options: {
        help: {
            type: "alone";
            keys: string[];
            description: string;
            getItemToString(padKeys: number): string;
            getKeysStringLength(): number;
            extractArg(args: string[], forbiddenValues: string[], joinners: string[]): string | boolean | void;
        };
        cacheFolder: {
            type: "detached";
            keys: string[];
            description: string;
            getItemToString(padKeys: number): string;
            getKeysStringLength(): number;
            extractArg(args: string[], forbiddenValues: string[], joinners: string[]): string | boolean | void;
        };
        keepCache: {
            type: "alone";
            keys: string[];
            description: string;
            getItemToString(padKeys: number): string;
            getKeysStringLength(): number;
            extractArg(args: string[], forbiddenValues: string[], joinners: string[]): string | boolean | void;
        };
        verbose: {
            type: "alone";
            keys: string[];
            description: string;
            getItemToString(padKeys: number): string;
            getKeysStringLength(): number;
            extractArg(args: string[], forbiddenValues: string[], joinners: string[]): string | boolean | void;
        };
    };
    examples: string[];
    getOptionsKeys(): string[];
    getOptionsNames(): string[];
    getOptionsToString(): string;
    extractArgs(args: string[]): {
        help: boolean | void;
        cacheFolder: string | void;
        keepCache: boolean | void;
        verbose: boolean | void;
    };
    toString(): string;
};
export declare const helper: string;
