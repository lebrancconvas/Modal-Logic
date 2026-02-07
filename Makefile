run:
	cd code && bun index.ts && cd ..  

test:
	cd code && bun run test:cov && cd ..
