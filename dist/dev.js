"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const a = index_1.urn_util.url.encode_params({ sort: { _date: 1, _id: -1 }, else: ['3', 4] });
console.log(a);
const b = index_1.urn_util.url.decode_params('sort[_date]=1&sort[_id]=-1&else[]=3&else[]=4');
console.log(b);
// import {urn_log} from './index';
// // urn_log.init(urn_log.LogLevel.FUNCTION_DEBUG);
// urn_log.init({
//   log_level: urn_log.LogLevel.FUNCTION_DEBUG,
//   debug_info: false,
//   prefix_type: true,
//   color: true
// });
// urn_log.warn(`Hello`);
// urn_log.warn(`Hello`);
// urn_log.fn_debug(`Hello`);
// urn_log.fn_debug(`Hello`);
// urn_log.error(`Hello`);
// urn_log.error(`Hello`);
// urn_log.debug(`Hello`);
// urn_log.debug(`Hello`);
// urn_log.warn(`Hello`);
// import {urn_context} from './index';
// type Def = {
// 	fetch: string,
// 	log_prefix: string,
// 	dev_log_prefix: string,
// 	service_obj: {
// 		p1: string
// 		p2: {
// 			p3: string
// 		}
// 	}
// }
// const def:Def = {
// 	fetch: 'axios',
// 	log_prefix: 'A',
// 	dev_log_prefix: 'B',
// 	service_obj: {
// 		p1: 'a',
// 		p2: {
// 			p3: 'd'
// 		}
// 	}
// };
// const over:Partial<Def> = {
//   dev_log_prefix: 'C',
//   service_obj: {
//     p1: '',
//     p2: {
//       p3: '222'
//     }
//   }
// };
// const over2:Partial<Def> = {
// 	dev_log_prefix: 'C2222222'
// };
// const ctx = urn_context.create(def, false);
// ctx.set(over2);
// const o = ctx.get('log_prefix');
// console.log(o);
//# sourceMappingURL=dev.js.map