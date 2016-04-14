'use strict';

import test = require('blue-tape');
import sparkpost = require('sparkpost');

var client = new sparkpost('apikey');

export function sendMail(config: { to: { email: string; name: string; }; subject: string; body: string; }, callback: (err: any, res?: any) => any ) {
    let content = {
        html: config.body,
        text: config.body,
        subject: config.subject,
        from: {
            name: 'Test',
            email: 'postmaster@test.com'
        },
        to: [config.to],
        reply_to: 'postmaster@test.com'
    };
    
    let reqOpts = {
        transmissionBody: {
            options: {
                open_tracking: true,
                click_tracking: true
            },
            recipients: [
                {
                    address: config.to
                }
            ],
            content
        }
    }
    
    client.transmissions.send(reqOpts, (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res);
    });
}