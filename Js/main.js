AOS.init();
document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 0,
		to: 519,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
                to: `${ 10 * modifier }px`,

            }
           
		}
	}).start()
		
})
document.querySelectorAll('.sceneright').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 0,
		to:1000,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
                to: `-1000px`,

            },'--tx': {
                from: '0',
                to: '-250px'
             }
           
		}
	}).start()
		
})