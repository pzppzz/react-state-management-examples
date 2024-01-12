let idx = "";
let loop = 35;
while (loop-- >= 0) {
	idx += loop.toString(36);
}
export function uid(length = 12) {
	let id = "";
	while (length-- > 0) {
		id += idx[(Math.random() * idx.length) | 0];
	}
	return id;
}
