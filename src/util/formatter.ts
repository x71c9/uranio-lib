/**
 * Stringify in oneline
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function json_one_line(obj:any, white_space=' ')
		:string{
	if(obj === null || typeof obj !== 'object'){
		return '';
	}
	try{
		return JSON.stringify(
			obj,
			(k,v) => {
				if(v instanceof Set){
					let set_string = `Set(${v.size})`;
					set_string += ` { `;
					const array_set = Array.from(v);
					const set_elements = array_set.map(el => `'${el}'`).join(', ');
					set_string += set_elements + ` }`;
					v = set_string;
				}
				v = (v instanceof Set) ? Array.from(v).toString() : v;
				return v === undefined || k === undefined ? 'undefined' : v;
			},
			white_space
		);
	}catch(e){
		return '[ERROR] ' + e.message;
	}
}
