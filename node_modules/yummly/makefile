# Makefile tasks for Yummly API

VERSION = $(shell node --print --eval "require('package.json').version")
REPORTER = spec
SLOW = 1000
TIMEOUT = 0
GREP = ''

test:
	@echo "\n  Testing Yummly API"
	@node_modules/.bin/mocha --colors --ui bdd --globals expect --require test --reporter $(REPORTER) --slow $(SLOW) --timeout $(TIMEOUT) --grep $(GREP)

test-recipe:
	@make test GREP=^recipe

test-search:
	@make test GREP=^search

version:
	@echo ${VERSION}

.PHONY: test test-recipe test-search version
