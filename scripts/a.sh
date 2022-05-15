#!/bin/zsh

echo "import * as React from 'react';" > ../src/$1/$1.tsx
echo "import createSvgIcon from '../utils/createSvgIcon';\n" >> ../src/$1/$1.tsx

echo "export default createSvgIcon(" >> ../src/$1/$1.tsx

cat ../src/$1/index.ts | grep -i path | sed -e 's/fill="#1A1A1A"//g' | sed -e 's/fill-rule="evenodd" clip-rule="evenodd"//g' | sed 's/$/,/' >> ../src/$1/$1.tsx

echo "'$1'\n)" >> ../src/$1/$1.tsx

echo "export { default } from './$1'" > ../src/$1/index.ts