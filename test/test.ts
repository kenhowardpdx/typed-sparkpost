'use strict';

import test = require('blue-tape');
import sparkpost = require('sparkpost');

var sparky = new sparkpost('d67d23322d5d02d86d560cbe4e2252c26b432aec');

export function sendMail(config: { to: { email: string; name: string; }; subject: string; body: string; }, callback: (err: any, res?: any) => any ) {
    let content = {
        html: config.body,
        text: config.body,
        subject: config.subject,
        from: {
            name: 'Test',
            email: 'postmaster@test.com'
        },
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
    
    sparky.transmissions.send(reqOpts, (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res);
    });
}