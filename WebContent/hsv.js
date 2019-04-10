var goldenRatio = 0.618033988749895;
var h = Math.random();

function hsv_to_rgb(h, s, v){
	var h_i = Math.floor(h * 6);
	var f = h * 6 - h_i;
	var p = v * (1 - s);
	var q = v * (1 - f * s);
	var t = v * (1 - (1 - f) * s);
	console.log(h_i);
	var r=0, g=0, b=0;
	switch(h_i) {
		case 0:
			r = v;
			g = t;
			b = p;
			break;
		case 1:
			r = q;
			g = v;
			b = p;
			break;
		case 2:
			r = p;
			g = v;
			b = t;
			break;
		case 3:
			r = p;
			g = q;
			b = v;
			break;
		case 4:
			r = t;
			g = p;
			b = v;
			break;
		case 5:
			r = v;
			g = p;
			b = q;
			break;
	}
	console.log(Math.floor(r * 256) + "-" + Math.floor(g * 256) + "-" + Math.floor(b * 256));
	return [Math.floor(r * 256), Math.floor(g * 256), Math.floor(b * 256)];
}

function gen_html(){
	h += goldenRatio;
	h %= 1;
	hsv_to_rgb(h, 0.5, 0.95);
}
