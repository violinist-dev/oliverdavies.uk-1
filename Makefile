ENV := dev
PORT := 8000

.PHONY: test

all: init build

clean:
	rm -rf \
		node_modules \
		output_* \
		source/assets/css \
		source/assets/fonts \
		vendor

init:
	composer install
	yarn install
	generate-assets

generate-assets:
	yarn run encore dev

build:
	vendor/bin/sculpin generate --env=$(ENV)

serve:
	vendor/bin/sculpin generate --server --env=$(ENV) --port=$(PORT)

watch:
	vendor/bin/sculpin generate --server --env=$(ENV) --port=$(PORT) --watch

test:
	vendor/bin/phpunit
