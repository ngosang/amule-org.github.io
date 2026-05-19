.PHONY: install serve build clean

install:
	npm install

serve:
	npm run start

build:
	npm run build

clean:
	rm -rf build/
