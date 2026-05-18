.PHONY: install serve build clean

install:
	npm install

serve:
	hugo server --disableFastRender

build:
	hugo --minify

clean:
	rm -rf public/ resources/_gen/
