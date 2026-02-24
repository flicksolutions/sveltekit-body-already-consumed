<script>
	const cats = [{"id":"9sn","url":"https://cdn2.thecatapi.com/images/9sn.jpg","width":683,"height":1024},{"id":"aah","url":"https://cdn2.thecatapi.com/images/aah.jpg","width":500,"height":750},{"id":"c94","url":"https://cdn2.thecatapi.com/images/c94.jpg","width":900,"height":615},{"id":"clc","url":"https://cdn2.thecatapi.com/images/clc.jpg","width":640,"height":480},{"id":"csk","url":"https://cdn2.thecatapi.com/images/csk.jpg","width":273,"height":350},{"id":"dhq","url":"https://cdn2.thecatapi.com/images/dhq.jpg","width":3020,"height":2022},{"id":"dn3","url":"https://cdn2.thecatapi.com/images/dn3.jpg","width":864,"height":480},{"id":"MTY1MjM4OA","url":"https://cdn2.thecatapi.com/images/MTY1MjM4OA.jpg","width":500,"height":313},{"id":"MjAyOTI2Ng","url":"https://cdn2.thecatapi.com/images/MjAyOTI2Ng.jpg","width":604,"height":453},{"id":"2_jMGSBwb","url":"https://cdn2.thecatapi.com/images/2_jMGSBwb.jpg","width":1280,"height":720}]
</script>

{#each cats as cat}
<img src="/img/{cat.id}" />
{/each}