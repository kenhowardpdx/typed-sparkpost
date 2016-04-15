import { Transmissions } from './transmissions';

declare module sparkpost {
    interface SparkPostStatic {
        new (apiKey: string, options?: BasicOptions): SparkPostStatic;
        new (options: FullOptions): SparkPostStatic;
        origin: string;
        apiVersion: string;
        inboundDomains: any;
        messaegEvents: any;
        recipientLists: any;
        sendingDomains: any;
        supressionList: any;
        templates: any;
        transmissions: Transmissions;
        webhooks: any;
        request(options: BasicOptions, callback: (err, res) => any);
        get(options: BasicOptions, callback: (err, res) => any);
        post(options: BasicOptions, callback: (err, res) => any);
        put(options: BasicOptions, callback: (err, res) => any);
        delete(options: BasicOptions, callback: (err, res) => any);
    }
    
    interface BasicOptions {
        headers?: Headers;
        origin?: string;
        apiVersion?: string;
        uri?: string;
        strictSSL?: boolean; // default = true
        gzip?: boolean; // default = true
    }
    
    interface FullOptions extends BasicOptions {
        key: string;
    }
    
    interface Headers {
        Authorization: string;
        [key: string]: string;
    }
    
    var sparkpost: sparkpost.SparkPostStatic;
}

export = sparkpost.sparkpost;