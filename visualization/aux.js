function randRand(min,max)
{
		return min+Math.round(max*Math.random());
}

function easeOutQuad(x)
{
		return 1 - ( 1 - x ) * ( 1 - x );
}

function easeInBounce(x) 
{
		return 1 - bounceOut( 1 - x );
}

function easeInOutBounce(x) 
{
	return x < 0.5 ?
		( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
		( 1 + bounceOut( 2 * x - 1 ) ) / 2;
}

function easeInElastic(x) 
{
	return x === 0 ? 0 : x === 1 ? 1 :
		-Math.pow( 2, 10 * x - 10 ) * Math.sin( ( x * 10 - 10.75 ) * c4 );
}

// x is the fraction of animation progress, in the range 0..1
function bounceOut(x) {
		var n1 = 7.5625,
				d1 = 2.75;
		if ( x < 1/d1 ) {
				return n1*x*x;
		} else if ( x < 2/d1 ) {
				return n1*(x-=(1.5/d1))*x + 0.75;
		} else if ( x < 2.5/d1 ) {
				return n1*(x-=(2.25/d1))*x + 0.9375;
		} else {
				return n1*(x-=(2.625/d1))*x + 0.984375;
		}
}

function toUTF16(codePoint) {
    var TEN_BITS = parseInt('1111111111', 2);
    function u(codeUnit) {
        return '\\u'+codeUnit.toString(16).toUpperCase();
    }

    if (codePoint <= 0xFFFF) {
        return u(codePoint);
    }
    codePoint -= 0x10000;

    // Shift right to get to most significant 10 bits
    var leadSurrogate = 0xD800 + (codePoint >> 10);

    // Mask to get least significant 10 bits
    var tailSurrogate = 0xDC00 + (codePoint & TEN_BITS);

    return u(leadSurrogate) + u(tailSurrogate);
}