.PHONY: install serve build clean

install:
	uv sync

serve:
	uv run mkdocs serve

build:
	uv run mkdocs build

clean:
	rm -rf public/
