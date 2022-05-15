#!/bin/zsh

ls -l ../src | grep '^d' | awk -v q="'" '{ print "export { default as " $9 " } from " q "./"  $9 q }' > ../src/index.ts
