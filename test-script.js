import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

// export let options = {
// 		maxRedirects: 0,
// 		stages: [
// 			{target: 100, duration: '1s'}
// 		]
// };

// export default function() {

// 	group("page_1 - http://localhost:3000/", function() {
// 		let req, res;
// 		req = [{
// 			"method": "get",
// 			"url": "http://localhost:3000/",
// 			"params": {
// 				"headers": {
// 					"Host": "localhost:3000",
// 					"Connection": "keep-alive",
// 					"Pragma": "no-cache",
// 					"Cache-Control": "no-cache",
// 					"Upgrade-Insecure-Requests": "1",
// 					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
// 					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
// 					"Sec-Fetch-Site": "none",
// 					"Sec-Fetch-Mode": "navigate",
// 					"Sec-Fetch-User": "?1",
// 					"Sec-Fetch-Dest": "document",
// 					"Accept-Encoding": "gzip, deflate, br",
// 					"Accept-Language": "en-US,en;q=0.9"
// 				}
// 			}
// 		},{
// 			"method": "get",
// 			"url": "http://localhost:3000/style.css",
// 			"params": {
// 				"headers": {
// 					"Host": "localhost:3000",
// 					"Connection": "keep-alive",
// 					"Pragma": "no-cache",
// 					"Cache-Control": "no-cache",
// 					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
// 					"Accept": "text/css,*/*;q=0.1",
// 					"Sec-Fetch-Site": "same-origin",
// 					"Sec-Fetch-Mode": "no-cors",
// 					"Sec-Fetch-Dest": "style",
// 					"Referer": "http://localhost:3000/",
// 					"Accept-Encoding": "gzip, deflate, br",
// 					"Accept-Language": "en-US,en;q=0.9"
// 				}
// 			}
// 		},{
// 			"method": "get",
// 			"url": "http://localhost:3000/bundle.js",
// 			"params": {
// 				"headers": {
// 					"Host": "localhost:3000",
// 					"Connection": "keep-alive",
// 					"Pragma": "no-cache",
// 					"Cache-Control": "no-cache",
// 					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
// 					"Accept": "*/*",
// 					"Sec-Fetch-Site": "same-origin",
// 					"Sec-Fetch-Mode": "no-cors",
// 					"Sec-Fetch-Dest": "script",
// 					"Referer": "http://localhost:3000/",
// 					"Accept-Encoding": "gzip, deflate, br",
// 					"Accept-Language": "en-US,en;q=0.9"
// 				}
// 			}
// 		},{
// 			"method": "get",
// 			"url": "http://localhost:3000/api/games/one",
// 			"params": {
// 				"headers": {
// 					"Host": "localhost:3000",
// 					"Connection": "keep-alive",
// 					"Pragma": "no-cache",
// 					"Cache-Control": "no-cache",
// 					"Accept": "application/json, text/plain, */*",
// 					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
// 					"Sec-Fetch-Site": "same-origin",
// 					"Sec-Fetch-Mode": "cors",
// 					"Sec-Fetch-Dest": "empty",
// 					"Referer": "http://localhost:3000/",
// 					"Accept-Encoding": "gzip, deflate, br",
// 					"Accept-Language": "en-US,en;q=0.9"
// 				}
// 			}
// 		},{
// 			"method": "get",
// 			"url": "http://localhost:3000/api/games/Jewelery/similar",
// 			"params": {
// 				"headers": {
// 					"Host": "localhost:3000",
// 					"Connection": "keep-alive",
// 					"Pragma": "no-cache",
// 					"Cache-Control": "no-cache",
// 					"Accept": "application/json, text/plain, */*",
// 					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
// 					"Sec-Fetch-Site": "same-origin",
// 					"Sec-Fetch-Mode": "cors",
// 					"Sec-Fetch-Dest": "empty",
// 					"Referer": "http://localhost:3000/",
// 					"Accept-Encoding": "gzip, deflate, br",
// 					"Accept-Language": "en-US,en;q=0.9"
// 				}
// 			}
// 		},{
// 			"method": "get",
// 			"url": "http://localhost:3000/api/games/Jewelery/together",
// 			"params": {
// 				"headers": {
// 					"Host": "localhost:3000",
// 					"Connection": "keep-alive",
// 					"Pragma": "no-cache",
// 					"Cache-Control": "no-cache",
// 					"Accept": "application/json, text/plain, */*",
// 					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
// 					"Sec-Fetch-Site": "same-origin",
// 					"Sec-Fetch-Mode": "cors",
// 					"Sec-Fetch-Dest": "empty",
// 					"Referer": "http://localhost:3000/",
// 					"Accept-Encoding": "gzip, deflate, br",
// 					"Accept-Language": "en-US,en;q=0.9"
// 				}
// 			}
// 		},{
// 			"method": "get",
// 			"url": "http://placeimg.com/640/480",
// 			"params": {
// 				"headers": {
// 					"Host": "placeimg.com",
// 					"Connection": "keep-alive",
// 					"Pragma": "no-cache",
// 					"Cache-Control": "no-cache",
// 					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
// 					"Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
// 					"Referer": "http://localhost:3000/",
// 					"Accept-Encoding": "gzip, deflate",
// 					"Accept-Language": "en-US,en;q=0.9"
// 				}
// 			}
// 		}];
// 		res = http.batch(req);
// 		// Random sleep between 20s and 40s
// 		sleep(.1);
// 	});

// }


export let options = {
	stages: [
    { duration: '5s', target: 250 },
    { duration: '20s', target: 500 },
    { duration: '5s', target: 1 },
  ],
};

export default function () {
	http.get('http://localhost:3004/api/games/one')
	// sleep(.5)
}



// export let options = {
// 	vus: 200,
// 	duration: '20s'
// };