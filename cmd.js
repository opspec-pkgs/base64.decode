const fs = require('fs');

fs.writeFileSync('/decodedValue', Buffer.from(process.env.encodedValue,'base64').toString());