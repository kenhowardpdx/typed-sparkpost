import * as request from 'request';

export interface Transmissions {
    send(options: SendOptions, callback: TransmissionsCallback<TransmissionSentResponse>): void;
    all(callback:  TransmissionsCallback<Array<TransmissionSummary>>): void;
    all(options: AllOptions, callback: TransmissionsCallback<Array<TransmissionSummary>>): void;
    find(transmissionID: string, callback: TransmissionsCallback<TransmissionSummary>): void;
}

interface SendOptions {
    transmissionBody: TransmissionBody;
}

interface AllOptions {
    campaign_id?: string;
    template_id?: string;
}

interface TransmissionBody {
    options?: {
        open_tracking?: boolean;
        click_tracking?: boolean;
    };
    campaign_id?: string;
    return_path?: string;
    metadata?: {
        user_type: string;
    };
    substitution_data?: {
        sender: string;
    };
    recipients: Recipient[];
    content: Content;
}

interface EmailAddress {
    email: string;
    name: string;
}

interface Recipient {
    return_path?: string;
    address: EmailAddress;
    tags?: string[];
    metadata?: { [key: string]: string }
    substitution_data?: { [key: string]: string }
}

interface Content {
      from: EmailAddress;
      subject: string;
      reply_to: string;
      headers?: { [key: string]: string };
      text: string;
      html: string;
}

interface TransmissionSummary {
    id: number;
    template_id: string;
    campaign_id: string;
    description: string;
    state: string;
}

interface TransmissionSentResponse {
    id: number;
    total_rejected_recipients: number;
    total_accepted_recipients: number;
}

interface TransmissionsCallback<T> {
    (error: any, response: { results: T }): void;
}