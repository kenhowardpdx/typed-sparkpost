export interface Transmissions {
    send(options: SendOptions, callback: (err: Error, res) => any): void;
    all(callback: (err: Error, res) => any): void;
    all(options: AllOptions, callback: (err: Error, res) => any): void;
    find(transmissionID: string, callback: (err: Error, res) => any): void;
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