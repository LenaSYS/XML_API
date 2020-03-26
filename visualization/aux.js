	function randRand(min,max)
	{
			return min+Math.round(max*Math.random());
	}
	
	function easeOutQuad(x)
	{
		return 1 - ( 1 - x ) * ( 1 - x );
	}