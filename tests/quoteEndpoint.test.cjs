const test=require('node:test'),assert=require('node:assert/strict');
const {quoteEndpoint}=require('../lib/quoteEndpoint.ts');
const prod='https://control.transporteszusasa.com/api/public/quote-request',preview='https://zusasa-control-git-feature-revision-integral-pruebas-zusasa.vercel.app/api/public/quote-request';
test('production requires approval and exact production route',()=>{
 const env={VERCEL_ENV:'production',ZUSASA_INTEGRATED_RELEASE_APPROVED:'1',ZUSASA_CONTROL_QUOTE_ENDPOINT:prod};assert.equal(quoteEndpoint(env).href,prod);
 for(const patch of [{ZUSASA_INTEGRATED_RELEASE_APPROVED:'0'},{ZUSASA_CONTROL_QUOTE_ENDPOINT:preview},{ZUSASA_CONTROL_QUOTE_ENDPOINT:prod+'?other=1'},{ZUSASA_CONTROL_QUOTE_ENDPOINT:'https://evil.invalid/api/public/quote-request'}])assert.throws(()=>quoteEndpoint({...env,...patch}));
});
test('preview cannot send a fictitious request to production',()=>{
 assert.equal(quoteEndpoint({VERCEL_ENV:'preview',ZUSASA_CONTROL_QUOTE_ENDPOINT:preview}).href,preview);
 assert.throws(()=>quoteEndpoint({VERCEL_ENV:'preview',ZUSASA_CONTROL_QUOTE_ENDPOINT:prod}));
});
test('local test requires development and loopback for plain HTTP',()=>{
 assert.equal(quoteEndpoint({NODE_ENV:'development',ZUSASA_CONTROL_QUOTE_ENDPOINT:'http://127.0.0.1:3000/api/public/quote-request'}).hostname,'127.0.0.1');
 assert.throws(()=>quoteEndpoint({NODE_ENV:'production',ZUSASA_CONTROL_QUOTE_ENDPOINT:'http://127.0.0.1:3000/api/public/quote-request'}));
});
