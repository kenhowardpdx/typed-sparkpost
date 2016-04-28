import * as request from 'request';
import { Transmissions } from './transmissions';

declare module sparkpost {
    interface SparkPostStatic {
        new (apiKey: string, options?: BasicOptions): SparkPostStatic;
        new (options: request.CoreOptions & FullOptions): SparkPostStatic;
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
        request(options: request.CoreOptions & BasicOptions, callback: request.RequestCallback);
        get(options: request.CoreOptions & BasicOptions, callback: request.RequestCallback);
        post(options: request.CoreOptions & BasicOptions, callback: request.RequestCallback);
        put(options: request.CoreOptions & BasicOptions, callback: request.RequestCallback);
        delete(options: request.CoreOptions & BasicOptions, callback: request.RequestCallback);
    }
    
    interface BasicOptions {
        origin?: string;
        endpoint?: string;
        apiVersion?: string;
        uri?: string;
    }
    
    interface FullOptions extends BasicOptions {
        key: string;
    }
    
    var sparkpost: sparkpost.SparkPostStatic;
}

export = sparkpost.sparkpost;